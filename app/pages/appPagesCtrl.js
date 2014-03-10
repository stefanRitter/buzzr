angular.module('app').controller('appPagesCtrl', function ($scope, appFeedback) {

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
