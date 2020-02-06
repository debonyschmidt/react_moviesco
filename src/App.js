import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GlobalStyle from './Components/styles/Global';
import Header from './Components/Header';
import ShowResults from './Components/ShowResults';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state = {
    movieData: [],
    searchInput: " ",
    isSearchSubmitted: false,
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
        this.setState({ movieData });
      });

      this.setState ({
        isSearchSubmitted: true
      });
  }
  
  render() {
    const isSearchSubmitted = this.state.isSearchSubmitted;
    const searchInput = this.state.searchInput;
    const movieTitle = this.state.movieData;
    const getTitle = movieTitle.map((name) => 

      <Card style={{ width: '18rem', padding: '10px', margin: '10px'}}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+name.poster_path}/>
      <Card.Body>
        <Card.Title>{name.title}</Card.Title>
        {/* <Card.Text>
          {name.overview}
        </Card.Text> */}
        <Button variant="primary">More...</Button>
      </Card.Body>
      </Card>
      )

    return (

      <div className="App">
        <GlobalStyle />
        <Header 
          search={this.searchHandler}
          submit={this.handleChange}   
        />;

        {isSearchSubmitted ? (
          <ShowResults searchInput={searchInput} />
        ) : ('test') };

        <div className='movies_wrapper'>{getTitle}</div>
      </div>
    );
  }
}

export default App;
