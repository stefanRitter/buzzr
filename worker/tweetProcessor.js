'use strict';


function calcRank(tweet) {
  var favs = tweet.favorite_count || 0,
      retweets = tweet.retweet_count || 0,
      rank = Math.round(favs + retweets * 1.5);

  if (!!tweet.in_reply_to_status_id) {
    rank += 1;
  }

  return rank;
}


function processTweet(tweet, buzzr) {
  var rank = calcRank(tweet);

  console.log('rank: ' + rank);
}


module.exports = function(buzzr) {
  return function(tweet) {
    processTweet(tweet, buzzr);
  }
};
