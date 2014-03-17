'use strict';

var urlexpand = require('./getLink.js'),
    processLink = require('./linkProcessor.js'),
    logger = require('../common/logger.js');


function calcRank(tweet) {
  var favs = tweet.favorite_count || 0,
      retweets = tweet.retweet_count || 0,
      rank = favs + retweets;

  if (!!tweet.in_reply_to_status_id) {
    rank += 1;
  }

  return rank;
}

function processTweet(tweet, buzzr, done) {
  if (tweet.entities.urls && tweet.entities.urls.length > 0) {
    var link = tweet.entities.urls[0],
        url = link.expanded_url || link.url,
        rank = calcRank(tweet);

    logger.log('processing: ', url);
    urlexpand(url, processLink(rank, buzzr, done));
  }
}

module.exports = function(buzzr) {
  return function(tweet, done) {
    processTweet(tweet, buzzr, done);
  };
};
