'use strict';

var env = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env];

// connect to datastore
require('../config/mongoose.js')(config);

var getFive = require('../../worker/getfive/');


process.on('message', function(m) {
  if (!!m.topic) {
    console.log('MAKE BUZZR: ' + m.topic);

    getFive.updateOne(m.topic, function() {
      console.log('SAVED: ' + m.topic);
      process.exit(0);
    });
  }
});
