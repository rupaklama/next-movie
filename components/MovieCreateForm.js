import { useState } from 'react';
import cuid from 'cuid';

import { createMovie } from '../data';
const MovieCreateForm = () => {
  // initial state object to hold form input values
  const initialValues = {
    id: cuid(),
    name: '',
    description: '',
    rating: '',
    genre: '',
  };

  const [form, setForm] = useState(initialValues);

  const handleInputChange = e => {
    // let name = e.target.name;
    // let value = e.target.value;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e, movie) => {
    // e.preventDefault();
    createMovie(movie);
    console.log(form);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          value={form.name}
          name='name'
          onChange={handleInputChange}
          type='text'
          className='form-control'
          id='name'
          aria-describedby='emailHelp'
          placeholder='Lord of the Rings'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Description</label>
        <input
          value={form.description}
          name='description'
          onChange={handleInputChange}
          type='text'
          className='form-control'
          id='description'
          placeholder='Somewhere in Middle-earth...'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Rating</label>
        <input
          value={form.rating}
          name='rating'
          onChange={handleInputChange}
          type='number'
          max='5'
          min='0'
          className='form-control'
          id='rating'
          placeholder='3'
        />
        <small id='emailHelp' className='form-text text-muted'>
          Max: 5, Min: 0{' '}
        </small>
      </div>

      <div className='form-group'>
        <label htmlFor='genre'>Genre</label>
        <input
          value={form.genre}
          name='genre'
          onChange={handleInputChange}
          type='text'
          className='form-control'
          id='genre'
          placeholder='genre'
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default MovieCreateForm;
