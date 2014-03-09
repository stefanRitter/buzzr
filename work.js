#!/usr/bin/env node

'use strict';

var args = process.argv.slice(2),
    dotenv = require('dotenv');

dotenv.load();

console.log(args);
console.log(process.env.MONGOLAB_URI);

process.on('SIGINT', function () {
  console.log('Got a SIGINT. Shutting down...');
  process.exit(0);
});

process.exit(0);
