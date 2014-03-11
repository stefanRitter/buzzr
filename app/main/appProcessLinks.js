angular.module('app').factory('appProcessLinks', function () {
  return {
    process: function($scope, incomingLinks) {
      $scope.links = incomingLinks;
    }
  };
});
