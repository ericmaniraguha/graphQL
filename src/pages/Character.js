import React from 'react';
import useCharacter from '../hooks/useCharacter';
import './Character.css';

const Character = () => {
  const { data, loading, error } = useCharacter(1);

  console.log({ error, loading, data });

  if (error) return <div>Something went wrong.</div>;

  if (loading) return <div>spinner....</div>;

  return (
    <div className='Character'>
      <img src={data.character.image} width={750} height={750} />
      <div className='Character-content'>
        <h1>{data.character.name}</h1>
        <h1>{data.character.gender}</h1>
        <div className='Character-episode'>
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} -<b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
