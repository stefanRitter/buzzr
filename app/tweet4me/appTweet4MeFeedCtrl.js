angular.module('app').controller('appTweet4MeFeedCtrl', function ($scope, $routeParams, $http, $location) {
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
        $scope.tweets = res.data.tweets;
        if ($scope.tweets.length === 0) {
          $location.path('/tweet4me');
        }
        console.log($scope.tweets);
        $scope.status = 'feeding';
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
        if ($scope.tweets.length === 0) {
          $location.path('/tweet4me');
        }
      });
  };

  if (!$scope.email) {
    $scope.status = 'login';
  } else {
    $scope.getTweets();
  }
});
