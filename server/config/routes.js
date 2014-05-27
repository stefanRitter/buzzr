'use strict';

var auth = require('../controllers/auth.js'),
    users = require('../controllers/users.js'),
    pages = require('../controllers/pages.js'),
    feedback = require('../controllers/feedback.js'),
    buzzrs = require('../controllers/buzzrs.js'),
    charge = require('../controllers/charge.js'),
    admin = require('../controllers/admin.js');


module.exports = function (app) {
  /*jshint maxstatements: false */

  // APP
  app.get('/',            auth.authorizeRedirect, pages('landingpage'));
  app.get('/login',       auth.authorizeRedirect, pages('login'));
  app.get('/join',        auth.authorizeRedirect, pages('join'));
  app.get('/terms',       pages('terms'));
  app.get('/search',      pages('main'));

  app.get('/buffer',      auth.authorizeRedirect, pages('landingpage'));
  app.get('/buffer/*',    auth.authorizeRedirect, pages('landingpage'));
  app.get('/tweet4me',    auth.authorizeRedirect, pages('landingpage'));
  app.get('/tweet4me/*',  auth.authorizeRedirect, pages('landingpage'));

  app.get('/unsubscribe/:id', feedback.unsubscribe);

  app.get('/account/readlater', pages('main'));
  app.get('/account/settings',  pages('main'));
  
  // VIEW PARTIALS
  app.get('/partials/*', function (req, res) {
    res.render('../../app/' + req.params);
  });

  // API
  app.post('/stripe',                     charge);
  app.get( '/api/buzzrs/:id',             buzzrs.getByTopic);
  app.put( '/api/users',                  auth.authorize, users.updateUser);
  app.post('/api/feedback',               feedback.createFeedback);

  // AUTH
  app.post('/login',                  auth.authenticateLocal);
  app.post('/api/users',              users.createUser);
  app.get( '/auth/twitter',           auth.authenticateTwitter);
  app.get( '/auth/twitter/callback',  auth.twitterCallback);
  app.post('/logout',                 auth.logout);
  app.get( '/logout',                 auth.logout);
  
  // SEARCH
  app.get('/:id', pages('main'));

  // ADMIN
  app.get('/admin/*',        auth.requiresRole('admin'), admin.get);
  app.get('/api/users',      auth.requiresRole('admin'), users.getUser);
  app.get('/api/buzzrs',     auth.requiresRole('admin'), buzzrs.getAdminList);
  app.put('/api/buzzrs/:id', auth.requiresRole('admin'), buzzrs.putAdmin);
  app.get('/api/errors',     auth.requiresRole('admin'), admin.getErrors);
  
  // 404
  app.all('/api/*', function (req, res) { res.send(404); });
  app.get('*', function (req, res) { res.status(404).redirect('/'); });
};
