angular.module('app').controller('appJoinCtrl', function ($scope, $location, appAuth, appNotifier) {

  $scope.signup = function () {
    var newUserData = {
      email: $scope.email,
      password: $scope.password
    };

    appAuth.createUser(newUserData).then(function () {
      $location.path('/');
    }, function (reason) {
      appNotifier.error(reason, $scope);
    });
  };
});