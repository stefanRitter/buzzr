'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    BufferAppStrategy = require('passport-bufferapp').Strategy,
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    users = require('../controllers/users.js'),
    buffers = require('../controllers/buffers.js'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    bufferConfig = require('./config.js')[env].buffer;


module.exports = function () {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      User.findOne({email: username}).exec(function (err, user) {
        if (user && user.authenticated(password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  ));

  passport.use(new TwitterStrategy({
      consumerKey: process.env.TWIT_KEY,
      consumerSecret: process.env.TWIT_SECRET,
      callbackURL: '/auth/twitter/callback'
    },
    function(token, tokenSecret, profile, done) {
      var user = {
        token: token,
        secret: tokenSecret,
        profile: profile
      };
      users.findOrCreate(user, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
      });
    }
  ));

  passport.use(new BufferAppStrategy({
      clientID: bufferConfig.id,
      clientSecret: bufferConfig.secret,
      callbackURL: bufferConfig.callback
    },
    function(token, refreshToken, profile, done) {
      var user = {
        token: token,
        secret: refreshToken,
        profile: profile
      };

      buffers.findOrCreate(user, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
      });
    }
  ));

  passport.serializeUser(function (user, done) {
    if (user) { done(null, user.id); }
  });

  passport.deserializeUser(function (id, done) {
    User.findOne({_id: id}).exec(function (err, user) {
      if (user) {
        user.recordLogin();
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
};
