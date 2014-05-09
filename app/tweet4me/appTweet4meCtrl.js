angular.module('app').controller('appTweet4meCtrl', function ($scope, $location, appFeedback) {
  'use strict';

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.signup = function() {
    $location.path('/tweet4me/pricing');
  };
});
