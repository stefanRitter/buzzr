'use strict';

var _ = require('lodash');

var activeLinks = [],
    passiveLinks = [],
    archivedLinks = [],
    newTweets = [];


function updatePassiveLink(tweet, i) {
  var otherTweet = passiveLinks[i];
  if (otherTweet.tweetIds.indexOf(tweet.id) === -1) {
    tweet.rank += otherTweet.rank;
  }

  passiveLinks.splice(i, 1);
  newTweets.push(tweet);
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

  newTweets.push(tweet);
}

module.exports = function(tweets, buzzr) {
  activeLinks = buzzr.activeLinks;
  passiveLinks = buzzr.passiveLinks;
  archivedLinks = buzzr.archivedLinks;
 
  tweets.forEach(sortTweet);
  newTweets.sort(function(a, b) { return b.rank-a.rank; });

  newTweets.forEach(function(tw) {
    console.log(tw.rank);
  });
};
