'use strict';

var env = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env];

// connect to datastore
require('../config/mongoose.js')(config);

var Buzzr = require('mongoose').model('Buzzr'),
    arr = require('../utils/arrays.js');

var calcRank = require('../../worker/common/calcTweetRank.js'),
    getLink = require('../../worker/process/getLink.js'),
    linkProcessor = require('../../worker/process/linkProcessor.js'),
    links = [];

var Twit = require('twit');
var T = new Twit({
  consumer_key:         process.env.TWIT_KEY,
  consumer_secret:      process.env.TWIT_SECRET,
  access_token:         process.env.TWIT_TOKEN,
  access_token_secret:  process.env.TWIT_TOKEN_SECRET
});


function callTwitter(buzzr) {
  var processTweet = function(tweet) {
    if (tweet.entities.urls && tweet.entities.urls.length > 0) {
      var link = tweet.entities.urls[0],
          url = link.expanded_url || link.url,
          rank = calcRank(tweet);
      
      links.push({
        url: url,
        topic: buzzr.topic,
        provider: 'twitter',
        rank: rank
      });
    }
  };

  T.get('search/tweets', {
    q: buzzr.topic + ' filter:links',
    include_entities: true,
    count: 100
  },
  function(err, reply) {
    if (err) {
      if (err.toString().indexOf('ETIMEDOUT') > -1) {
        return setTimeout(function() { callTwitter(buzzr); }, 60000);
      }
      arr.topics.push(buzzr.topic);
      throw err;
    }
    
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

    console.log('CREATOR: found ' + tweets.length + ' for ' + buzzr.topic);
    tweets.forEach(processTweet);
    links.forEach(function(link) { getLink(link, linkProcessor); });
    
    setTimeout(function() {
      Buzzr.findOne({topic: buzzr.topic}, function(err, buzzr) {
        buzzr.makeUniq();
        arr.topics.push(buzzr.topic);
      });
    }, 9400);
  });
}

process.on('message', function(m) {
  if (!!m.topic) {
    console.log('CREATOR: ' + m.topic);

    Buzzr.create({topic: m.topic}, function(err, buzzr) {
      if (err) { throw err; }
      callTwitter(buzzr);
    });
  }
});