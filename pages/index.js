import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import ImageWithFallback from '../components/imageWithFallback.jsx';
import LAUNCHES_PAST from '../graphql/launches_past.graphql.js';

const Home = () => {
  const { data, loading, error } = useQuery(LAUNCHES_PAST, {
    variables: {
      limit: 2,
    },
  });
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
        <title>SpaceX Launches explorer</title>
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
