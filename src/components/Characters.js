import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterItems = characters.map(character => (
    <li key={character._id}>
      <Character name={character.name} imageSrc={character.photoUrl} />
    </li>
  ));

  return (
    <ul>
      {characterItems}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
