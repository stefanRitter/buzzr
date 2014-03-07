angular.module('app').controller('appPagesCtrl', function ($scope, $location, $document, appIsMobile) {
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById("focus");
    if (homeInput !== null) { homeInput.focus(); }
  }

  $scope.search = function () {
    if (!!$scope.searchTerm) {
      var searchTerm = encodeURI($scope.searchTerm.replace(' ', '-'));
      $location.path(searchTerm);
    }
  };
});
