'use strict';

var express       = require('express'),
    compress      = require('compression'),
    session       = require('express-session'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    csrf          = require('csurf'),
    logger        = require('morgan'),
    passport      = require('passport'),
    mongoose      = require('mongoose'),
    SessionStore  = require('connect-mongo')(session);


module.exports = function(app, config) {

  app.set('views', config.rootPath + '/server/views');
  app.set('view engine', 'jade');

  app.use(logger('dev'));

  // force SSL
  /*var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  if (env === 'production') {
    app.use(function(req, res, next) {
      if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect('https://' + req.get('Host') + req.url);
      }
      else { next(); }
    });
  }*/

  app.use(compress());
  app.use(cookieParser(process.env.COOKIE_SECRET || 'cookie secret'));
  app.use(bodyParser()); // json + urlencoded
  
  app.use(session({
    secret: process.env.SESSION_SECRET || 'session secret',
    store: new SessionStore({ mongoose_connection: mongoose.connection})
  }));
  
  // setup csrf for angular
  app.use(csrf({value: function(req) {
    return req.headers['x-xsrf-token'];
  }}));
  app.use(function(req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(config.rootPath + '/public'));
};
