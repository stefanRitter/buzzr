'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    LinkArray = require('mongoose').model('LinkArray');

Buzzr.find({}, function(err, buzzrs) {
  if (err) { throw err; }

  buzzrs.forEach(function(buzzr) {
    console.log('CLEAN: ' + buzzr.topic);
    buzzr.twitPoints.sinceId = '0';
    buzzr.save();
  });
});

LinkArray.find({}).exec(function(err, linkArrays) {
  linkArrays.forEach(function(arr) {
    console.log('CLEAN ARRAY: ' + arr.name);
    arr.array.length = 0;
    arr.save();
  });
});
