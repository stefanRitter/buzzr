angular.module('app').controller('appAdminBuzzrsCtrl', function ($scope, appTopics) {
  'use strict';
  
  $scope.buzzrs = appTopics;
});
