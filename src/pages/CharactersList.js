import React from 'react';
import './CharactersList.css';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  // const obj = useQuery(GET_CHARACTERS);
  // obj.error;
  // obj.loading;
  // obj.data;

  const { error, loading, data } = useQuery(GET_CHARACTERS);
  console.log(error, loading, data);

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
