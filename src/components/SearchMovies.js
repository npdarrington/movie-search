import React from 'react';

export default function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">Movie Name</label>
      <input type="text" name="query" id="query" placeholder="i.e. Jurassic Park"/>
      <button type="submit" className="button">Search</button>
    </form>
  )
}