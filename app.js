// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

// Server Started
app.listen(3000, () => {
 
  console.log('My first app listening on port 3000!');
});
// // ...
// const expressLayouts = require('express-ejs-layouts');

// // ...


app.get('/avengers', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Avengers</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Avengers</h1>
        <p>This is my second route</p>
        <img src="/images/avengers.jpg" />
      </body>
    </html>
    `);
  });