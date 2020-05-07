import gql from 'graphql-tag';

const LAUNCHES_PAST = gql`
  query LaunchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
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

export default LAUNCHES_PAST;
