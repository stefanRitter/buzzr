angular.module('app').controller('appTweet4meFeedCtrl', function ($scope, $routeParams, $http, appTweet4me) {
  'use strict';

  $scope.email = $routeParams.user;
  $scope.status = 'loading';
  $scope.t4m = {};

  $scope.encode = function(title) { return encodeURI(title); };
  $scope.encodeCom = function(title) { return encodeURIComponent(title); };

  $scope.ifStatus = function(status) {
    return $scope.status === status;
  };
  
  $scope.login = function() {
    $scope.getTweets();
  };

  $scope.mark = function(mark, tweet) {
    appTweet4me.mark($scope.email, mark, tweet.url);
    tweet[mark] = true;
  };

  $scope.getTweets = function() {
    $scope.status = 'loading';
    $http
      .get('/api/tweet4me/' + $scope.email)
      .then(function(res) {
        var tweets = res.data.tweets;
        if (tweets.length === 0) {
          $scope.error = 'Couldn\'t find your Tweet4me. Is your Email correct?';
          $scope.status = 'login';
          return;
        }
        appTweet4me.processTweets($scope, tweets);
        $scope.status = 'feeding';
        $scope.t4m.status = res.data.status;
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
        $scope.status = 'login';
      });
  };

  if (!$scope.email) {
    $scope.status = 'login';
  } else {
    $scope.getTweets();
  }
});
