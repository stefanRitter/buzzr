'use strict';

var arr = require('../../server/utils/arrays.js'),
    getLink = require('./getLink.js'),
    linkProcessor = require('./linkProcessor.js');

setInterval(function() {
  arr.newLinks.update(function() {
    var link = arr.newLinks.pop();
      
    if (!link) {
      link = arr.socketErrorLinks.pop();
    }

    if (!!link) {
      getLink(link, linkProcessor);
    } else {
      console.log('waiting for links...');
    }
  });
}, 2300);
