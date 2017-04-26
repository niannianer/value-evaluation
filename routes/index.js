var express = require('express');
var router = express.Router();
var path =require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log('req------>',path.resolve('./views/index.ejs'));
  //return res.sendFile(path.resolve('./views/index.ejs'));
  res.render('index');
});

module.exports = router;
