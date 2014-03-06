angular.module('app').controller('appPagesCtrl', function ($scope, $location) {
  $scope.search = function () {
    if (!!$scope.searchTerm) {
      var searchTerm = encodeURI($scope.searchTerm.replace(' ', '-'));
      $location.path(searchTerm);
    }
  };
});
