angular.module('app').controller('appHeaderCtrl', function ($scope, $rootScope, $location, appIdentity, appSidebar) {
  'use strict';

  $scope.isLoggedIn = function() {
    return appIdentity.isAuthenticated();
  };
  
  $scope.toggleSidebar = function() {
    appSidebar.toggle();
  };

  $rootScope.$on('toggleSidebar', function() {
    $scope.open = !$scope.open;
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  });

  $scope.$on('$locationChangeSuccess', function() {
    var path = $location.path();
    $scope.title = path.replace('/', '').replace('account/', '').trunc(15);
  });

  $scope.showLogo = function() {
    var noLogo = ['/', '/login', '/about', '/join', '/terms'];
    return noLogo.indexOf($location.path()) === -1;
  };
});
