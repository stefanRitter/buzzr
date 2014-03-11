angular.module('app').factory('appProcessLinks', function () {
  return {
    process: function($scope, incomingLinks) {
      alert('process links');
      $scope.links = incomingLinks;
    }
  };
});
