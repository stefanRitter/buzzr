angular.module('app').factory('appTweet4me', function ($http) {
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

  Tweet4meResource.mark = function(email, mark, url) {
    $http.post(
      '/api/tweet4me/'+email+'/mark',
      {mark: mark, url: url}
    );
  };

  return Tweet4meResource;
});
