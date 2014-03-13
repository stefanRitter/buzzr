'use strict';

/*
Example results:

"search_metadata": {
  "max_id": 250126199840518145,
  "since_id": 24012619984051000,
  "refresh_url": "?since_id=250126199840518145&q=%23freebandnames&result_type=mixed&include_entities=1",
  "next_results": "?max_id=249279667666817023&q=%23freebandnames&count=4&include_entities=1&result_type=mixed",
  "count": 4,
  "completed_in": 0.035,
  "since_id_str": "24012619984051000",
  "query": "%23freebandnames",
  "max_id_str": "250126199840518145"
}
*/

var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),
    TweetProcessor = require('./tweetProcessor'),
    Batch = require('batch');


function buildQuery(buzzr) {
  var query = buzzr.topic + ' filter:links';
  //' lang:' + buzzr.lang;

  if (!!buzzr.twitPoints.maxId) {
    query = query + ' max_id:' + buzzr.twitPoints.maxId;
  }
  return query;
}

function batchProcessTweets(tweets, tweetProcessor) {
  var batch = new Batch();

  batch.concurrency(3);

  tweets.forEach(function(tweet){
    batch.push(function(done){
      tweetProcessor(tweet, done);
    });
  });
  
  batch.on('progress', function() {});
  batch.end(function() {});
}


// update existing feed go back until since_id
exports.update = function(buzzr) {
  var count = 0,
      tweetProcessor = TweetProcessor(buzzr);

  buzzr.twitPoints.sinceId = buzzr.twitPoints.nextSinceId;
  buzzr.twitPoints.maxId = undefined; //reset
  buzzr.save();

  console.log('updating: ' + buzzr.topic);
  nextUpdate();

  function updateCall(query) {
    console.log('twit call ' + count);

    T.get('search/tweets', {
      q: query,
      include_entities: true,
      count: 100
    },
    function(err, reply) {
      if (err) { throw new Error(err); }
      
      var tweets = reply.statuses;
      
      if (tweets.length === 0) {
        return console.log('no tweets received!');
      }

      if (buzzr.twitPoints.sinceId >= reply.search_metadata.max_id) {
        count += 500;
      }
      
      if (count === 0) {
        buzzr.twitPoints.nextSinceId = reply.search_metadata.since_id;
      }
      buzzr.twitPoints.maxId = reply.search_metadata.max_id;
      buzzr.save();

      batchProcessTweets(tweets, tweetProcessor);
      nextUpdate(1);
    });
  }

  function nextUpdate(i) {
    count += i || 0;
    if (count >= 400) {
      return console.log('calls to twitter done!');
    }
    
    var query = buildQuery(buzzr);
    updateCall(query);
  }
};



// this is a new feed so we have to go back in time
exports.create = function(buzzr) {
  var count = 0,
      tweetProcessor = TweetProcessor(buzzr);

  console.log('creating: ' + buzzr.topic);
  next();

  function createCall(query) {
    console.log('call ' + count);

    T.get('search/tweets', {
      q: query,
      include_entities: true,
      count: 100
    },
    function(err, reply) {
      if (err) { throw new Error(err); }
      
      var tweets = reply.statuses;

      if (tweets.length === 0) {
        return console.log('no tweets received!');
      }

      if (count === 0) {
        buzzr.twitPoints.nextSinceId = reply.search_metadata.since_id;
      }
      buzzr.twitPoints.maxId = reply.search_metadata.max_id;
      buzzr.save();

      batchProcessTweets(tweets, tweetProcessor);

      next(1);
    });
  }

  function next(i) {
    count += i || 0;
    if (count >= 400) {
      return console.log('calls to twitter done!');
    }
    
    var query = buildQuery(buzzr);
    createCall(query);
  }
};