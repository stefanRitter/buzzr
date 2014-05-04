angular.module('app').controller('appTweet4MeCtrl', function ($scope, $http, $location, appFeedback) {
  'use strict';

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.signup = function() {
    if (!$scope.email || !$scope.topic) {
      $scope.success = false;
      $scope.error = 'Make sure you filled out both email and topic';
      return;
    }

    $scope.processing = true;
    $http
      .post('/tweet4me', {email: $scope.email, topic: $scope.topic})
      .then(function(res) {
        if (res.data.success) {
          $scope.success = true;
          $scope.error = false;
        } else {
          $scope.success = false;
          $scope.error = res.data.error;
          $scope.processing = false;
        }
      });
  };
});
