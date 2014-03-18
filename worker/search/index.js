'use strict';

var arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    twitter = require('./twitter.js');

var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

var currentTopic = -1,
    currentBuzzr = {},
    requestCount = 0,
    startTime = Date.now(),
    elapsedTime = 960000;


function nextEvent() {
  var topics = arr.topics.get(),
      topic = topics[++currentTopic % topics.length],
      wait = elapsedTime - 960000;
  
  setTimeout(function() {
    Buzzr.findOne({topic: topic}, function(err, buzzr) {
      if (err) { throw err; }
      if (!buzzr) { throw new Error('No Buzzr found: ' + topic); }
      
      currentBuzzr = buzzr;
      startTime = Date.now();
      ee.emit('update');
    });
  }, (wait < 0 ? 0 : wait));
}

function continueEvent() {
  var topic = arr.newTopics.pop();
  
  if (topic) {
    // stop current update cycle and create new buzzr
    Buzzr.create({topic: topic}, function(err, newBuzzr) {
      if (err) { throw err; }
      ee.emit('create', newBuzzr);
    });
  
  } else {
    requestCount += 1;
    elapsedTime = startTime - Date.now();
    
    if (requestCount > 400 || elapsedTime > 900000) {
      ee.emit('next');
    } else {
      ee.emit('update');
    }
  }

  arr.update();
}

function createEvent(newBuzzr) {
  // createNewTopicWhenDoneContinue
  twitter.create(newBuzzr, ee);
  // reset startTime and continue
}

function updateEvent() {
  twitter.update(currentBuzzr, ee);
}

ee.on('continue', continueEvent);
ee.on('next',     nextEvent);
ee.on('update',   updateEvent);
ee.on('create',   createEvent);


module.exports = function(app) {
  app.get('/start', function(req, res) {
    res.send(200);
    ee.emit('next');
  });
  app.listen(8080);
  console.log('listening on port 8080');
};
