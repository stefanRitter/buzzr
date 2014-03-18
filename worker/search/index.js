'use strict';

var arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    twitter = require('./twitter.js');

var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

var currentTopic = -1;


function nextEvent() {
  var topics = arr.topics.get(),
      topic = arr.newTopics.pop();
  
  if (topic) {
    Buzzr.create({topic: topic}, function(err, newBuzzr) {
      if (err) { throw err; }
      
      ee.emit('update', newBuzzr);
    });
  
  } else {
    topic = topics[++currentTopic % topics.length];
    
    Buzzr.findOne({topic: topic}, function(err, buzzr) {
      if (err) { throw err; }
      if (!buzzr) { throw new Error('No Buzzr found: ' + topic); }
      
      ee.emit('update', buzzr);
    });
  }
}

function reset() {
  setTimeout(function() {
    ee.emit('next');
  }, 18000);
}

function continueEvent() {
  if (true) {
    ee.emit('reset');
  } else {
    ee.emit('next');
  }
}

function update(currentBuzzr) {
  twitter.update(currentBuzzr, ee);
}

ee.on('continue', continueEvent);
ee.on('next',     nextEvent);
ee.on('update',   update);
ee.on('reset',    reset);


module.exports = function(app) {
  app.listen(8080);
  console.log('listening on port 8080');
  
  setTimeout(function() {
    ee.emit('reset');
  }, 3000);
};
