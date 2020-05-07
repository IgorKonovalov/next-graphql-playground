import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import LAUNCHES_PAST from '../graphql/launches_past.graphql.js';

const LaunchesTable = ({ handleSetLaunchId }) => {
  const { data, loading, error } = useQuery(LAUNCHES_PAST, {
    variables: {
      limit: 20,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <ul style={{ listStyle: 'none' }}>
      {data.launchesPast.map((launch) => {
        return (
          <li
            key={`launch__${launch.id}`}
            onClick={() => handleSetLaunchId(launch.id)}
          >
            {launch.mission_name}
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
