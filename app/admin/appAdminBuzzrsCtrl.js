angular.module('app').controller('appAdminBuzzrsCtrl', function ($scope, $http, $window) {
  'use strict';
  
  $scope.buzzrs = [];

  $http
    .get('/api/buzzrs')
    .then(function(res) {
      if (res.data.buzzrs) {
        $scope.buzzrs = res.data.buzzrs;
      } else {
        $window.alert('$http error');
      }
    });
});
