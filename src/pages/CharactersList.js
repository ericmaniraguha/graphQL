import React from 'react';
import './CharactersList.css';
import useCharacters from '../hooks/useCharacters';

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <div className='loading'>spinner...</div>;

  if (error) return <div className='error'>Something went wrong</div>;

  return (
    <div className='CharactersList'>
      {data.characters.results.map((characters) => {
        return (
          <div>
            <img src={characters.image} />
            <h2>{characters.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
