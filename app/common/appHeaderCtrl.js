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
    $scope.open = true;
    setTimeout(function () {
      $document.one('click', function () {
        $scope.open = false;
        $scope.$apply();
      });
    }, 600);
  };
});
