angular.module('app').controller('appPagesCtrl', function ($scope, $location, $document, appIsMobile) {
  if (!appIsMobile.any()) {
    $document[0].getElementById("focus").focus();
  }

  $scope.search = function () {
    if (!!$scope.searchTerm) {
      var searchTerm = encodeURI($scope.searchTerm.replace(' ', '-'));
      $location.path(searchTerm);
    }
  };
});
