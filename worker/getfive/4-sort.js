'use strict';

var _ = require('lodash');

var activeLinks = [],
    passiveLinks = [],
    archivedLinks = [],
    uniqTweets = [],
    newTweets = [],
    tweets = [];


function updatePassiveLink(tweet, i) {
  var otherTweet = passiveLinks[i],
      diff = _.difference(otherTweet.tweetIds, tweet.tweetIds).length;

  if (diff > 0) {
    tweet.rank += otherTweet.rank || 1;
    tweet.tweetIds = _.union(otherTweet.tweetIds, tweet.tweetIds);
  }

  passiveLinks.splice(i, 1);
  newTweets.push(tweet);
}

function checkUrlEquality(tweet) {
  return function(link) {
    return link.url === tweet.url || link.title === tweet.title;
  };
}

function sortTweet(tweet) {
  var i = _.findIndex(passiveLinks, checkUrlEquality(tweet));
  if (i > -1) {
    return updatePassiveLink(tweet, i);
  }

  i = _.findIndex(activeLinks, checkUrlEquality(tweet));
  if (i > -1) { return; }

  i = _.findIndex(archivedLinks, checkUrlEquality(tweet));
  if (i > -1) { return; }

  newTweets.push(tweet);
}

function makeUniq(tweet) {
  var twt = _.clone(tweet),
      equal = checkUrlEquality(tweet),
      l = tweets.length,
      i = _.findIndex(uniqTweets, equal);
  
  if (i > -1) { return; } // has been counted already

  twt.tweetIds = [tweet.twtId];
  delete twt.twtId;
  
  for (i = 0; i < l; i++) {
    var newTwt = tweets[i];
    if (equal(newTwt) && twt.tweetIds.indexOf(newTwt.twtId) === -1) {
      twt.tweetIds.push(newTwt.twtId);
      twt.rank += newTwt.rank || 1;
    }
  }
  
  uniqTweets.push(twt);
}

module.exports = function(_tweets, buzzr) {
  activeLinks = buzzr.activeLinks;
  passiveLinks = buzzr.passiveLinks;
  archivedLinks = buzzr.archivedLinks;
  tweets = _tweets;
  uniqTweets = [];
  newTweets = [];
  
  tweets.forEach(makeUniq);
  uniqTweets.forEach(sortTweet);
  newTweets.sort(function(a, b) { return b.rank-a.rank; });
  buzzr.addSortedLinks(newTweets);
};
