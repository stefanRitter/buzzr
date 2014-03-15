'use strict';

var SocketErrorLinks = require('mongoose').model('SocketErrorLinks'),
    TitleErrorLinks = require('mongoose').model('TitleErrorLinks'),
    Topics = require('mongoose').model('Topics');

var titleErrorLinks,
    socketErrorLinks,
    topics;


SocketErrorLinks.findOne({name: 'socketErrorLinks'}, function(err, obj) {
  if (err) { throw err; }
  socketErrorLinks = obj;
});

TitleErrorLinks.findOne({name: 'titleErrorLinks'}, function(err, obj) {
  if (err) { throw err; }
  titleErrorLinks = obj;
});

Topics.findOne({name: 'topics'}, function(err, obj) {
  if (err) { throw err; }
  topics = obj;
});


exports.socketErrorLinks = {
  push: function(data) {
    socketErrorLinks.push(data);
  }
};
exports.titleErrorLinks = {
  push: function(data) {
    titleErrorLinks.push(data);
  }
};
exports.topics = {
  push: function(data) {
    topics.push(data);
  }
};