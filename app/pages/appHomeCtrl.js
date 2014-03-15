angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIsMobile, appIdentity, appHeader, appTopics) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      $location.path('/' + $scope.searchText.trim());
    }
  };

  // redirect if invalid email
  if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      $location.path('account/settings')
    }
  }

  // auto focus input on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById("focus");
    homeInput.focus();
  }

  // open header for returning users
  if (appIdentity.isAuthenticated()) {
    appHeader.toggle();
  }
});
