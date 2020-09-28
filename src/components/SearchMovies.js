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
    <section className="movie-search">
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">Movie Name</label>
        <input type="text" name="query" id="query" 
          placeholder="i.e. Jurassic Park" value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="button">Search</button>
      </form>
      <section className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <article key={movie.id} className="card">
            <img className="card--image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + ' poster'}
            />
            <article className="card--content">
              <h3 className="card--title">{movie.title}</h3>
              <p><small>RELEASE DATE: {movie.release_date}</small></p>
              <p><small>Rating: {movie.vote_average}</small></p>
              <p className="card--desc">{movie.overview}</p>
            </article>
          </article>
        ))}
      </section>
    </section>
  )
}