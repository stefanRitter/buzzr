'use strict';

var arr = require('../utils/arrays.js');

exports.get = function(req, res) {
  res.render('main', {
    bootstrappedUser: req.user,
    bootstrappedTopics: arr.topics.get(),
    admin: true
  });
};
