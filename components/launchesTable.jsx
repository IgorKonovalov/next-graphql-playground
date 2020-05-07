import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import LAUNCHES_PAST from '../graphql/launches_past.graphql.js';

const LaunchesTable = ({ handleSetLaunchId }) => {
  const { data, loading, error } = useQuery(LAUNCHES_PAST, {
    variables: {
      limit: 9,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <ul
      className="grid grid-cols-3 gap-4 sd:grid-cols-1"
      style={{ margin: '10px' }}
    >
      {data.launchesPast.map((launch) => {
        return (
          <li
            className="flex flex-col rounded overflow-hidden shadow-lg"
            style={{
              minHeight: '50px',
              padding: '5px',
            }}
            key={`launch__${launch.id}`}
            onClick={() => handleSetLaunchId(launch.id)}
          >
            <figure className="flex justify-center flex-col">
              <img
                className="w-10 h-10 m-auto"
                src={launch.links.mission_patch_small}
                alt={`${launch.mission_name}_patch_small`}
              />
              <figcaption className="m-auto font-bold text-xl mb-2">
                {launch.mission_name}
              </figcaption>
            </figure>
            <img
              className="w-full"
              style={{
                margin: '-5px',
                marginTop: 'auto',
                maxHeight: '150px',
                objectFit: 'cover',
              }}
              src={
                launch.links.flickr_images[
                  Math.floor(Math.random() * launch.links.flickr_images.length)
                ]
              }
              alt="Sunset in the mountains"
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

LaunchesTable.propTypes = {
  handleSetLaunchId: PropTypes.func,
};

export default LaunchesTable;
