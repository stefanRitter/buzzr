var express = require('express'),
    passport = require('passport');


module.exports = function (app, config) {

  function compile (str, path) {
    return stylus(str).set('filename', path);
  }

  app.configure(function() {
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(express.logger('dev'));

    app.use(express.compress());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({secret: process.env.SESSION_SECRET || 'dev secret'}));
    
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(config.rootPath + '/public'));
  });
};
