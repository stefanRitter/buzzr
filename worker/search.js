'use strict';

var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),
    TweetProcessor = require('./tweetProcessor');



function buildQuery(buzzr, maxId, sinceId) {
  var query = buzzr.topic + ' filter:links' + ' lang:' + buzzr.lang;

  if (maxId && !!buzzr.maxId) {
    query = query + ' max_id:' + buzzr.maxId;
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
    
    var tweets = reply.statuses,
        lastTweet = tweets[tweets.length - 1];
    
    tweets.forEach(tweetProcessor);
  });
}


// update existing feed go back 24hrs
exports.update = function(buzzr) {
  console.log('UPDATE');
  /*var query = buildQuery(buzzr, false),
      tweetProcessor = TweetProcessor(buzzr);

  callTwitter(query, tweetProcessor);*/
};


// this is a new feed so we have to go back in time
exports.create = function(buzzr) {
  var count = 0,
      tweetProcessor = TweetProcessor(buzzr);

  console.log('creating: ' + buzzr.topic);
  next();

  function maxIdCall(query) {
    console.log('call ' + count);

    T.get('search/tweets', {
      q: query,
      include_entities: true,
      count: 100 
    },
    function(err, reply) {
      if (err) { throw new Error(err); }
      
      var tweets = reply.statuses,
          lastTweet = tweets[tweets.length - 1];
      console.log('found '+ tweets.length);

      buzzr.maxId = lastTweet.id_str;
      buzzr.save();

      tweets.forEach(tweetProcessor);

      count += 1;
      next();
    });
  }

  function next() {
    if (count >= 40) {
      return '40 calls to twitter done';
    }
    
    var query = buildQuery(buzzr, true, false)
    maxIdCall(query);
  }
};