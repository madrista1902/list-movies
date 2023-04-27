import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css'
const MovieList =  ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <div className="col-md-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList
