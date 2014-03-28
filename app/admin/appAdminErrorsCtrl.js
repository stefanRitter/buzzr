angular.module('app').controller('appAdminErrorsCtrl', function ($scope, $http, $window) {
  'use strict';
  
  $scope.socketErrors = [];
  $scope.titleErrors = [];

  $http
    .get('/api/errors')
    .then(function(res) {
      if (!!res.data.titleErrors) {
        $scope.socketErrors = res.data.socketErrors;
        $scope.titleErrors = res.data.titleErrors;
      } else {
        $window.alert('$http error');
      }
    });
});
