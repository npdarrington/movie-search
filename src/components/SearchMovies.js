import React from 'react';

export default function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query">Movie Name</label>
      <input type="text" name="query" id="query" placeholder="i.e. Jurassic Park"/>
      <button type="submit" className="button">Search</button>
    </form>
  )
}

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit