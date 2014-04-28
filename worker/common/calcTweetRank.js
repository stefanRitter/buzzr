'use strict';

module.exports = function(tweet) {
  var favs = 0, //tweet.favorite_count || 0,
      retweets = tweet.retweet_count || 0,
      rank = favs + retweets;

  if (!!tweet.in_reply_to_status_id) {
    rank += 1;
  }
  return rank;
};
