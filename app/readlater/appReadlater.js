angular.module('app').controller('appReadlaterCtrl', function ($scope, appFeedback, appIdentity) {
  'use strict';

  $scope.readlater = appIdentity.currentUser.readlater || [];
  $scope.status = {
    empty: false
  };

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  if ($scope.readlater.length === 0) {
    $scope.status.empty = true;
  }
});
