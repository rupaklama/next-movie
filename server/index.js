// our default server is next js

// creating our custom server with express
const next = require('next');
const express = require('express');

// dev or prod environment
const env = process.env.NODE_ENV !== 'production';

// creating app from next js
const app = next({ env });

// to handle page requests/routes
const handle = app.getRequestHandler();

// importing local data
const moviesData = require('./data.json')

// run our app code
app.prepare().then(() => {
  // creating custom server
  const server = express();
  // handling all our page requests coming to our server

  // custom endpoints before request handler below
  // sending json data
  server.get('/api/v1/movies', (req, res) => {
    res.json(moviesData);
  });

  // ExpressJS provides sendFile() function which will basically send
  // HTML files to browser which then automatically interpreted by browser.
  // All we need to do is in every route to deliver an appropriate HTML file.
  // sending html document
  // server.get('/faq', (req, res) => {
  //   res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
  // });

  server.get('*', (req, res) => {
    // next.js is handling requests & providing pages where we are navigating to
    return handle(req, res);
  });

  // env variable for dev or prod
  const PORT = process.env.PORT || 3000;

  // handler to listen to our port
  server.use(handle).listen(PORT, err => {
    if (err) throw err;
    console.log('> Ready on port ' + PORT);
  });
});
