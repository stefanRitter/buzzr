'use strict';

var sendMail = require('../../server/utils/sendMail.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    fork = require('child_process').fork;


Buzzr.find({}).exec(function(err, collection) {
  if (err) {
    sendMail.send('agenda error: ' + err.toString());
    throw err;
  }

  collection.forEach(function(buzzr, i) {
    setTimeout(function() {
      fork('server/utils/buzzrMaker.js').send({topic: buzzr.topic});
    }, 60000*i);
  });
});
