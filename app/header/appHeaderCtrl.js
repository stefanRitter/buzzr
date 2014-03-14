angular.module('app').controller('appHeaderCtrl', function ($scope, $location, $document, appAuth, appNotifier, appIdentity) {
  'use strict';

  $scope.open = false;
  $scope.identity = appIdentity;
  if (appIdentity.isAuthenticated()) {
    $scope.buzzrs = appIdentity.currentUser.buzzrs;
  }

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/');
    });
  };

  $scope.toggleOpen = function() {
    $scope.open = !$scope.open;
    $document.one('click', close);
    $document.one('touch', close);

    function close() {
      if ($scope.open) {
        $scope.open = false;
        $scope.$digest();
      }
    }
  };

  $scope.$on('toggleHeader', function() {
    $scope.toggleOpen();
  });
});
