'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.getBuffer = function (req, res) {
  res.send(500);
};

exports.updateBuffer = function (req, res) {
  res.send(500);
};

// called from Buffer login
exports.findOrCreate = function(userData, done) {
  var newUser = {};
  
  User.findOne({email: userData.email}).exec(function (err, foundUser) {
    if (err) { return done(err, null); }
    if (foundUser) { return done(null, foundUser); }

    newUser.buffer = {
      token: userData.token,
      id: userData.id,
      timezone: userData.timezone,
      bufferPlan: userData.bufferPlan
    };
    
    newUser.name = userData.name;
    newUser.email = userData.email;

    newUser.salt = 'buffer';
    newUser.password = 'buffer';

    User.create(newUser, function (err, createdUser) {
      if (err) { return done(err, null); }
      done(null, createdUser);
    });
  });
};