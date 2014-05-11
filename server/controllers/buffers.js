'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.getBuffer = function (req, res) {
  User.find().exec(function (err, collection) {
    res.send(collection);
  });
};

exports.updateBuffer = function (req, res) {
  res.send(500);
};


// called from Buffer login
exports.findOrCreate = function(userData, done) {
  var profile = userData.profile._json,
      email = profile.screen_name,
      newUser = {};
  
  User.findOne({email: email}).exec(function (err, foundUser) {
    if (err) { return done(err, null); }
    if (foundUser) { return done(null, foundUser); }

    newUser.provider = {
      token: userData.token,
      secret: userData.secret,
      name: userData.profile.provider,
      providerId: profile.id_str
    };
    newUser.name = profile.name;
    newUser.location = profile.location;
    newUser.lang = profile.lang;
    newUser.url = profile.url;

    newUser.email = email;
    newUser.salt = 'twitter';
    newUser.password = 'twitter';

    User.create(newUser, function (err, createdUser) {
      if (err) { return done(err, null); }
      done(null, createdUser);
    });
  });
};