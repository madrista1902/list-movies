import React, { useState } from 'react';

const Addmovie = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleSubmit = () => {
    handleAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add New Movie</h5>
            <div className="mb-3">
              <label htmlFor="titleInput" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="titleInput"
                value={newMovie.title}
                onChange={(event) =>
                  setNewMovie({ ...newMovie, title: event.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descriptionInput" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="descriptionInput"
                rows="3"
                value={newMovie.description}
                onChange={(event) =>
                  setNewMovie({
                    ...newMovie,
                    description: event.target.value,
                  })
                }
              ></textarea>
           </div>
            <div className="mb-3">
              <label htmlFor="posterURLInput" className="form-label">
                Poster URL
              </label>
              <input
                type="text"
                className="form-control"
                id="posterURLInput"
                value={newMovie.posterURL}
                onChange={(event) =>
                  setNewMovie({
                    ...newMovie,
                    posterURL: event.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ratingInput" className="form-label">
                Rating
              </label>
              <input
                type="number"
                className="form-control"
                id="ratingInput"
                min="0"
                max="5"
                value={newMovie.rating}
                onChange={(event) =>
                  setNewMovie({
                    ...newMovie,
                    rating: parseInt(event.target.value),
                  })
                }
              />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Add Your Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addmovie;







