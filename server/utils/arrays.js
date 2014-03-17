'use strict';

var StringArray = require('mongoose').model('StringArray');

var titleErrorLinks,
    socketErrorLinks,
    topics,
    newTopics;


StringArray.findOne({name: 'socketErrorLinks'}, function(err, obj) {
  if (err) { throw err; }
  socketErrorLinks = obj;
});

StringArray.findOne({name: 'titleErrorLinks'}, function(err, obj) {
  if (err) { throw err; }
  titleErrorLinks = obj;
});

StringArray.findOne({name: 'topics'}, function(err, obj) {
  if (err) { throw err; }
  topics = obj;
});

StringArray.findOne({name: 'newTopics'}, function(err, obj) {
  if (err) { throw err; }
  newTopics = obj;
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

exports.newTopics = {
  push: function(data) {
    newTopics.push(data);
  },
  uniq: function() {
    return newTopics.uniq();
  }
};

exports.topics = {
  push: function(data) {
    topics.push(data);
  },
  get: function() {
    return topics.array;
  }
};