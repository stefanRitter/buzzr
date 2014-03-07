angular.module('app').controller('appHeaderCtrl', function ($scope, $location, $document, appAuth, appNotifier, appIdentity) {
  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.signout = function () {
    appAuth.logoutUser().then(function() {
      appNotifier.notify('You are now logged out!');
      $location.path('/home');
    });
  };

  $scope.toggle = function () {
    $scope.open = !$scope.open;
    $scope.$digest();
    $document.one('click', function () {
      if ($scope.open) {
        $scope.open = false;
        $scope.$digest();
      }
    });
  };
});
