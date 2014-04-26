angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIdentity, appSidebar, appIsMobile) {
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
      // open sidear for returning users
      appSidebar.toggle();
    }
  }

  // auto focus input on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById('focus');
    homeInput.focus();
  }
});
