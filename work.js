#!/usr/bin/env node
'use strict';

var env = require('node-env-file');
env('.env');

var args = process.argv.slice(2),
    env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    express = require('express'),
    app = express();

require('./server/config/mongoose.js')(config);
require('./server/config/express.js')(app, config);


setTimeout(function() {
  switch(args[0])
  {
    case 'clean':
      require('./worker/clean/');
      break;

    case 'five':
      require('./worker/getfive').updateOne(args[1], function() {
        console.log('WORKER: buzzr updated');
      });
      break;

    case 'updateall':
      console.log('update all started');
      require('./worker/cronjobs/updateAll');
      break;
  }
}, 3000);
