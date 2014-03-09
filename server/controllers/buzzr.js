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
      'vine.co': true,
      'facebook.com': true,
      'amazon.com': true
    };

var urlexpand = require('urlexpand');


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
        count = 0,
        current = 0;

    reply.statuses.forEach(processTweet);


    function done() {
      current += 1;
      if (current >= count) {
        for (var l in links) {
          linksArray.push(links[l]);
        }

        console.log('found tweets: ' + reply.statuses.length);
        console.log('found links: ' + linksArray.length);
        
        res.json({
          links: linksArray
        });
      }
    }

    function processTweet(tweet) {

      if (tweet.entities.urls && tweet.entities.urls.length > 0) {
        var link = tweet.entities.urls[0],
            url = link.expanded_url || link.url;
        
        count += 1;;
        urlexpand(url, prepareUrl);
      }


      function prepareUrl(err, data) {
        // data.url: 'http://instagram.com/p/QhLtWhB_A1/'
        // data.title: 'Photo by sofishlin &bull; Instagram'
        
        var expandedUrl = data.url,
            domain = expandedUrl.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase();
        
        if (!excludedDomains[domain]){
          pushLink(data);
        }
        console.log('found: ' + data.url);
        done();
      }
    
      function pushLink (data) {
        var newUrl = data.url;
        
        if (!links[newUrl]) {
          links[newUrl] = {
            url: newUrl,
            title: data.title,
            rank: calcRank(tweet)
          }
        } else {
          links[newUrl].rank += 1;
        }
      }
    }
  });
};

function calcRank(tweet) {
  var favs = tweet.favourites_count || 0,
      retweets = tweet.retweet_count || 0;

  return Math.round(favs + retweets * 1.5);
}
