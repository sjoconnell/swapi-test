import React from 'react';

const Character = ({ character = {}, favorite }) => {
  return (
    <div className="character">
    { character.name ?
      <img className="character-image" src={require(`../css/images/${character.name}.png`)} alt={character.name} />
      :
      <img className="character-image" src={require("../css/images/bb8.jpg")} alt="BB8" />
    }
      <div className="character-overlay" style={{backgroundColor: favorite ? "#207e0d" : "DarkRed"}}>
        <div className="character-overlay-text">
          <h1>{favorite ? "" : "Least"} Favorite Character</h1>
          <br/>
          <b>{character.name}</b>
          <p>Gender: {character.gender}</p>
          <p>Height: {character.height} (cm)</p>
          <p>Weight: {character.mass} (kg)</p>
        </div>
      </div>
    </div>
  )
}

export default Character