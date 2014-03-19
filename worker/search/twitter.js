'use strict';

/*
Example results:

"search_metadata": {
  "max_id": 250126199840518145,
  "since_id": 24012619984051000,
  "refresh_url":
    "?since_id=250126199840518145&q=%23freebandnames&result_type=mixed&include_entities=1",
  "next_results":
    "?max_id=249279667666817023&q=%23freebandnames&count=4&include_entities=1&result_type=mixed",
  "count": 4,
  "completed_in": 0.035,
  "since_id_str": "24012619984051000",
  "query": "%23freebandnames",
  "max_id_str": "250126199840518145"
}
*/

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
  if (buzzr.sinceId !== '0') {
    query += ' since_id:' + buzzr.twitPoints.sinceId;
  }
  
  currentTopic = buzzr.topic;

  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 50
  },
  function(err, reply) {
    if (err) { throw new Error(err); }
    
    var tweets = reply.statuses,
        refresh = reply.search_metadata.refresh_url,
        nextResults = reply.search_metadata.next_results,
        sinceId = refresh.split('&q=')[0].replace('?since_id=', ''),
        maxId = '0';

    if (nextResults) {
      maxId = nextResults.split('&q=')[0].replace('?max_id=', '');
    }

    buzzr.twitPoints.sinceId = sinceId;
    if (maxId > buzzr.twitPoints.maxId) {
      buzzr.twitPoints.maxId = maxId;
    }
    buzzr.save();

    logger.log('SEARCH: found ' + tweets.length);
    tweets.forEach(processTweet);
    ee.emit('continue');
  });
}


exports.update = function(buzzr, _ee) {
  logger.log('SEARCH: updating: ' + buzzr.topic);
  ee = _ee;
  getTweets(buzzr);
};

