angular.module('app').controller('appPagesCtrl', function ($scope, appFeedback, appIdentity) {

  $scope.identity = appIdentity;

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
