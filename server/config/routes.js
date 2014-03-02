'use strict';

var auth = require('./auth.js'),
    users = require('../controllers/users.js'),
    buzzr = require('../controllers/buzzr.js');


module.exports = function (app) {
  // ROOT
  app.get('/', buzzr.getRoot);
  app.post('/search', buzzr.search);
  app.get('/:id', buzzr.getRoot);


  // API
  app.get('/api/users', auth.requiresRole('admin'), users.getUser);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);
  app.all('/api/*', function (req, res) {
    res.send(404);
  });


  // VIEW PARTIALS
  app.get('/partials/*', function (req, res) {
    res.render('../../app/' + req.params);
  });


  // AUTH
  app.post('/login', auth.authenticate);
  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });
  

  // 404
  app.get('*', function (req, res) {
    res.status(404);
    buzzr.getRoot(req, res);
  });
};
