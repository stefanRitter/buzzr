'use strict';

var arr = require('../utils/arrays.js'),
    Tweet4me = require('mongoose').model('Tweet4me'),
    _ = require('lodash');

exports.get = function(req, res) {
  Tweet4me.find({}).exec(function(err, collection) {
    res.render('main', {
      bootstrappedUser: req.user,
      bootstrappedTopics: arr.topics.get(),
      bootstrappedTweet4Mes: collection || [],
      admin: true
    });
  });
};

exports.getErrors = function(req, res) {
  var titles = _.chain(arr.titleErrorLinks.get()).pluck('url').uniq(),
      sockets = _.chain(arr.socketErrorLinks.get()).pluck('url').uniq();

  res.json({
    titleErrors: titles.value(),
    socketErrors: sockets.value()
  });
};
