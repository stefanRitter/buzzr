var passport = require('passport');


exports.authenticateLocal = function (req, res, next) {
  req.body.username = req.body.email.toLowerCase();

  var auth = passport.authenticate('local', function (err, user) {
    if (err) return next(err);
    if (!user) res.send({success: false});

    req.logIn(user, function (err) {
      if (err) return next(err);
      res.send({success: true, user: user.safe()});
    });
  });
  auth(req, res, next);
};

exports.requiresRole = function (role) {
  return function (req, res, next) {
    if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) return next();
    res.status(403);
    res.end();
  }; 
};

exports.authenticateTwitter = passport.authenticate('twitter');

exports.twitterCallback = passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
});

exports.logout = function(req, res) {
  req.logout();
  res.end();
};
