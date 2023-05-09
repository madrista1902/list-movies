import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const MovieCard = ({ movie }) => {
  return (
    <Card className='movie-card'>
      <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} style={{ width: "200px" }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Rating: {movie.rating}</Card.Text>
        <Link to={`/movies/${movie.id}`}>View Details</Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
