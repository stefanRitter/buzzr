'use strict';

var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),
    now = new Date(),
    oneYearAgo = (now.getFullYear()-1) + "-" + now.getMonth() + "-" + now.getDate();


exports.getRoot = function (req, res) {
  res.render('twitter', {
    bootstrappedUser: req.user
  });
};


exports.search = function (req, res) {
  var searchText = req.body.searchText,
      query = searchText; // +
              //' since:' + oneYearAgo + ' filter:links';

  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 100 
  },
  
  function(err, reply) {
    var links = [];

    if (err) { 
      return res.json({
        links: links,
        err: err.toString()
      });
    }

    console.log(reply.statuses.length);

    reply.statuses.forEach( function (tweet) {
      tweet.entities.urls.forEach( function (link) {
        var url = link.expanded_url || link.url,
            pop = tweet.favourites_count || tweet.retweet_count || 0;
        
        links.push({
          url: url,
          popularity: pop
        });
      });
    });

    res.json({
      links: links
    });
  });
};

