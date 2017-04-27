const express = require('express');
const router = express.Router();
const path = require('path');
const {version} = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {

  console.log('req------>', path.resolve('./views/index.html'));
  //return res.sendFile(path.resolve('./views/index.html'));
  res.render('index', {version});
});
router.get('/login', (req, res, next) => {
  res.render('login', {version});
});


module.exports = router;
