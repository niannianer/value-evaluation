var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var ejs = require('ejs');


var routes = require('./routes/index');

var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));


// session store
var store = new RedisStore({
  host: '127.0.0.1',
  port: 6379,
  db: 0
}, (err, response) => {
  console.log(err, response)
})

// session a year;
app.use(session({
  secret: 'abcdefg',
  name: 'mfSystem',
  store,
  cookie: {maxAge: 12 * 30 * 24 * 60 * 60 * 1000},
  resave: true,
  saveUninitialized: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// init routes;
routes.init(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {msg: JSON.stringify(err)});
});

module.exports = app;
