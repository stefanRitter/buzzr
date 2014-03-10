'use strict';

var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),
    TweetProcessor = require('./tweetProcessor');



function buildQuery(topic, lang, sinceId, beforeId) {
  var now = new Date(),
      timeAgo = (now.getFullYear()-1) + "-" + now.getMonth() + "-" + now.getDate(),
      query = topic + ' filter:links' + ' since:' + timeAgo + ' lang:' + lang;

  if (!!sinceId) {
    // query += ...
  }
  if (!!beforeId) {
    // query += ...
  }

  return query;
}

function callTwitter(query, tweetProcessor) {
  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 100 
  },
  function(err, reply) {
    if (err) { throw new Error(err); }
  
    reply.statuses.forEach(tweetProcessor);
  });
}


// update existing feed go back 24hrs
exports.update = function(buzzr) {
  var query = buildQuery(buzzr.topic, buzzr.lang),
      tweetProcessor = TweetProcessor(buzzr);

  callTwitter(query, tweetProcessor);
};


// this is a new feed so we have to go back in time
exports.create = function(buzzr) {
  var query = buildQuery(buzzr.topic, buzzr.lang),
      tweetProcessor = TweetProcessor(buzzr);

  callTwitter(query, tweetProcessor);
};

