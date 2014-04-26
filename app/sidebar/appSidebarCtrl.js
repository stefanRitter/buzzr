angular.module('app').controller('appSidebarCtrl', function ($scope, $location, $document, appAuth, appNotifier, appIdentity) {
  'use strict';
  
  function close() {
    if ($scope.open) {
      $scope.open = false;
      $scope.$digest();
    }
  }

  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.setBuzzrs = function() {
    if (appIdentity.isAuthenticated()) {
      $scope.buzzrs = appIdentity.currentUser.buzzrs;
    }
  };

  $scope.encode = function(topic) {
    return encodeURI(topic);
  };

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/');
    });
  };

  $scope.removeBuzzr = function(topic) {
    appIdentity.currentUser.removeBuzzr(topic);
  };

  $scope.toggleOpen = function() {
    $scope.open = !$scope.open;
    $document.one('click', close);
    $document.one('touch', close);
  };

  $scope.slideOut = function() {
    $scope.open = true;
    $document.one('click', close);
    $document.one('touch', close);
  };

  $scope.$on('toggleSidebar', function() {
    $scope.setBuzzrs();
    $scope.toggleOpen();
  });

  $scope.$on('buzzrsChanged', function() {
    $scope.setBuzzrs();
  });

  $scope.setBuzzrs();
});
