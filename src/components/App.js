import React, { Component } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import axios from 'axios';

class App extends Component {

  state = {
    films: [],
    fav: {},
    least: {}
  };

  componentDidMount() {
    axios.all([axios.get('http://swapi.co/api/films/'), axios.get('http://swapi.co/api/people/20'), axios.get('http://swapi.co/api/people/44')])
      .then(axios.spread((films, fav, least) => {
        this.setState({
          films: films.data.results,
          fav: fav.data,
          least: least.data
        })
      }))
      .catch((error) => console.error('axios error', error))
  }

  render() {
    return (
      <div className="App">
        <Sidebar films={this.state.films} fav={this.state.fav} least={this.state.least} />
        <Main films={this.state.films} />
      </div>
    );
  }
}

export default App;
