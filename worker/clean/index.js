'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    arr = require('../../server/utils/arrays.js');

Buzzr.find({}, function(err, buzzrs) {
  if (err) { throw err; }
  arr.topics.erase();
  var a = [];

  buzzrs.forEach(function(buzzr) {
    console.log('CLEAN: ' + buzzr.topic);
    a.push(buzzr.topic);
    buzzr.makeUniq();
  });

  arr.topics.set(a);
});
