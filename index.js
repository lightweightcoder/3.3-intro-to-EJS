import express from 'express';

// "create" the server
const app = express();

// Port number
const PORT = 3004;

// set the library (template engine) to use for all requests
app.set('view engine', 'ejs');

// 3.3 Intro to EJS
// set the route
// app.get('/fruits/:name', (request, response) => {
//   const data = {
//     user: {
//       name: 'kai',
//     },
//     header: {
//       header1: 'Banana App',
//     },
//   };

//   // get the request parameter value
//   const { name } = request.params;

//   // add new fruit name as a key-value pair to data object
//   data.fruit = name;

//   // response.render take 2 arguments:
//   // 1. The path/name of a file (without extension) in the views directory.
//   // 2. Data that will be used to render the HTML. This is an object.
//   response.render('index', data);
// });

// 3.3.1 ejs loops
app.get('/bananas', (request, response) => {
  const data = {
    user: {
      name: 'kai',
    },
    header: {
      header1: 'Banana App',
    },
    fruit: 'banana',
    users: [
      { name: 'kai' },
      { name: 'jim' },
      { name: 'susan' },
    ],
  };

  response.render('index', data);
});

// initialise the request listener port functionality
app.listen(PORT);
