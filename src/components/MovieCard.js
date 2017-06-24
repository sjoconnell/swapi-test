import React from 'react';
import Movie from './Movie';

const MovieCard = ({filmGroup = []}) => {
  return (
    <div className="movieCard">
      {
        filmGroup.map(film => <Movie film={film} key={film.episode_id} />)
      }
      {
        filmGroup.length < 2 &&
        <div className="movie-none">
          <img className="" src={require('../css/images/lightsaber2.png')} alt="lightsaber"/>
        </div>
      }
    </div>
  )
}

export default MovieCard