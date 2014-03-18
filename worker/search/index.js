'use strict';

var arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    twitter = require('./twitter.js');

var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

var currentTopic = -1,
    requestCount = 0,
    startTime = Date.now(),
    elapsedTime = 960000;


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
  var wait = elapsedTime - 960000;
  
  setTimeout(function() {
    startTime = Date.now();
    ee.emit('next');
  }, (wait < 0 ? 0 : wait));
}

function continueEvent() {
  requestCount += 1;
  elapsedTime = startTime - Date.now();

  if (requestCount > 400 || elapsedTime > 900000) {
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
  app.get('/start', function(req, res) {
    res.send(200);
    ee.emit('reset');
  });
  app.listen(8080);
  console.log('listening on port 8080');
};
