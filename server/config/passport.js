var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    mongoose = require('mongoose'),
    User = mongoose.model('User');


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
      callbackURL: "/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, done) {
      var user = {
        token: token,
        tokenSecret: tokenSecret,
        profile: profile
      }
      User.findOrCreate(user, function(err, user) {
        if (err) { return done(null, false); }
        done(null, user);
      });
    }
  ));

  passport.serializeUser(function (user, done) {
    if (user) done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findOne({_id: id}).exec(function (err, user) {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
}
