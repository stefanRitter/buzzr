angular.module('app').controller('appSettingsCtrl', function ($scope, $location, $http, appAuth, appIdentity, appNotifier) {
  'use strict';

  $scope.currentUser = angular.copy(appIdentity.currentUser);
  $scope.email = {
    valid: appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)
  };

  // User came from Twitter Auth
  if (!$scope.email.valid) {
    $scope.currentUser.email = '';
  }

  $scope.update = function() {
    appAuth.updateCurrentUser($scope.currentUser).then(function() {
      if (!$scope.email.valid) { return $location.path('/'); }
      appNotifier.notify('Your account has been updated', $scope);
    }, function(reason) {
      appNotifier.error(reason, $scope);
    });
  };

  $scope.cancelAccount = function() {
    if (window.confirm('Are you sure you want to cancel your subscription with us?')) {
      $scope.message = 'Sad to see you go. You will receive an Email to confirming your cancellation.';
    }
  };
});
