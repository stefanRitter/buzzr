angular.module('app').controller('appLoginCtrl', function ($scope, $location, appAuth, appNotifier) {
  
  $scope.signin = function (username, password) {
    
    appAuth
      .authenticateUser(username, password)
      .then(function (success) {
        if (success) {
          appNotifier.notify('You have successfully logged in!');
          $location.path('/');
        } else {
          appNotifier.error('username/password combination incorrect');
        }
      });
  };
});
