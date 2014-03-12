'use strict';

var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),
    TweetProcessor = require('./tweetProcessor'),
    Batch = require('batch');


function buildQuery(buzzr, maxId, sinceId) {
  var query = buzzr.topic + ' filter:links' + ' lang:' + buzzr.lang;

  if (maxId && !!buzzr.twitPoints.maxId) {
    query = query + ' max_id:' + buzzr.twitPoints.maxId;
  }
  if (sinceId && !!buzzr.twitPoints.sinceId) {
    query = query + ' since_id:' + buzzr.twitPoints.since_id;
  }
  return query;
}

function batchTweets(tweets, tweetProcessor) {
  var batch = new Batch;

  batch.concurrency(3);

  tweets.forEach(function(tweet){
    batch.push(function(done){
      tweetProcessor(tweet, done);
    });
  });
  
  batch.on('progress', function(e) {
    // console.log('progress: ', e.index, '/', e.pending);
  });

  batch.end(function(err, tweets) {
  });
}


// update existing feed go back 24hrs
exports.update = function(buzzr) {
  var count = 0,
      tweetProcessor = TweetProcessor(buzzr);

  console.log('updating: ' + buzzr.topic);
  next();

  function sinceIdCall(query) {
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

      if (buzzr.twitPoints.sinceId === tweets[0].id_str) {
        return count = 401;
      }
      buzzr.twitPoints.sinceId = tweets[0].id_str;
      buzzr.save();

      batchTweets(tweets, tweetProcessor);

      count += 1;
      next();
    });
  }

  function next() {
    if (count >= 400) {
      return console.log('calls to twitter done!');
    }
    
    var query = buildQuery(buzzr, false, true)
    sinceIdCall(query);
  }
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

      if (count === 0) { 
        buzzr.twitPoints.sinceId = tweets[0].id_str;
      }
      buzzr.twitPoints.maxId = lastTweet.id_str;
      buzzr.save();

      batchTweets(tweets, tweetProcessor);

      count += 1;
      next();
    });
  }

  function next() {
    if (count >= 40) {
      return console.log('calls to twitter done!');
    }
    
    var query = buildQuery(buzzr, true, false)
    maxIdCall(query);
  }
};