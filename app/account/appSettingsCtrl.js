
angular.module('app').controller('appSettingsCtrl', function ($scope, appAuth, appIdentity, appNotifier) {
  $scope.currentUser = angular.copy(appIdentity.currentUser);

  $scope.update = function () {
    appAuth.updateCurrentUser($scope.currentUser).then(function () {
      appNotifier.notify('Your account has been updated', $scope);
    }, function (reason) {
      appNotifier.error(reason, $scope);
    });
  };
});