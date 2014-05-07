angular.module('app').controller('appAdminAddTweetCtrl', function ($scope, $http) {
  'use strict';
  
  $scope.addTweet = function() {
    $http
      .post('/api/tweet4me/' + $scope.email)
      .then(function() {
        window.alert('Tweet Added!');
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
      });
  };
});
