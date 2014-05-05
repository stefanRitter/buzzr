angular.module('app').controller('appSocialHeaderCtrl', function ($scope, $location) {
  'use strict';

  var show = ['/', '/tweet4me', '/tweet4me/pricing', '/terms'];

  $scope.showSocialHeader = function() {
    return show.indexOf($location.path()) > -1;
  };
});
