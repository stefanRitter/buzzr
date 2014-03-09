angular.module('app').controller('appPagesCtrl', function ($scope, $location, $document, appIsMobile, appFeedback) {
  
  // auto focus on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById("focus");
    if (homeInput !== null) { homeInput.focus(); }
  }

  $scope.search = function() {
    if (!!$scope.searchText) {
      var searchText = encodeURI($scope.searchText.trim());
      $location.path('/' + searchText);
    }
  };

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
