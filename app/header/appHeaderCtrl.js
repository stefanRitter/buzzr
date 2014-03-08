angular.module('app').controller('appHeaderCtrl', function ($scope, $location, $document, appAuth, appNotifier, appIdentity) {
  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/home');
    });
  };

  $scope.toggleOpen = function() {
    $scope.open = !$scope.open;
    $document.one('click', function() {
      if ($scope.open) {
        $scope.open = false;
        $scope.$digest();
      }
    });
  }

  $scope.$on('toggleHeader', function() {
    $scope.toggleOpen();
  });
});
