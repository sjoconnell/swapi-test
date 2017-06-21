import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    axios.all(
      this.props.film.characters
        .map(character => axios.get(character))
    ).then((responses) => {
      this.setState({
        characters: responses.map(response => response.data.name)
      })
    })

  }

  render() {

    return (
      <div>
        <h1>Single Movie!</h1>
      </div>
    )
  }
}

export default Movie