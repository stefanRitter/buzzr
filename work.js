#!/usr/bin/env node

'use strict';

var express = require('express');

require('dotenv').load();


var env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    app = express();

// setup datastore
require('./server/config/mongoose.js')(config);

// setup express
require('./server/config/express.js')(app, config);

// start searcher
require('./worker/search/')(app);

// start crawler
var child = require('child_process').fork('./worker/process/index.js');

// kill child
process.on('SIGINT', function() {
  child.kill('SIGINT');
  process.exit();
});
