import React, { Component } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import axios from 'axios';

class App extends Component {

  state = {
    films: []
  };

  componentDidMount() {
    axios.get('http://swapi.co/api/films/')
      .then((response) => {
        this.setState({
          films: response.data.results
        })
      })
      .catch((error) => console.error('axios error', error))
  }

  render() {
    return (
      <div className="App">
        <Sidebar films={this.state.films} />
        <Main films={this.state.films} />
      </div>
    );
  }
}

export default App;
