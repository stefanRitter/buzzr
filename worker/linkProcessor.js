'use strict';

var ent = require('ent'),
    Arrays = require('mongoose').model('Arrays'),
    arrayDump,
    excludedDomains = {
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
      'stackoverflow.com': true
    };

Arrays.findOne({}, function(err, obj) {
  if (err) { throw new Error(err); }
  arrayDump = obj;
});


function processLink(data, rank, buzzr) {
  var expandedUrl = data.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (excludedDomains[domain]) { return; }
  if (!data.title || data.title === ' ') {
    arrayDump.titleErrorLinks.push(data.url);
    return arrayDump.save();
  }

  data.rank = rank;
  data.title = ent.decode(data.title);
  buzzr.pushLink(data);
}

module.exports = function(rank, buzzr, done) {
  return function(err, data) {
    done(); // start next request

    if (err) {
      console.log('URLEXPAND ERROR', data);
      arrayDump.socketErrorLinks.push(data.url);
      return arrayDump.save();
    }
    processLink(data, rank, buzzr);
  };
};
