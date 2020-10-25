// next js providers dynamic routes - [id]
// To match a dynamic segment you can use the bracket syntax. This allows you to match named parameters.
// pages/blog/[slug].js → /blog/:slug (/blog/hello-world)

// If you want to access the router object inside any function component in your app,
// you can use the useRouter hook to access param values
// import { useRouter } from 'next/router';

import { getMovieById } from '../../data';

const Movie = ({ movie }) => {
  // const router = useRouter();
  // console.log(router)
  // to fetch movie by param - id
  // const { id } = router.query; // param name - 'id' of page

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4'>{movie.name}</h1>
        <p className='lead'>{movie.description}</p>
        <hr className='my-4' />
        <p>{movie.genre}</p>
        <a className='btn btn-primary btn-lg' href='#' role='button'>
          Learn more
        </a>
      </div>
    </div>
  );
};

// pre-rendering data in the server
Movie.getInitialProps = async context => {
  // to access data in context object
  const id = context.query.id;

  const movie = await getMovieById(id);

  return { movie };
};

export default Movie;

// getInitialProps receives a single argument called context, it's an object with the following properties:

// pathname - Current route. That is the path of the page in /pages
// query - Query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shown in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering
