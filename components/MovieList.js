import { Fragment } from 'react';

const MovieList = ({ movies }) => {
  const textDisplay = text => {
    // display first fifty characters
    if (text && text.length > 100) {
      return text.substr(0, 100) + '...';
    }
    return text;
  };
  const renderMovies = () => {
    return movies.map(movie => (
      <div className='col-lg-4 col-md-6 mb-4' key={movie.id}>
        <div className='card h-100'>
          <a href='#'>
            <img className='card-img-top' src={movie.image} alt='' />
          </a>
          <div className='card-body'>
            <h4 className='card-title'>
              <a href='#'>{movie.name}</a>
            </h4>
            <h5>$24.99</h5>
            <p className='card-text'>{textDisplay(movie.description)}</p>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>{movie.rating}</small>
          </div>
        </div>
      </div>
    ));
  };
  return <Fragment>{renderMovies()}</Fragment>;
};

export default MovieList;
