'use strict';

var auth = require('./auth.js'),
    users = require('../controllers/users.js'),
    admin = require('../controllers/admin.js'),
    pages = require('../controllers/pages.js'),
    buzzr = require('../controllers/buzzr.js');


module.exports = function (app) {
  // APP
  app.get('/',        pages.getRoot);
  app.get('/login',   pages.getLogin);
  app.get('/join',    pages.getJoin);
  app.get('/about',   pages.getAbout);
  app.get('/terms',   pages.getTerms);
  app.get('/later',   pages.getReadLater);
  app.get('/admin',   admin.get);
  app.get('/admin/*', admin.get);
  app.get('/:id',     pages.getRoot);

  // VIEW PARTIALS
  app.get('/partials/*', function (req, res) {
    res.render('../../app/' + req.params);
  });

  // API
  app.post('/search', buzzr.search);
  app.get( '/api/users', auth.requiresRole('admin'), users.getUser);
  app.post('/api/users', users.createUser);
  app.put( '/api/users', users.updateUser);
  app.all( '/api/*', function (req, res) { res.send(404); });

  // AUTH
  app.post('/login', auth.authenticate);
  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });
  
  // 404
  app.get('*', function (req, res) {
    res.status(404);
    pages.getRoot(req, res);
  });
};
