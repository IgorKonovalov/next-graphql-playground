import PropTypes from 'prop-types';

export default function ImageWithFallback({ launchId }) {
  return <p>{launchId}</p>;
}

ImageWithFallback.propTypes = {
  launchId: PropTypes.string.isRequired,
};
