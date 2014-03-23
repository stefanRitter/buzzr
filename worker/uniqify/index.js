'use strict';

var Buzzr = require('mongoose').model('Buzzr');

Buzzr.find({}, function(err, buzzrs) {
  if (err) { throw err; }

  buzzrs.forEach(function(buzzr) {
    console.log('UNIQ: ' + buzzr.topic);
    buzzr.makeUniq();
  });
});
