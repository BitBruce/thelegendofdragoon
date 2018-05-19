const express     = require('express');
const router      = new express.Router();

//TODO: error routing

// Optional parameter! ?p=
router.get('/', function(req, res) {
  payload = {};
  let p = req.query.p;
  if (p) {
    let page = '../partials/examples/' + p + '.ejs';
    payload.page = page;
  }
  res.render('pages/example', payload);
});

// /example/:page
router.get('/:page', function(req, res) {
  payload = {};
  let p = req.params.page;
  let page = '../partials/examples/' + p + '.ejs';
  payload.page = page;
  res.render('pages/example', payload);
});

module.exports = router;
