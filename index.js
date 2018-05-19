const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const subpager = require('./controllers/subpager');
const printables = require('./controllers/printables');

function errorHandler (err, req, res, next) {
  res.render('pages/error', {error:err});
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/robots.txt', (req, res) => res.sendfile('views/pages/robots.txt'))
  .use('/introduction', subpager)
  .use('/story', subpager)
  .use('/characters', subpager)
  .use('/game-help', subpager)
  .use('/printables', printables)
  .use('/media', subpager)
  .use('/etc', subpager)
  .use(errorHandler)
  .get('*', (req, res) => res.render('pages/notfound'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// .use('/', subpager)
// .get('/introduction', (req, res) => res.render('subpages/introduction'))
// .get('/story/prologue', (req, res) => res.render('subpages/prologue'))
// .get('/story/chapter1', (req, res) => res.render('subpages/chapter1'))
// .get('/story/chapter2', (req, res) => res.render('subpages/chapter2'))
// .get('/story/chapter3', (req, res) => res.render('subpages/chapter3'))
// .get('/story/chapter4', (req, res) => res.render('subpages/chapter4'))
// .get('/characters/main', (req, res) => res.render('subpages/charactersmain'))
// .get('/characters/other', (req, res) => res.render('subpages/charactersother'))
// .get('/game-help/abnormalities', (req, res) => res.render('subpages/abnormalities'))
// .get('/game-help/accessories', (req, res) => res.render('subpages/accessories'))
// .get('/game-help/additions', (req, res) => res.render('subpages/additions'))
// .get('/game-help/art-of-fighting', (req, res) => res.render('subpages/art-of-fighting'))
// .get('/game-help/enemies', (req, res) => res.render('subpages/enemies'))
// .get('/game-help/experience', (req, res) => res.render('subpages/experience'))
// .get('/game-help/items', (req, res) => res.render('subpages/items'))
// .get('/game-help/item-locations', (req, res) => res.render('subpages/item-locations'))
// .get('/game-help/shopping', (req, res) => res.render('subpages/shopping'))
// .get('/game-help/sidequests', (req, res) => res.render('subpages/sidequests'))
// .get('/game-help/special-items', (req, res) => res.render('subpages/special-items'))
// .get('/game-help/stardust', (req, res) => res.render('subpages/stardust'))
// .get('/game-help/team-stat-evaluation', (req, res) => res.render('subpages/team-stat-evaluation'))
// .get('/game-help/weapons-armor', (req, res) => res.render('subpages/weapons-armor'))
// .get('/game-help/walkthrough', (req, res) => res.render('subpages/walkthrough'))

// .get('/cool', (req, res) => res.send(cool()))
// .get('/cat', (req, res) => res.send(cat()))
// .get('/yesno', (req, res) => res.send(yesno.allRandom())) // move to API?
// .get('/splash', (req, res) => res.render('partials/examples/splash'))
// .use('/example', example)
// .use('/lorem', lorem)
// // .use('/api', apiRouter)//scuffed
// .use('/times', times)
// .use('/db', psqldb)
// .use('/matrix', matrix)
