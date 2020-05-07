import PropTypes from 'prop-types';

export default function ImageWithFallback({ srcSet }) {
  const isEmpty = srcSet.length === 0;
  const randomImageIndex = Math.floor(Math.random() * srcSet.length);
  return (
    <div>
      {isEmpty ? (
        <p>Sorry no image</p>
      ) : (
        <img
          style={{ width: '200px', maxHeight: '200px' }}
          src={srcSet[randomImageIndex]}
          alt=""
        />
      )}
    </div>
  );
}

ImageWithFallback.propTypes = {
  srcSet: PropTypes.array.isRequired,
};
