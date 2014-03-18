'use strict';

var arr = require('../../server/utils/arrays.js'),
    getLink = require('./getLink.js'),
    linkProcessor = require('./linkProcessor.js');


setInterval(function() {
  arr.update();
}, 7000);

setInterval(function() {
  var link = arr.newLinks.pop();
  if (!link) {
    link = arr.socketErrorLinks.pop();
  }

  if (!!link) {
    getLink(link, linkProcessor);
  } else {
    console.log('waiting for links...');
  }
}, 3000);


module.exports = function(app) {
  app.listen(8090);
  console.log('listening on port 8090');
};
