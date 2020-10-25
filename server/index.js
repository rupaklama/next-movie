// our default server is next js

// creating our custom server with express
const next = require('next')
const express = require('express');

// dev or prod environment
const env = process.env.NODE_ENV !== 'production'

// creating app from next js 
const app = next({ env })

// to handle page requests/routes
const handle = app.getRequestHandler()

// run our app code
app.prepare().then(() => {
  // creating custom server
  const server = express();
  // handling all our page requests coming to our server
  server.get('*', (req, res) => {
    // next.js is handling requests & providing pages where we are navigating to
    return handle(req, res)
  })

  // env variable for dev or prod
  const PORT = process.env.PORT || 3000;

  // handler to listen to our port
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})