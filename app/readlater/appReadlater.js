angular.module('app').controller('appReadlaterCtrl', function ($scope, appFeedback, appHeader, appIdentity) {
  'use strict';

  $scope.readlater = appIdentity.currentUser.readlater || [];
  $scope.empty = function() {
    return $scope.readlater.length === 0;
  };

  $scope.toggleFeedback = function() { appFeedback.toggle(); };
  $scope.toggleHeader = function() { appHeader.toggle(); };
});
