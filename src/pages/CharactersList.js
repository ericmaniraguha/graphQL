import React from 'react';
import './CharactersList.css';
import useCharacters from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const { id } = useParams();

  const { error, loading, data } = useCharacters(id);

  if (loading) return <div className='loading'>spinner...</div>;

  if (error) return <div className='error'>Something went wrong</div>;

  return (
    <div className='CharactersList'>
      {data.characters.results.map((characters) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={characters.image} />
            <h2>{characters.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
