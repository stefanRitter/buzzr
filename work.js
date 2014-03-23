#!/usr/bin/env node

'use strict';

var express = require('express');

require('dotenv').load();


var args = process.argv.slice(2),
    env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    app = express();

// setup datastore
require('./server/config/mongoose.js')(config);

// setup express
require('./server/config/express.js')(app, config);

if (args[0] === 'uniq') {
  // uniqify
  require('./worker/uniqify/');

} else {
  // start searcher
  require('./worker/search/')(app);

  // start crawler
  require('./worker/process/index.js');
}
