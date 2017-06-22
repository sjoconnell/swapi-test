import React from 'react';

const getCharacters = (id) => {
  const characters = {
    1: ['anakin', 'amidala', 'maul'],
    2: ['anakin', 'amidala', 'yoda'],
    3: ['anakin', 'amidala', 'yoda'],
    4: ['luke', 'leia', 'han'],
    5: ['luke', 'vader', 'yoda'],
    6: ['luke', 'vader', 'leia'],
    7: ['rey', 'finn', 'kylo']
  }
  return characters[id]
}

const Movie = ({film}) => {
  return (
    <div className="movie">
      <img className="movie-image" src={require(`../css/images/${film.title}.jpeg`)} alt={film.title}/>
      <h1 className="movie-title">{film.title}</h1>
      <h2 className="movie-director">{film.director}</h2>
      <div className="movie-characters">
        {
          getCharacters(film.episode_id)
            .map(character => <img className="movie-characters-image" src={require(`../css/images/${character}.png`)} alt={character} key={character} />)
        }
      </div>
    </div>
  )
}

export default Movie