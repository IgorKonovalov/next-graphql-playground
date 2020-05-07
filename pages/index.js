import React from 'react';
import Head from 'next/head';
import ImageWithFallback from '../components/imageWithFallback.jsx';
import LaunchesTable from '../components/launchesTable.jsx';

const Home = () => {
  const [launchId, handleSetLaunchId] = React.useState('');

  return (
    <div>
      <Head>
        <title>SpaceX Launches explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LaunchesTable handleSetLaunchId={handleSetLaunchId} />
      {launchId ? <ImageWithFallback launchId={launchId} /> : null}
    </div>
  );
};

export default Home;
