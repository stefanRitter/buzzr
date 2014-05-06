angular.module('app').factory('appTweet4me', function () {
  'use strict';
  var Tweet4meResource = {},
      uniqDates = {};

  function getDates() {
    var a = [];
    for (var date in uniqDates) {
      if(uniqDates.hasOwnProperty(date)) {
        a.push(date);
      }
    }
    return a.reverse();
  }

  function setLocalDate(tw) {
    tw.added = (new Date(tw.added)).toLocaleDateString();
    uniqDates[tw.added] = true;
  }
  
  function processTweet(tw) {
    setLocalDate(tw);
  }

  Tweet4meResource.processTweets = function($scope, tweets) {
    tweets.forEach(processTweet);
      
    $scope.dates = getDates();
    $scope.tweets = tweets;
  };

  return Tweet4meResource;
});
