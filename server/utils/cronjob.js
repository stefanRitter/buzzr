'use strict';

var sendMail = require('./sendMail.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    fork = require('child_process').fork,
    lastRun = 0;


function run() {
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
}

setInterval(function() {
  var d = new Date(),
      h = d.getHours(),
      t = d.getUTCDate();
  
  if (h >= 9 && h <= 10 && t !== lastRun) {
    sendMail.send('agenda started');
    lastRun = t;
    run();
  }
}, 60000*40);
