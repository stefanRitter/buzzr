'use strict';

var StringArray = require('mongoose').model('StringArray'),
    LinkArray = require('mongoose').model('LinkArray');

var titleErrorLinks,
    socketErrorLinks,
    newLinks,
    topics;

function getAll() {
  LinkArray.findOne({name: 'socketErrorLinks'}, function(err, obj) {
    if (err) { throw err; }
    socketErrorLinks = obj;
  });
  LinkArray.findOne({name: 'titleErrorLinks'}, function(err, obj) {
    if (err) { throw err; }
    titleErrorLinks = obj;
  });
  LinkArray.findOne({name: 'newLinks'}, function(err, obj) {
    if (err) { throw err; }
    newLinks = obj;
  });
  StringArray.findOne({name: 'topics'}, function(err, obj) {
    if (err) { throw err; }
    topics = obj;
  });
}
getAll();


exports.socketErrorLinks = {
  push: function(data) {
    socketErrorLinks.pushUniq(data);
  },
  pop: function() {
    return socketErrorLinks.pop();
  }
};

exports.newLinks = {
  push: function(data) {
    newLinks.push(data);
  },
  pop: function() {
    return newLinks.pop();
  },
  update: function(cb) {
    LinkArray.findOne({name: 'newLinks'}, function(err, obj) {
      if (err) { throw err; }
      newLinks = obj;
      if (cb) {cb();}
    });
  }
};

exports.titleErrorLinks = {
  push: function(data) {
    titleErrorLinks.pushUniq(data);
  }
};

exports.topics = {
  push: function(data) {
    topics.pushUniq(data);
  },
  get: function() {
    return topics.array;
  },
  set: function(a) {
    topics.array = a;
    topics.save();
  },
  update: function(cb) {
    StringArray.findOne({name: 'topics'}, function(err, obj) {
      if (err) { throw err; }
      topics = obj;
      if (cb) {cb();}
    });
  },
  erase: function() {
    topics.array = [];
    topics.save();
  }
};
