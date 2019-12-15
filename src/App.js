import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  state = {
    movieData: [],
    searchInput: " ",
  }

  searchHandler = (event) => {
  const value = event.target.value;
  this.setState(state => ({...state, searchInput: value}));
  }

  handleChange= () => {
      const url_key = 'dc9c1f8a8037bda70dfd05ce25d71cac'
      const SERVER_URL = `https://api.themoviedb.org/3`;
      Axios.get(`${SERVER_URL}/search/movie?api_key=${ url_key }&query=${ this.state.searchInput }`).then(res => {
        const movieData = res.data.results;
        console.log(movieData)
        this.setState({ movieData });
      });
  }
  
  render() {

    const movieTitle = this.state.movieData

    const getTitle = movieTitle.map((name, id) => <li key={id}> {name.original_title} </li> )

    return (
      <div className="App">
        <input type="text" onChange={this.searchHandler}/>
        <button onClick={this.handleChange}>Search</button>
        <ul>{getTitle}</ul>
      </div>
    );
  }
}

export default App;
