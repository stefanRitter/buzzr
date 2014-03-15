'use strict';

var arr = require('../utils/arrays.js');

module.exports = function(view) {
  return function(req, res) {
    res.render(view, {
      bootstrappedUser: req.user,
      bootstrappedTopics: arr.topics.get()
    });
  };
};
