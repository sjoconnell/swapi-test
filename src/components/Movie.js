import React from 'react';

const getCharacters = (id) => {
  const characters = {
    1: ['Anakin Skywalker', 'Padme Amidala', 'Darth Maul'],
    2: ['Anakin Skywalker', 'Padme Amidala', 'Yoda'],
    3: ['Anakin Skywalker', 'Padme Amidala', 'Yoda'],
    4: ['Luke Skywalker', 'Leia Organa', 'Han Solo'],
    5: ['Luke Skywalker', 'Darth Vader', 'Yoda'],
    6: ['Luke Skywalker', 'Darth Vader', 'Leia Organa'],
    7: ['Rey', 'Finn', 'Kylo Ren']
  }
  return characters[id]
}

const Movie = ({film}) => {
  return (
    <div className="movie">
      <img className="movie-image" src={require(`../css/images/${film.title}.jpeg`)} alt={film.title}/>
      <div className="movie-info">
        <h1 className="movie-info-title">{film.title}</h1>
        <h2 className="movie-info-director">{film.director}</h2>
      </div>
      <div className="movie-characters">
        {
          getCharacters(film.episode_id)
            .map(character =>
              <div className="movie-characters-container" key={character}>
                <img className="movie-characters-image" src={require(`../css/images/${character}.png`)} alt={character}  />
                <div className="movie-characters-container-hover">{character}</div>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Movie