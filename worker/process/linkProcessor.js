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
  //'facebook.com': true,
  'amazon.com': true,
  'adf.ly': true,
  'q.gs': true,
  'buzzr.io': true,
  'dailymail.co.uk': true,
  'stackoverflow.com': true,
  'newsnow.co.uk': true
};


function processLink(link, buzzr) {
  var expandedUrl = link.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
  
  if (excludedDomains[domain]) { return; }
  if (!link.title || link.title === '') {
    delete link.title;
    return arr.titleErrorLinks.push(link);
  }

  logger.log('PROCESS: adding ' + expandedUrl);

  link.url = link.url.replace(/[?&]utm_[^&]+/g, '').replace(/^&/, '?');
  link.title = ent.decode(link.title);
  buzzr.pushLink(link);
}

module.exports = function (err, link) {
  if (err) {
    logger.error('PROCESS: error ' + link.url);
    return arr.socketErrorLinks.push(link);
  }
  
  Buzzr.findOne({topic: link.topic}, function(err, buzzr) {
    if (err) { throw err; }
    processLink(link, buzzr);
  });
};
