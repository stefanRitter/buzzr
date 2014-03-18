'use strict';

require('dotenv').load();

var env = process.env.NODE_ENV,
    config = require('../../server/config/config')[env];

// setup datastore
require('../../server/config/mongoose.js')(config);


var arr = require('../../server/utils/arrays.js'),
    getLink = require('./getLink.js'),
    linkProcessor = require('./linkProcessor.js');

setInterval(function() {
  var link = arr.newLinks.pop();
  if (!link) {
    link = arr.socketErrorLinks.pop();
  }

  if (!!link) {
    getLink(link, linkProcessor);
  } else {
    arr.update();
    console.log('waiting for links...');
  }
}, 2000);
