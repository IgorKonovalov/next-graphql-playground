import gql from 'graphql-tag';

const ROCKETS_STARTS_QUERY = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_site {
        site_name
      }
      links {
        flickr_images
        wikipedia
      }
      id
    }
  }
`;

export default ROCKETS_STARTS_QUERY;
