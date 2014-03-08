'use strict';

var mongoose = require('mongoose'),
    encrypt = require('../utils/encryption.js'),
    userSchema, User;


userSchema = mongoose.Schema({
  email: {
    type: String,
    required: '{PATH} is required!',
    unique: true,
    index: true
  },
  name: {type: String, required: false},
  salt: {type: String, required: '{PATH} is required!'},
  password: {type: String, required: '{PATH} is required!'},
  roles: [String],
  provider: {
    token: {type: String, required: false},
    secret: {type: String, required: false},
    name: {type: String, required: false}
  }
});

// remove sensitive data
userSchema.methods.safe = function() {
  return {
    name: this.name || this.email,
    email: this.email,
    roles: this.roles
  };
};

userSchema.methods.hasRole = function(role) {
  return this.roles.indexOf(role) > -1;
};

userSchema.methods.authenticated = function(passwordToMatch) {
  return encrypt.hashPwd(this.salt, passwordToMatch) === this.password;
};

// called from Twitter login
userSchema.methods.findOrCreate = function(user, done) {
  var email = user.profile.emails[0].value,
      newUser = {};
  
  User.findOne({email: email}).exec(function (err, user) {
    if (err) { return done(err, null); }
    if (user) { return done(null, user); }

    newUser.provider = {
      token: user.token,
      secret: user.secret,
      name: user.profile.provider
    };
    newUser.name = user.profile.displayName;
    newUser.email = email;
    newUser.salt = 'twitter';
    newUser.password = 'twitter';
    
    User.create(newUser,function (err, user) {
      if (err) { return done(err, null); }
      done(null, user);
    });
  });
};

User = mongoose.model('User', userSchema);

// seed users
exports.createDefaultUsers = function () {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt = encrypt.createSalt();
      var pwd = encrypt.hashPwd(salt, 'test');

      User.create({ email: 'stef@stef.com', name: 'stefan', salt: salt, password: pwd, roles: ['admin']});
      User.create({ email: 'jeroen@jeroen.com', salt: salt, password: pwd, roles: []});
    }
  });
};
