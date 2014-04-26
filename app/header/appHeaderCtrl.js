angular.module('app').controller('appHeaderCtrl', function ($scope, appSidebar) {
  'use strict';
  
  $scope.toggleSidebar = function() {
    $scope.open = !$scope.open;
    appSidebar.toggle();
  };
});
