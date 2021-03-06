'use strict';

var search = require('./1-search.js'),
    request = require('./2-request.js'),
    calcRank = require('./3-calcRank.js'),
    sort = require('./4-sort.js'),
    _ = require('lodash');

var Buzzr = require('mongoose').model('Buzzr'),
    currentBuzzr,
    cb;


// STEP 3
function processRanked(rankedLinks) {
  console.log('RANKED RESULTS: ', rankedLinks.length);
  sort(rankedLinks, currentBuzzr, cb);
}

// STEP 2
function processExpanded(expandedlinks) {
  console.log('REQUEST RESULTS: ', expandedlinks.length);
  calcRank(expandedlinks, currentBuzzr, processRanked);
}

// STEP 1
function startSearch() {
  search(currentBuzzr.topic, function(links) {
    var uq = _.uniq(links, 'twtId');
    console.log('SEARCH RESULTS: ', uq.length);
    request(uq, processExpanded);
  });
}


exports.updateOne = function(topic, _cb) {
  cb = _cb;
  Buzzr.findOneAndUpdate({topic: topic}, {topic: topic}, {upsert: true},
    function(err, buzzr) {
      if (err) { throw err; }
      currentBuzzr = buzzr;
      startSearch();
    }
  );
};
