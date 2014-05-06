angular.module('app').controller('appTweet4meFeedCtrl', function ($scope, $routeParams, $http, appTweet4me) {
  'use strict';

  $scope.email = $routeParams.user;
  $scope.status = 'loading';

  $scope.encode = function(title) { return encodeURI(title); };

  $scope.ifStatus = function(status) {
    return $scope.status === status;
  };
  
  $scope.login = function() {
    $scope.getTweets();
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
