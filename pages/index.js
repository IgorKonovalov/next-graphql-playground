import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import ImageWithFallback from '../components/imageWithFallback.jsx';
import ROCKETS_STARTS_QUERY from '../graphql/rocketsStarts.query';

const Home = () => {
  const { data, loading, error } = useQuery(ROCKETS_STARTS_QUERY);
  const [launchId, handleSetLaunchId] = React.useState('');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      {launchId ? (
        <ImageWithFallback
          srcSet={
            data.launchesPast.find(({ id }) => id === launchId).links
              .flickr_images
          }
        />
      ) : null}
    </div>
  );
};

export default Home;
