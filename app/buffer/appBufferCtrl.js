angular.module('app').controller('appBufferCtrl', function ($scope, appFeedback) {
  'use strict';

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
