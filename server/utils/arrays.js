'use strict';

var SocketErrorLinks = require('mongoose').model('SocketErrorLinks'),
    TitleErrorLinks = require('mongoose').model('TitleErrorLinks');

var titleErrorLinks,
    socketErrorLinks;


SocketErrorLinks.findOne({name: 'socketErrorLinks'}, function(err, obj) {
  if (err) { throw err; }
  socketErrorLinks = obj;
});

TitleErrorLinks.findOne({name: 'titleErrorLinks'}, function(err, obj) {
  if (err) { throw err; }
  titleErrorLinks = obj;
});


exports.socketErrorLinks = { push: function(data) {
  socketErrorLinks.push(data);
}};
exports.titleErrorLinks = { push: function(data) {
  titleErrorLinks.push(data);
}};
