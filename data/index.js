const MOVIE_DATA = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 4.8,
    genre: 'drama',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
    cover: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.7,
    genre: 'action, crime, drama',
    image:
      'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
    cover: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '3',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image:
      'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
    cover: 'https://unsplash.com/photos/5dB9WGpJbFc'
  },
];

const CATEGORY_DATA = [
  { id: '1', name: 'drama'},
  { id: '2', name: 'action'},
  { id: '3', name: 'horror'},
  { id: '4', name: 'documentary'},
]

// to get movies
export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA);
    }, 50);
  });
};

// helper function to fetch movie by id
export const getMovieById = id => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(movie => {
      return movie.id === id;
    });
    const movie = MOVIE_DATA[movieIndex];
    setTimeout(() => {
      resolve(movie);
    }, 50);
  });
};

// to get categories
export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  });
}

// to create movie
export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    // Create ID for movie
    MOVIE_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIE_DATA)
      // reject('Cannot fetch data!')
    }, 50)
  })
}