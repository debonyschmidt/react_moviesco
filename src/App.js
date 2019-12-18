import React, { Component } from 'react';
import Axios from 'axios';
import GlobalStyle from './Components/styles/global';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

    const getTitle = movieTitle.map((name) => 

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+name.poster_path}/>
      <Card.Body>
        <Card.Title>{name.title}</Card.Title>
        <Card.Text>
          {name.overview}
        </Card.Text>
        <Button variant="primary">More...</Button>
      </Card.Body>
      </Card>
      
    )

    return (

      <div className="App">
        <GlobalStyle />
        <input type="text" onChange={this.searchHandler}/>
        <button onClick={this.handleChange}>Search</button>
        <div>{getTitle}</div>
      </div>
    );
  }
}

export default App;
