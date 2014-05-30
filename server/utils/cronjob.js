'use strict';

var sendMail = require('./sendMail.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    fork = require('child_process').fork;

var running = false;

function run() {
  running = true;

  Buzzr.find({}).exec(function(err, collection) {
    if (err) {
      sendMail.send('agenda error: ' + err.toString());
      throw err;
    }

    var l = collection.length;
    collection.forEach(function(buzzr, i) {
      setTimeout(function() {
        fork('server/utils/buzzrMaker.js').send({topic: buzzr.topic});
        
        if (i >= l-1) {
          sendMail.send('agenda finished!');
          running = false;
        }
      }, 60000*i);
    });
  });
}

setInterval(function() {
  var h = (new Date()).getHours();
  if (h >= 4 && h <= 5 && !running) {
    sendMail.send('agenda started');
    run();
  }
}, 60000*40);
