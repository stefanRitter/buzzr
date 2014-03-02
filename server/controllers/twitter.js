var Twit = require('twit'),
    T = new Twit({
      consumer_key:         process.env.TWIT_KEY,
      consumer_secret:      process.env.TWIT_SECRET,
      access_token:         process.env.TWIT_TOKEN,
      access_token_secret:  process.env.TWIT_TOKEN_SECRET
    }),

    now = new Date(),
    timeAgo = (now.getFullYear()-1) + "-" + now.getMonth() + "-" + now.getDate(),
    excludedDomains = {
      'pinterest.com': true,
      'instagram.com': true,
      'ask.fm': true,
      'vine.co': true
    };

// mock URL expander
var urlexpand = function (url, cb) {
  cb(null, {url: url});
}; //require('urlexpand'),



exports.getRoot = function (req, res) {
  res.render('twitter', {
    bootstrappedUser: req.user
  });
};

exports.search = function (req, res) {
  var searchText = req.body.searchText,
      query = searchText + ' filter:links' + ' since:' + timeAgo;

  T.get('search/tweets', {
    q: query,
    include_entities: true,
    count: 100 
  },
  
  function(err, reply) {
    if (err) { return res.json({err: err}); }

    var links = {},
        linksArray = [],
        count = reply.statuses.length;

    console.log(count);

    reply.statuses.forEach(processTweet);

    for (var l in links) {
      linksArray.push(links[l]);
    }
    res.json({
      links: linksArray
    });

    function processTweet(tweet) {

      if (tweet.entities.urls && tweet.entities.urls.length > 0) {
        var link = tweet.entities.urls[0],
            url = link.expanded_url || link.url;
        
        urlexpand(url, prepareUrl);
      }


      function prepareUrl(err, data) {
        // data.url: 'http://instagram.com/p/QhLtWhB_A1/'
        // data.title: 'Photo by sofishlin &bull; Instagram'
        
        var expandedUrl = data.url,
            domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1];
        
        if (!excludedDomains[domain]){
          pushLink(expandedUrl);
        }
      }
    
      function pushLink (newUrl) {
        if (!links[newUrl]) {
          links[newUrl] = {
            url: newUrl,
            popularity: calcPopularity(tweet)
          }
        } else {
          links[newUrl].popularity += 2;
        }
      }
    }
  });
};

function calcPopularity(tweet) {
  var favs = tweet.favourites_count || 0,
      retweets = tweet.retweet_count || 0;

  return Math.round(favs + retweets * 1.5);
}