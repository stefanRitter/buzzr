angular.module('app').controller('appReadlaterCtrl', function ($scope, appFeedback, appSidebar, appIdentity) {
  'use strict';

  $scope.readlater = appIdentity.currentUser.readlater || [];
  $scope.empty = function() {
    return $scope.readlater.length === 0;
  };

  $scope.toggleFeedback = function() { appFeedback.toggle(); };

  $scope.removeLink = function(url) {
    appIdentity.currentUser.removeSavedLink(url);
  };

  $scope.$on('readlaterChanged', function() {
    $scope.readlater = appIdentity.currentUser.readlater;
  });
});
