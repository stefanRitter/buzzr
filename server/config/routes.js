'use strict';

var auth = require('./auth.js'),
    users = require('../controllers/users.js'),
    courses = require('../controllers/courses.js'),
    twitter = require('../controllers/twitter.js');


module.exports = function (app) {
  // ROOT
  app.get('/', twitter.getRoot);
  app.post('/search', twitter.search);

  /*app.get('/', function (req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });*/


  // API
  app.get('/api/users', auth.requiresRole('admin'), users.getUser);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);

  app.all('/api/*', function (req, res) {
    res.send(404);
  });


  // APP
  var getApp = function (req, res) {
    res.render('app', {
      bootstrappedUser: req.user
    });
  };
  app.get('/app', getApp);
  app.get('/app/*', getApp);
  
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
    res.status(404).render('404');
  });
};
