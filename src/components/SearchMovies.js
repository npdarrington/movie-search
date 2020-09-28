import React from 'react';

export default function SearchMovies() {
  const searchMovies = async (event) => {
    event.preventDefault();
    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data  = await res.json();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">Movie Name</label>
      <input type="text" name="query" id="query" placeholder="i.e. Jurassic Park"/>
      <button type="submit" className="button">Search</button>
    </form>
  )
}