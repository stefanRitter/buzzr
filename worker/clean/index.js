'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    arr = require('../../server/utils/arrays.js');

Buzzr.find({}, function(err, buzzrs) {
  if (err) { throw err; }

  buzzrs.forEach(function(buzzr) {
    console.log('CLEAN: ' + buzzr.topic);
    arr.topics.push(buzzr.topic);
    buzzr.makeUniq();
  });
});
