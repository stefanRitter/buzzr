angular.module('app').controller('appPagesCtrl', function ($scope, appFeedback, appIdentity) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
