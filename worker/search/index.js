'use strict';

var arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    twitter = require('./twitter.js'),
    logger = require('../common/logger.js');


function work() {
  var currentTopic = -1,
      topics = [];

  setInterval(function() {
    var topic = arr.newTopics.pop();
    if (topic) {
      Buzzr.create({topic: topic}, function(err, newBuzzr) {
        if (err) { throw err; }
        twitter.update(newBuzzr);
      });
    
    } else {
      topics = arr.topics.get();
      topic = topics[++currentTopic % topics.length];
      
      Buzzr.findOne({topic: topic}, function(err, buzzr) {
        if (err) { throw err; }
        if (!buzzr) { throw new Error('No Buzzr found: ' + topic); }
        twitter.update(buzzr);
      });
    }

    arr.update();
  }, 4000);
}


module.exports = function(app) {
  app.get('/start', function(req, res) {
    res.send(200);
    work();
  });
  app.listen(8080);
  console.log('listening on port 8080');
};
