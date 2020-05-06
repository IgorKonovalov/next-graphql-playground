import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import ROCKETS_STARTS_QUERY from '../graphql/rocketsStarts.query';

const Home = () => {
  const { data, loading, error } = useQuery(ROCKETS_STARTS_QUERY);

  console.log(data);

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
      <ul>
        {data.launchesPast.map((job) => {
          return <li key={`job__${job.id}`}>{job.mission_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
