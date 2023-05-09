import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../Components/MovieDetails/MovieDetails';

import { moviesData } from '../Components/Data/Data';

const MovieDetailsPages = () => {
  const { id } = useParams();
  const movie = moviesData.find(movie => movie.id === parseInt(id));

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPages;