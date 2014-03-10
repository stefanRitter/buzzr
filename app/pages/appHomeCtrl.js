angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIsMobile, appIdentity, appHeader) {
  
  // auto focus on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById("focus");
    homeInput.focus();
  }

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      var searchText = encodeURI($scope.searchText.trim());
      $location.path('/' + searchText);
    }
  };

  if (appIdentity.isAuthenticated()) {
    appHeader.toggle();
  }
});
