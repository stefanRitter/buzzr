'use strict';

var ent = require('ent'),
    arr = require('../../server/utils/arrays.js');

var excludedDomains = {
  'pinterest.com': true,
  'instagram.com': true,
  'ask.fm': true,
  'vine.co': true,
  //'facebook.com': true,
  'amazon.com': true,
  'adf.ly': true,
  'q.gs': true,
  'buzzr.io': true,
  'dailymail.co.uk': true,
  'stackoverflow.com': true,
  'newsnow.co.uk': true
};


function processLink(data, rank, buzzr) {
  var expandedUrl = data.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (excludedDomains[domain]) { return; }
  if (!data.title || data.title === ' ') {
    return arr.titleErrorLinks.push(data.url);
  }

  data.url = data.url.replace(/[?&]utm_[^&]+/g, '').replace(/^&/, '?');
  data.rank = rank;
  data.title = ent.decode(data.title);
  buzzr.pushLink(data);
}

module.exports = function (rank, buzzr, done) {
  return function(err, data) {
    done(); // start next request

    if (err) {
      arr.socketErrorLinks.push(data.url);
      data.err = err;
    }
    processLink(data, rank, buzzr);
  };
};
