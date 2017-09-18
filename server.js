// Babel ES6/JSX Compiler
require('babel-register');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var config = require('./config.js')

var mongoose = require('mongoose')
var Tweets = require('./models/basic_news')
var TopNews = require('./models/top_news')
var FollowAnalysis = require('./models/follow_analysis')
var FollowAnalysis1 = require('./models/follow_analysis1')

var SourceRatings = require('./models/source_ratings')


var _ = require('underscore');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.database)
/**
 * GET /api/characters
 * Returns 2 random characters of the same gender that have not been voted yet.
 */
app.get('/api/basic', function(req, res, next) {

// TopNews.find({}).exec(function(err,data) {
 Tweets.find({}).exec(function(err,data) {

	res.json(data); } );

});
app.get('/api/sourceRatings', function(req, res, next) {

 SourceRatings.find({}).exec(function(err,data) {

	res.json(data); } );

});

app.get('/api/followAnalysis', function(req, res, next) {

 FollowAnalysis.find({}).exec(function(err,data) {

	res.json(data); } );

});
app.get('/api/followAnalysis1', function(req, res, next) {

 FollowAnalysis1.find({}).exec(function(err,data) {

	res.json(data); } );

});



app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
