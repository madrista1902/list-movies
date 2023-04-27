import React, { useState } from 'react';
import { moviesData } from './Components/Data/Data';
import Addmovie from './Components/Addmovie/Addmovie';
import Filtermovies from './Components/Filtermovies/Filtermovies';
import MovieList from './Components/MovieList/MovieList';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleAddMovie = (newMovie) => {
    const newId = movies.length + 1;
    const newMovieWithId = { ...newMovie, id: newId };
    setMovies([...movies, newMovieWithId]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === '' || movie.rating.toString() === ratingFilter)
    );
  });

  return (
    <div className="container">
      <Addmovie handleAddMovie={handleAddMovie} />
      <Filtermovies
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
