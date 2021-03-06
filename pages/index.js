import { getMovies, getCategories } from '../data';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import SideMenu from '../components/SideMenu';
import MovieCreateForm from '../components/MovieCreateForm';

// Next.js automatically adds the React import when JSX is used indeed.
// However keep in mind that we do still need to import React from 'react'
// when the React variable is used.

// Next.js has a file-system based router built on the concept of pages.
// When a file is added to the pages directory it's automatically available as a route.
// The files inside the pages directory can be used to define most common patterns.

// The router will automatically route files named index to the root of the directory.
// pages/index.js → '/' - homepage
// pages/blog/index.js → '/blog' - blog page

// The router supports nested files. If you create 
// a nested folder structure files will be automatically routed in the same way still.
// pages/blog/first-post.js → /blog/first-post

function Home({ movies, images, categories }) {
  // console.log(JSON.stringify(images))
  return (
    <div>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <h3>List a movie!</h3>
              <MovieCreateForm />
            </div>

            <div className='col-lg-9'>
              <Carousel images={images} />

              <div className='row'>
                <MovieList movies={movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  // console.log('Calling from home');
  const movies = await getMovies();
  const categories = await getCategories();

  // rendering images from the server
  // other option is on a client side by passing props directly into <Carousel />
  const images = movies.map((movie) => {
    // returning an array object with map
    return {
      url: movie.cover,
      // creating id
      id: `image-${movie.id}`,
      name: movie.name,
     
    }
  })

  // Make sure the returned object from getInitialProps is a plain Object
  // and not using Date, Map or Set.
  return {
    // this data will be passed to the page component as props
    movies,
    images,
    categories
  };
};

export default Home;

// getStaticProps which is same as older getInitialProps
// is an async function that can be added to any page as a static method
// Static methods are used to implement functions that belong to the particular class,
// but not to any particular object of it.

// getInitialProps is used to asynchronously fetch some data, which then populates props.
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

// export const getStaticProps = async () => {
//   console.log('Calling from home')
//   const movies = await getMovies();

//   // Make sure the returned object from getStaticProps is a plain Object
//   // and not using Date, Map or Set.
//   return {
//     // this data will be passed to the page component as props
//     props: { movies: movies },
//   };
// };

// For the initial page load, getInitialProps will run on the server only.
// getInitialProps will then run on the client when navigating to
// a different route via the next/link component or by using next/router.

// getInitialProps enables server-side rendering in a page and
// allows you to do initial data population, pre-rendering, it means sending
// the page with the data already populated from the server.
// This is especially useful for SEO.

// Deployment. By default, next export will generate an out directory,
// which can be served by any static hosting service or CDN.
// We strongly recommend using Vercel even if your Next. js app is fully static.

// You should use getInitialProps if:
// The data required to render the page is available at build time ahead of a user’s request.
// The data comes from a headless CMS - backend.
// The data can be publicly cached (not user-specific).
// The page must be pre-rendered (for SEO) and
// be very fast — getStaticProps generates HTML and JSON files,
// both of which can be cached by a CDN for performance.

// We’ll talk about the three unique Next.js functions you can use to fetch data for pre-rendering:
// 1. getStaticProps (Static Generation): Fetch data at build time.
// 2. getStaticPaths (Static Generation): Specify dynamic routes to pre-render based on data.
// 3. getServerSideProps (Server-side Rendering): Fetch data on each request.
