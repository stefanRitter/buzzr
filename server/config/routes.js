'use strict';

var auth = require('../controllers/auth.js'),
    users = require('../controllers/users.js'),
    pages = require('../controllers/pages.js'),
    feedback = require('../controllers/feedback.js'),
    buzzrs = require('../controllers/buzzrs.js'),
    charge = require('../controllers/charge.js'),
    tweet4me = require('../controllers/tweet4me.js'),
    admin = require('../controllers/admin.js');


module.exports = function (app) {
  /*jshint maxstatements: false */

  // APP
  app.get('/',        auth.authorizeRedirect, pages('landingpage'));
  app.get('/login',   auth.authorizeRedirect, pages('login'));
  app.get('/join',    auth.authorizeRedirect, pages('join'));
  app.get('/terms',   pages('terms'));
  app.get('/search',  pages('main'));

  app.get('/tweet4me',          pages('tweet4me'));
  app.get('/tweet4me/join',     pages('tweet4meJoin'));
  app.get('/tweet4me/feed',     pages('tweet4meFeed'));
  app.get('/tweet4me/pricing',  pages('tweet4mePricing'));

  app.get('/buffer',          pages('buffer'));
  app.get('/buffer/join',     pages('bufferJoin'));
  app.get('/buffer/settings', pages('bufferSettings'));
  app.get('/buffer/pricing',  pages('bufferPricing'));

  app.get('/account/readlater', pages('main'));
  app.get('/account/settings',  pages('main'));

  app.get('/:id', pages('main'));

  
  // VIEW PARTIALS
  app.get('/partials/*', function (req, res) {
    res.render('../../app/' + req.params);
  });

  // API
  app.post('/stripe',                     charge);
  app.get( '/api/buzzrs/:id',             buzzrs.getByTopic);
  app.get( '/api/buzzrs/refresh/:id',     buzzrs.refreshByTopic);
  app.put( '/api/users',                  auth.authorize, users.updateUser);
  app.post('/api/feedback',               feedback.createFeedback);
  app.post('/tweet4me',                   feedback.tweet4me);
  app.get( '/api/tweet4me/:id',           tweet4me.getByUser);
  app.post('/api/tweet4me/:id/addTweet',  tweet4me.addTweet);
  app.post('/api/tweet4me/:id/mark',      tweet4me.markTweet);

  // AUTH
  app.post('/login',                  auth.authenticateLocal);
  app.post('/api/users',              users.createUser);
  app.get( '/auth/twitter',           auth.authenticateTwitter);
  app.get( '/auth/twitter/callback',  auth.twitterCallback);
  app.post('/logout',                 auth.logout);

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
