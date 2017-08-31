const express = require('express');

// Express server handling requests and responses
const app = express();
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.get('/about', (req, res, next) => {
//   send views/index.ejs for displaying in the browser
//  res.render('about');
// });


// ...
const expressLayouts = require('express-ejs-layouts');

// ...




app.get('/mypage', (req, res, next) => {
  res.render('mypage', {
    name: "Ironhacker",
    citiesTraveled: ["Miami", "Madrid", "Barcelona"]
  });
});



app.get('/hello', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
        This is my second route
      </body>
    </html>
  `);
});



// our first Route:
//app.get('/', (request, response, next) => {
//  response.send('<p>Welcome Ironhacker. :)</p>');
//  next();
//});

app.get('/', (req, res, next) => {
  res.render('index', {
        name: "Ironhacker",
        age: 25,
        country: "US",
        citiesTraveled: ["Miami", "Madrid", "Barcelona"]
      });
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
