const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const routes = require('./routes');

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors())
app.use(express.json());

// 2) ROUTES
app.use('/movies', routes.movies);

module.exports = app;