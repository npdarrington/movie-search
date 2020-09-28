import React from 'react';
import ReactDOM from 'react-dom';

import SearchMovies from './components/SearchMovies'

import './App.css'

class Main extends React.Component {
  render() {
    return (
      <article className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </article>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));