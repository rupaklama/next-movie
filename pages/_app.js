import 'bootstrap/dist/css/bootstrap.min.css';

import App from 'next/app';

// html head element
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This is our main page.
// This app page which render first and it is a wrapper page or container
// responsible for rendering all other pages.

class MyApp extends App {
  static async getInitialProps(appContext) {
    // console.log('Calling from _app');
    // Executing getInitialProps of page, default props of page we are navigated to
    // which is at {...appProps.pageProps }
    // pageProps is default props of page we are navigated to
    // So in our home page, getInitialProps is returning movies
    // therefore, pageProps of appProps contain our movies
    // pageProps is going to be different with different pages props
    const appProps = await App.getInitialProps(appContext);
    // console.log(appProps);

    return { appProps };

    // <Component {...appProps.pageProps} />
    // Now, we can pass movies data to other components as well through pageProps
    // which is added to our appContext - global state Context object
  }
  render() {
    const { Component, appProps } = this.props;

    return (
      // Component holds page you are navigating to
      // Component is reference to other pages
      <div>
        <Head>
          <title>Home</title>
        </Head>

        <Navbar />

        <div className='base-page'>
          <Component {...appProps.pageProps} />
        </div>

        <Footer />

        <style jsx>
          {`
            .base-page {
              padding-top: 80px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MyApp;

// getInitialProps receives a single argument called context,
// it's an object with the following properties:

// pathname - Current route. That is the path of the page in /pages
// query - Query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shown in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering
