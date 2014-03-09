'use strict';

var excludedDomains = {
      'pinterest.com': true,
      'instagram.com': true,
      'ask.fm': true,
      'vine.co': true,
      'facebook.com': true,
      'amazon.com': true
    };


function processLink(data, rank, buzzr) {
  var expandedUrl = data.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (excludedDomains[domain]) { return; }

  data.rank = rank;
  buzzr.pushLink(data);
}

module.exports = function(rank, buzzr) {
  return function(err, data) {
    if (err) { return console.log('URLEXPAND ERROR', err); }
    processLink(data, rank, buzzr);
  }
};
