angular.module('app').controller('appHeaderCtrl', function ($scope, $rootScope, $location, appSidebar) {
  'use strict';
  
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
    var path = $location.path(),
        noTitle = ['/', '/about', '/terms', '/join', '/login', '/account/settings', '/account/readlater'];
    
    if (noTitle.indexOf(path) === -1) {
      $scope.title = path.replace('/', '');
      return;
    }

    if (path === '/account/readlater') {
      $scope.title = 'read later';
      return;
    }
    $scope.title = '';
  });
});
