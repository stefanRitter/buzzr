angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIdentity, appSidebar, appIsMobile, appAuth) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      $location.path('/' + $scope.searchText.trim());
    }
  };
  
  if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      // redirect if email invalid (twitter logins)
      $location.path('account/settings');
    }
    if (appIdentity.currentUser.bufferUser) {
      appAuth.logoutUser();
      $location.path('/');
    }
  }

  // auto focus input on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById('focus');
    homeInput.focus();
  }
});
