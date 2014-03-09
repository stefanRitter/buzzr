'use strict';

var mongoose = require('mongoose'),
    encrypt = require('../utils/encryption.js'),
    userSchema, User;


userSchema = mongoose.Schema({
  email: {
    type: String,
    required: '{PATH} is required!',
    trim: true,
    lowercase: true,
    unique: true,
    index: true
  },
  
  name:     {type: String, trim: true, required: false},
  location: {type: String, trim: true, required: false},
  lang:     {type: String, trim: true, required: false},
  url:      {type: String, trim: true, required: false},
  
  salt:     {type: String, required: '{PATH} is required!'},
  password: {type: String, required: '{PATH} is required!'},
  roles:    [String],
  
  provider: {
    token:  {type: String, required: false},
    secret: {type: String, required: false},
    name:   {type: String, required: false},
    provId: {type: String, required: false}
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
