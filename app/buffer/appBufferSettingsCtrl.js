angular.module('app').controller('appBufferSettingsCtrl', function ($scope, $http, $location, appIdentity) {
  'use strict';

  if (!appIdentity.isAuthenticated()) {
    $location.path('/buffer/pricing');
  }

  $scope.signup = function() {
    if (!$scope.email || !$scope.topic) {
      $scope.success = false;
      $scope.error = 'Make sure you filled out both email and topic';
      return;
    }

    $scope.processing = true;
    $http
      .post('/buffer', {email: $scope.email, topic: $scope.topic, plan: appIdentity.currentUser.email})
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
