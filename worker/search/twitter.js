'use strict';

var arr = require('../../server/utils/arrays.js'),
    logger = require('../common/logger.js'),
    Twit = require('twit');

var T = new Twit({
  consumer_key:         process.env.TWIT_KEY,
  consumer_secret:      process.env.TWIT_SECRET,
  access_token:         process.env.TWIT_TOKEN,
  access_token_secret:  process.env.TWIT_TOKEN_SECRET
});

var currentTopic = '',
    ee = {};

function calcRank(tweet) {
  var favs = tweet.favorite_count || 0,
      retweets = tweet.retweet_count || 0,
      rank = favs + retweets;

  if (!!tweet.in_reply_to_status_id) {
    rank += 1;
  }
  return rank;
}

function processTweet(tweet) {
  if (tweet.entities.urls && tweet.entities.urls.length > 0) {
    var link = tweet.entities.urls[0],
        url = link.expanded_url || link.url,
        rank = calcRank(tweet);

    logger.log('SEARCH: found ' + url);
    arr.newLinks.push({
      url: url,
      topic: currentTopic,
      provider: 'twitter',
      rank: rank
    });
  }
}

function getTweets(buzzr) {
  var query = buzzr.topic + ' filter:links';
  
  currentTopic = buzzr.topic;

  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 100
  },
  function(err, reply) {
    if (err) { throw new Error(err); }
    var tweets = reply.statuses;
    tweets.forEach(processTweet);
    //maxId = reply.search_metadata.max_id;

    ee.emit('continue');
  });
}


exports.update = function(buzzr, _ee) {
  logger.log('SEARCH: updating: ' + buzzr.topic);
  ee = _ee;
  getTweets(buzzr);
};

