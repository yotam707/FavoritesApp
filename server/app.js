var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api.routes');
var bluebird = require('bluebird');

var app = express();

//mongoose setup

//const uri = "mongodb://yotamb:Popay321587@mongocluster-shard-00-00-waabv.mongodb.net:27017,mongocluster-shard-00-01-waabv.mongodb.net:27017,mongocluster-shard-00-02-waabv.mongodb.net:27017/test?ssl=true&replicaSet=MongoCluster-shard-0&authSource=admin";
const uri = "mongodb://127.0.0.1:27017/favoritesapp";
mongoose.Promise = bluebird;
mongoose.connect(uri, {
    useMongoClient: true,
}).then(()=> { console.log(`Successfully Connected to the Mongodb Database `)})
.catch((err)=> { console.log(`Error Connecting to the Mongodb Database`, err)});


//CORS support
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//api routes
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
