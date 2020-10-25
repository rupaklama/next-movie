import { Fragment } from 'react';

import Link from 'next/link';
const MovieList = ({ movies }) => {
  const textDisplay = text => {
    // display first 100 characters
    if (text && text.length > 100) {
      return text.substr(0, 100) + '...';
    }
    return text;
  };
  const renderMovies = () => {
    return movies.map(movie => (
      <div className='col-lg-4 col-md-6 mb-4' key={movie.id}>
        <div className='card h-100'>
          <Link href={`/movies/${movie.id}`}>
            <a>
              <img className='card-img-top' src={movie.image} alt='' />
            </a>
          </Link>
          <div className='card-body'>
            <h4 className='card-title'>
              <Link href='/movies/[id]' as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
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
