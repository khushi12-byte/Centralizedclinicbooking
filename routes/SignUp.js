var express = require('express');
var router = express.Router();

/* GET SignUp page. */

  router.get('/', function(req, res, next) {
  res.render('SignUp', { title: 'hello' });
});

module.exports = router;
