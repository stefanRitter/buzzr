'use strict';

var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),
    TweetProcessor = require('./tweetProcessor');



function buildQuery(topic, sinceId, beforeId) {
  var now = new Date(),
      timeAgo = (now.getFullYear()-1) + "-" + now.getMonth() + "-" + now.getDate(),
      query = topic + ' filter:links' + ' since:' + timeAgo + ' lang:en';

  if (!!sinceId) {
    // query += ...
  }
  if (!!beforeId) {
    // query += ...
  }

  return query;
}


exports.get = function(buzzr) {
  var query = buildQuery(buzzr.topic),
      tweetProcessor = TweetProcessor(buzzr);

  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 100 
  },
  function(err, reply) {
    if (err) { throw new Error(err); }
  
    reply.statuses.forEach(tweetProcessor);
  });
};
