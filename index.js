const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

// const matrix = require('./controllers/matrix');

function errorHandler (err, req, res, next) {
  res.render('pages/error', {error:err});
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
