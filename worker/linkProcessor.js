'use strict';

var ent = require('ent'),
    excludedDomains = {
      'pinterest.com': true,
      'instagram.com': true,
      'ask.fm': true,
      'vine.co': true,
      'facebook.com': true,
      'amazon.com': true,
      'adf.ly': true,
      'q.gs': true,
      'buzzr.io': true,
      'dailymail.co.uk': true
    };


function processLink(data, rank, buzzr) {
  var expandedUrl = data.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (!data.title || data.title === ' ') {
    return console.log('TINYURL: ', data.url);
  }
  if (excludedDomains[domain]) { return; }

  data.rank = rank;
  data.title = ent.decode(data.title);
  buzzr.pushLink(data);
}

module.exports = function(rank, buzzr) {
  return function(err, data) {
    if (err) { return console.log('URLEXPAND ERROR', err); }
    processLink(data, rank, buzzr);
  }
};
