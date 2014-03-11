angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIsMobile, appIdentity, appHeader) {
  
  // redirect if invalid email
  if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      $location.path('account/settings')
    }
  }

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
