var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/user/login');
});

module.exports = router;
