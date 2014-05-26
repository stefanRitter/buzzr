'use strict';

var calcRank = require('../common/calcTweetRank.js'),
    Twit = require('twit');

var T = new Twit({
  consumer_key:         process.env.TWIT_KEY_SPDR,
  consumer_secret:      process.env.TWIT_SECRET_SPDR,
  access_token:         process.env.TWIT_TOKEN_SPDR,
  access_token_secret:  process.env.TWIT_TOKEN_SECRET_SPDR
});

var currentTopic = '',
    newLinks = [],
    callsCount = 0,
    maxCalls = 10,
    maxId = '',
    cb;


function processTweet(tweet) {
  if (tweet.entities.urls && tweet.entities.urls.length > 0) {
    var link = tweet.entities.urls[0],
        url = link.expanded_url || link.url,
        rank = calcRank(tweet);

    newLinks.push({
      twtId: tweet.id,
      url: url,
      topic: currentTopic,
      provider: 'twitter',
      rank: rank
    });
  }
}


function getTweets() {
  var query = currentTopic + ' filter:links lang:en';
  if (!!maxId) {
    query += ' max_id:'+maxId;
  }
  if (callsCount > 0) {
    query += ' page:'+callsCount;
  }
  console.log(query);
  
  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 100
  },
  function(err, reply) {
    if (err) {
      if (err.toString().indexOf('ETIMEDOUT') > -1) {
        console.log('we need to wait!');
      }
      throw err;
    }
    
    var tweets = reply.statuses;
    maxId = reply.search_metadata.max_id_str;

    console.log('SEARCH-'+callsCount+': found ' + tweets.length);
    tweets.forEach(processTweet);

    callsCount += 1;
    if (callsCount >= maxCalls) {
      cb(newLinks);
    } else {
      getTweets();
    }
  });
}


module.exports = function(topic, _cb) {
  currentTopic = topic;
  callsCount = 0;
  maxCalls = 10;
  cb = _cb;

  console.log('SEARCH: updating: ' + currentTopic);
  getTweets();
};
