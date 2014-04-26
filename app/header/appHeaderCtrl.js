angular.module('app').controller('appHeaderCtrl', function ($scope, $rootScope, appSidebar) {
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
});
