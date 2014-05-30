angular.module('app').controller('appPagesCtrl', function ($scope, appTimeToUpdate, appFeedback) {
  'use strict';

  $scope.updateStatus = appTimeToUpdate.timeLeft();

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
