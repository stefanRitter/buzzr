angular.module('app').controller('appTweet4MeFeedCtrl', function ($scope, $routeParams) {
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
    // get tweets based on email
    console.log('get tweets');
  };

  if (!$scope.email) {
    $scope.status = 'login';
  } else {
    $scope.getTweets();
  }
});
