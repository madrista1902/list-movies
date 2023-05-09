import React from 'react';
import { useParams } from 'react-router-dom';

const Filter = ({ titleFilter, ratingFilter, setTitleFilter, setRatingFilter }) => {
  const { category } = useParams(); 

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  return (
    <div className="row">
      <h1>Filter Movies by {category}</h1> {/* display the category from the URL */}
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Search by Title" value={titleFilter} onChange={handleTitleChange} />
      </div>
      <div className="col-md-6">
        <select className="form-select" value={ratingFilter} onChange={handleRatingChange}>
          <option value="">Filter by Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
