'use strict';

var auth = require('./auth.js'),
    users = require('../controllers/users.js'),
    pages = require('../controllers/pages.js'),
    feedback = require('../controllers/feedback.js'),
    buzzrs = require('../controllers/buzzrs.js'),
    passport = require('passport');


module.exports = function (app) {
  // APP
  app.get('/',        pages.getRoot);
  app.get('/home',    pages.getRoot);
  app.get('/login',   pages.getLogin);
  app.get('/join',    pages.getJoin);
  app.get('/about',   pages.getAbout);
  app.get('/terms',   pages.getTerms);
  app.get('/later',   pages.getReadLater);
  app.get('/:id',     pages.getRoot);

  // VIEW PARTIALS
  app.get('/partials/*', function (req, res) {
    res.render('../../app/' + req.params);
  });

  // API
  app.get( '/api/buzzrs/:id', buzzrs.getByTopic);
  app.get( '/api/users',      auth.requiresRole('admin'), users.getUser);
  app.post('/api/users',      users.createUser);
  app.put( '/api/users',      users.updateUser);
  app.post('/api/feedback',   feedback.createFeedback);

  // AUTH
  app.post('/login',                  auth.authenticateLocal);
  app.get( '/auth/twitter',           auth.authenticateTwitter);
  app.get( '/auth/twitter/callback',  auth.twitterCallback);
  app.post('/logout',                 auth.logout);
  
  // 404
  app.all('/api/*', function (req, res) { res.send(404); });
  app.get('*', function (req, res) { res.status(404).redirect('/'); });
};
