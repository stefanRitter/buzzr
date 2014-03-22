'use strict';

var arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    twitter = require('./twitter.js');

var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

var currentTopic = -1;


function updateBuzzr(err, buzzr) {
  if (err) { throw err; }
  if (!buzzr) { return ee.emit('continue'); }
  twitter.update(buzzr, ee);
}


function nextBuzzr() {
  var topics = arr.topics.get(),
      topic = topics[++currentTopic % topics.length];

  Buzzr.findOne({topic: topic}, updateBuzzr);
}


function continueEvent() {
  setTimeout(function() {
    arr.topics.update(function() {
      ee.emit('next');
    });
  }, 30000);
}


ee.on('continue', continueEvent);
ee.on('next',     nextBuzzr);


module.exports = function(app) {
  app.listen(8080);
  console.log('listening on port 8080');
  
  setTimeout(function() {
    ee.emit('continue');
  }, 3000);
};
