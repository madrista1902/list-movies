
import { Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

const Navbar = ({ onFilterChange, filter }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value === '' && (!filter || filter.rating === 0)) {
      onFilterChange(null);
    } else {
      onFilterChange({ title: event.target.value, rating: filter ? filter.rating : 0 });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          List Movie
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">{MovieList}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Movie
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
