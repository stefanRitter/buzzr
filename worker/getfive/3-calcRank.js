'use strict';

var ent = require('ent'),
    occurrenceCounter = require('../process/occurrenceCounter.js');

var tweets = [],
    newLinks = [],
    doneCount = 0,
    doneAll = 0,
    buzzr,
    cb;

var excludedDomains = {
  'google.com': true,
  'google.co.uk': true,
  'instagram.com': true,
  'q.gs': true
};

/*
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
*/

function done() {
  doneCount += 1;
  if (doneCount >= doneAll) {
    cb(newLinks);
  }
}


function rankUrl(link) {
  var expandedUrl = link.url,
      domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase().replace('www.', '');
  
  if (excludedDomains[domain]) {
    console.log('RANKER: excluded domain', domain);
    return done();
  }
  
  if (!link.title || link.title === '') {
    console.log('RANKER: no title', link.url);
    return done();
  }

  if (!occurrenceCounter(link, buzzr.topic)) {
    console.log('RANKER: no occurrence found', link.url);
    return done();
  }

  delete link.bodyText;
  delete link.headText;
  link.url = link.url.replace(/[?&]utm_[^&]+/g, '').replace(/^&/, '?');
  link.title = ent.decode(link.title);
  link.domain = domain;
  newLinks.push(link);
  done();
}


module.exports = function(_tweets, _buzzr, _cb) {
  tweets = _tweets;
  cb = _cb;
  buzzr = _buzzr;
  doneCount = 0;
  doneAll = tweets.length;

  console.log('RANKING: '+doneAll);
  tweets.forEach(rankUrl);
};
