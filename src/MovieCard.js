import React from 'react';
import Movie from './Movie';

const MovieCard = ({filmGroup = []}) => {
  return (
    <div className="movieCard">
      <h1>MovieCard!</h1>
      {
        filmGroup.map(film => <Movie film={film} key={film.episode_id} />)
      }
    </div>
  )
}

export default MovieCard