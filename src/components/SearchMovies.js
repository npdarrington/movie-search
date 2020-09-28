import React, {useState} from 'react';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data  = await res.json();
      setMovies(data.results);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">Movie Name</label>
      <input type="text" name="query" id="query" 
        placeholder="i.e. Jurassic Park" value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" className="button">Search</button>
    </form>
  )
}