'use strict';

var ent = require('ent'),
    arr = require('../../server/utils/arrays.js'),
    Buzzr = require('mongoose').model('Buzzr'),
    logger = require('../common/logger.js'),
    occurrenceCounter = require('./occurrenceCounter.js');

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
  /*jshint maxstatements: false */
  /*jshint maxcomplexity: false */

  var expandedUrl = link.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (excludedDomains[domain]) {
    if (done) { return done(); }
    return;
  }
  
  if (!link.title || link.title === '') {
    delete link.title;
    delete link.searchHead;
    delete link.searchBody;
    arr.titleErrorLinks.push(link);
    if (done) { return done(); }
    return;
  }

  if (!occurrenceCounter(link, buzzr.topic)) {
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
