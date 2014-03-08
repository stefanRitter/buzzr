'use strict';

var mongoose = require('mongoose'),
    encrypt = require('../utils/encryption.js'),
    userSchema, User;


userSchema = mongoose.Schema({
  email: {
    type: String,
    required: '{PATH} is required!',
    unique: true
  },
  salt: {type: String, required: '{PATH} is required!'},
  password: {type: String, required: '{PATH} is required!'},
  roles: [String]
});

// remove sensitive data
userSchema.methods.safe = function() {
  return {
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

userSchema.methods.findOrCreate = function(user, cb) {

};

User = mongoose.model('User', userSchema);

// seed users
exports.createDefaultUsers = function () {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt = encrypt.createSalt();
      var pwd = encrypt.hashPwd(salt, 'test');

      User.create({ email: 'stef@stef.com', salt: salt, password: pwd, roles: ['admin']});
      User.create({ email: 'jeroen@jeroen.com', salt: salt, password: pwd, roles: []});
      User.create({ email: 'marius@marius.com', salt: salt, password: pwd});
    }
  });
};
