import React from 'react';
import PropTypes from 'prop-types';

function Character({ imageSrc, name }) {
  return (
    <>
    <img src={imageSrc ? imageSrc : 'https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg'} />
    <h2>{name}</h2>
    </>
  );
}

Character.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Character;
