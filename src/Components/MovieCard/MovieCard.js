import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, posterUrl, rating ,trailer} = movie;

  return (
    <div className="card">
      <img src={posterUrl} className="card-img-top" alt="Movie Poster" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong></strong> {rating}</p>
        <a href={trailer} className="btn btn-primary" target="_blank" rel="noreferrer">Watch Trailer</a>
      </div>
    </div>
  );
};


export default MovieCard