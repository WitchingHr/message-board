const express = require('express');
const path = require('path');
const routes = require('./routes/indexRoutes');

const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// serve static files
app.use(express.static(__dirname + '/public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use('/', routes);

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 Not Found' });
});
