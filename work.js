#!/usr/bin/env node
'use strict';

var express = require('express'),
    args = process.argv.slice(2),
    dotenv = require('dotenv').load();


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    app = express();

// setup datastore
require('./server/config/mongoose.js')(config);

// setup express
require('./server/config/express.js')(app, config);

// setup worker
require('./worker/')(app, config);

