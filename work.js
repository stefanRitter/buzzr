#!/usr/bin/env node

'use strict';

require('dotenv').load();

var args = process.argv.slice(2),
    env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    express = require('express'),
    app = express();

// setup datastore
require('./server/config/mongoose.js')(config);

// setup express
require('./server/config/express.js')(app, config);

setTimeout(function() {
  switch(args[0])
  {
    case 'uniq':
      // uniqify
      require('./worker/uniqify/');
      break;
    
    case 'clean':
      // clean
      require('./worker/clean/');
      break;
    
    default:
      // start searcher
      require('./worker/search/')(app);
      // start crawler
      require('./worker/process/index.js');
  }
}, 3000);
