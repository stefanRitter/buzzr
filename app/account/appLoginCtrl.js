angular.module('app').controller('appLoginCtrl', function ($scope, $location, appAuth, appNotifier) {
  
  $scope.signin = function () {
    
    appAuth
      .authenticateUser($scope.email, $scope.password)
      .then(function (success) {
        if (success) {
          appNotifier.notify('You have successfully logged in!');
          $location.path('/');
        } else {
          appNotifier.error('email/password combination incorrect');
        }
      });
  };
});
