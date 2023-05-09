import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
import { Container } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Container fluid>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </Container>
  );
};

export default MovieList;
