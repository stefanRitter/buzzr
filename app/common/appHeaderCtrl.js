angular.module('app').controller('appHeaderCtrl', function ($scope, $location, appAuth, appNotifier, appIdentity) {
  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.signout = function () {
    appAuth.logoutUser().then(function() {
      $scope.username = $scope.password = '';
      appNotifier.notify('You are now logged out!');
      $location.path('/');
    });
  };

  $scope.toggle = function () {
    $scope.open = !$scope.open;
  };
});
