const express     = require('express');
const router      = new express.Router();

router.get('/:page', function(req, res) {
  payload = {};
  let p = req.params.page;
  let page = '../subpages/' + p + '.ejs';
  payload.page = page;
  res.render('pages/printables', payload);
});

module.exports = router;
