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
  var searchText = encodeURI(req.body.searchText),
      query = '%23' + searchText +
              ' since:' + oneYearAgo + ' filter:links';

  console.log(searchText);

  T.get('search/tweets', {
    q: query,
    result_type: 'popular',
    include_entities: true,
    count: 100 
  },
  function(err, reply) {
    res.json({
      links: [{url: 'test', popularity: 7}]
    });
  });
};