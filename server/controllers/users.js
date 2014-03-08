var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    encrypt = require('../utils/encryption.js');


exports.getUser = function (req, res) {
  User.find().exec(function (err, collection) {
    res.send(collection);
  });
};


exports.createUser = function (req, res, next) {
  var userBody = req.body;
  
  userBody.email = userBody.email.toLowerCase();
  userBody.salt = encrypt.createSalt();
  userBody.password = encrypt.hashPwd(userBody.salt, userBody.password);

  User.create(userBody, function (err, user) {
    if (err) {
      if (err.toString().indexOf('E11000') > -1) {
        err = new Error("User already exists. Please get in touch if you need help logging in!");
      }
      
      res.status(400);
      return res.send({reason: err.toString()});
    }

    req.logIn(user, function (err) {
      if (err) { return next(err); }
      res.send();
    });
  });
};


exports.updateUser = function (req, res) {
  var userUpdates = req.body;

  if (req.user._id !== userUpdates._id && !req.user.hasRole('admin')) {
    res.status(403);
    return res.end();
  }

  req.user.email = userUpdates.email;
  if (userUpdates.password && userUpdates.password.length > 0) {
    req.user.salt = encrypt.createSalt();
    req.user.password = encrypt.hashPwd(req.user.salt, userUpdates.password);
  }

  req.user.save(function (err) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }

    res.send(req.user.safe());
  });
};


// called from Twitter login
exports.findOrCreate = function(user, done) {
  var email = user.profile.screen_name,
      newUser = {};
  
  User.findOne({email: email}).exec(function (err, user) {
    if (err) { return done(err, null); }
    if (user) { return done(null, user); }

    newUser.provider = {
      token: user.token,
      secret: user.secret,
      name: user.profile.provider,
      providerId: user.profile.id_str
    };
    newUser.name = user.profile.name;
    newUser.location = user.profile.location;
    newUser.lang = user.profile.lang;
    newUser.url = user.profile.url;

    newUser.email = email;
    newUser.salt = 'twitter';
    newUser.password = 'twitter';
    
    User.create(newUser,function (err, user) {
      if (err) { return done(err, null); }
      done(null, user);
    });
  });
};