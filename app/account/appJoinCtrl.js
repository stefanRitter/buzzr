angular.module('app').controller('appJoinCtrl', function ($scope, $location, appUser, appAuth, appNotifier) {

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