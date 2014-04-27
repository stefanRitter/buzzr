'use strict';

var ent = require('ent'),
    arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    logger = require('../common/logger.js');

var excludedDomains = {
  'pinterest.com': true,
  'instagram.com': true,
  'ask.fm': true,
  'vine.co': true,
  'amazon.com': true,
  'amazon.fr': true,
  'amazon.de': true,
  'amazon.co.uk': true,
  'adf.ly': true,
  'q.gs': true,
  'buzzr.io': true,
  'dailymail.co.uk': true,
  'stackoverflow.com': true,
  'newsnow.co.uk': true,
  'findmydreamjob.co.uk': true,
  'twitlonger.com': true,
  'facebook.com': true,
  'donotlink.com': true
};


function processLink(link, buzzr, done) {
  var expandedUrl = link.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (excludedDomains[domain]) { return; }
  if (!link.title || link.title === '') {
    delete link.title;
    arr.titleErrorLinks.push(link);
    if (done) { return done(); }
    return;
  }

  var searchHead = link.headText.search(buzzr.topic),
      searchBody = link.bodyText.search(buzzr.topic);

  if (searchHead === -1 && searchBody === -1) {
    if (done) { return done(); }
    return;
  }

  logger.log('PROCESS: adding ' + expandedUrl);

  link.url = link.url.replace(/[?&]utm_[^&]+/g, '').replace(/^&/, '?');
  link.title = ent.decode(link.title);
  buzzr.pushLink(link, done);
}

module.exports = function (err, link, done) {
  if (err) {
    logger.error('PROCESS: error ' + link.url);
    arr.socketErrorLinks.push(link);
    if (done) { return done(); }
    return;
  }
  
  Buzzr.findOne({topic: link.topic}, function(err, buzzr) {
    if (err) {
      if (done) { return done(err); }
      throw err;
    }
    processLink(link, buzzr, done);
  });
};
