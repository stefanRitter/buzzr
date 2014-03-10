
angular.module('app').controller('appSettingsCtrl', function ($scope, $location, appAuth, appIdentity, appNotifier) {
  
  $scope.currentUser = angular.copy(appIdentity.currentUser);
  $scope.email = {
    valid: appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)
  };

  if (!$scope.email.valid) {
    $scope.currentUser.email = '';
  }

  $scope.update = function () {
    appAuth.updateCurrentUser($scope.currentUser).then(function () {
      appNotifier.notify('Your account has been updated', $scope);
      setTimeout(function() {
        $location.path('/');
      }, 1000);
    }, function (reason) {
      appNotifier.error(reason, $scope);
    });
  };
});
