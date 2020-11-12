import express from 'express';
import { read } from './jsonFileStorage.js';

// "create" the server
const app = express();

// Port number
const PORT = 3004;

// set the library (template engine) to use for all requests
app.set('view engine', 'ejs');

// set the route
app.get('/bananas', (request, response) => {
  const data = {
    user: {
      name: 'kai',
    },
  };

  // response.render take 2 arguments:
  // 1. The path/name of a file (without extension) in the views directory.
  // 2. Data that will be used to render the HTML. This is an object.
  response.render('index', data);
});

// initialise the request listener port functionality
app.listen(PORT);
