angular.module('app').controller('appTweet4MeFeedCtrl', function ($scope, $routeParams, $http) {
  'use strict';

  $scope.email = $routeParams.user;
  $scope.status = 'loading';

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
        $scope.tweets = res.data.tweets;
        $scope.status = 'feeding';
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
        $scope.status = 'error';
      });
  };

  if (!$scope.email) {
    $scope.status = 'login';
  } else {
    $scope.getTweets();
  }
});
