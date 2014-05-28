'use strict';

var Agenda = require('agenda'),
    env = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env],
    sendMail = require('./sendMail.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    fork = require('child_process').fork,
    agenda = new Agenda({db: {address: config.datastoreURI}, processEvery: '2 hours'});


agenda.define('update all buzzrs', function(job, done) {
  sendMail.send('agenda started');

  Buzzr.find({}).exec(function(err, collection) {
    if (err) {
      sendMail.send('agenda error: ' + err.toString());
      throw err;
    }

    var l = collection.length;
    collection.forEach(function(buzzr, i) {
      setTimeout(function() {
        fork('server/utils/buzzrMaker.js').send({topic: buzzr.topic});
        if (i >= l) {
          sendMail.send('agenda finished!');
          done();
        }
      }, 60000);
    });
  });
});

agenda.every('24 hours', 'update all buzzrs');
agenda.start();
