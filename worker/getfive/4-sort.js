'use strict';

var _ = require('lodash');

var activeLinks = [],
    passiveLinks = [],
    archivedLinks = [],
    uniqTweets = [],
    newTweets = [];


function pushNewTweet(tweet) {
  tweet.tweetIds = [tweet.twtId];
  delete tweet.twtId;
  newTweets.push(tweet);
}

function updatePassiveLink(tweet, i) {
  var otherTweet = passiveLinks[i];
  if (otherTweet.tweetIds.indexOf(tweet.twtId) === -1) {
    tweet.rank += otherTweet.rank;
  }

  passiveLinks.splice(i, 1);
  pushNewTweet(tweet);
}

function sortTweet(tweet) {
  function checkLinkEquality(link) {
    return link.url === tweet.url || link.title === tweet.title;
  }

  var i = _.findIndex(passiveLinks, checkLinkEquality);
  if (i > -1) {
    return updatePassiveLink(tweet, i);
  }

  i = _.findIndex(activeLinks, checkLinkEquality);
  if (i > -1) { return; }

  i = _.findIndex(archivedLinks, checkLinkEquality);
  if (i > -1) { return; }

  pushNewTweet(tweet);
}

function makeUniq(tweet) {
  uniqTweets.push(tweet);
}

module.exports = function(tweets, buzzr) {
  activeLinks = buzzr.activeLinks;
  passiveLinks = buzzr.passiveLinks;
  archivedLinks = buzzr.archivedLinks;
  
  tweets.forEach(makeUniq);
  uniqTweets.forEach(sortTweet);
  newTweets.sort(function(a, b) { return b.rank-a.rank; });
  buzzr.addSortedLinks(newTweets);
};
