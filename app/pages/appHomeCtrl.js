angular.module('app').controller('appHomeCtrl', function ($scope, $location, appIdentity, appHeader) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      $location.path('/' + $scope.searchText.trim());
    }
  };

  if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      // redirect if invalid email
      $location.path('account/settings');
    } else {
      // open header for returning users
      appHeader.toggle();
    }
  }
});
