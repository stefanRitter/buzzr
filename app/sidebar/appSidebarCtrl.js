angular.module('app').controller('appSidebarCtrl', function ($scope, $rootScope, appSidebar, $location, $document, appAuth, appNotifier, appIdentity) {
  'use strict';
  
  function close() {
    if ($scope.open) {
      appSidebar.toggle();
    }
  }

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
    var moveOver = angular.element(document.querySelectorAll('.move'));
    moveOver.toggleClass('over');
    $scope.open = !$scope.open;
    if ($scope.open) {
      $document.one('click', close);
      $document.one('touch', close);
    }
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  };

  $rootScope.$on('toggleSidebar', function() {
    $scope.setBuzzrs();
    $scope.toggleOpen();
  });

  $scope.$on('buzzrsChanged', function() {
    $scope.setBuzzrs();
  });

  $scope.setBuzzrs();
});
