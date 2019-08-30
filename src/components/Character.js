import React from 'react';
import PropTypes from 'prop-types';

function Character({ imageSrc, name }) {
  return (
    <>
    <img src={imageSrc} />
    <h2>{name}</h2>
    </>
  );
}

Character.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
