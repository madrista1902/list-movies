import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './Components/MovieList/MovieList';
import Addmovie from './Components/Addmovie/Addmovie';
import MovieDetailsPages from './Pages/MovieDetailsPages';
import { moviesData } from './Components/Data/Data';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
    );
  });

  return (
    <div className="container-fluid">
      <Navbar onFilterChange={handleFilterChange} filter={filter} />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/add" element={<Addmovie handleAddMovie={handleAddMovie} />} />
        <Route path="/movies/:id" element={<MovieDetailsPages movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;