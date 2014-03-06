angular.module('app').controller('appFeedbackCtrl', function ($scope, appIdentity) {

  //input(type="hidden" value="userAgent" ng-model="userAgent")
  //input(type="hidden" value="currentPath" ng-model="currentPath")

  // if appIdentity
  // name = appIdentity.currentUser.name
  // email = appIdentity.currentUser.email
  $scope.feedback = {};
  $scope.feedback.success = false;
  $scope.feedback.show = false;

  $scope.feedback.send = function () {
    $scope.feedback.success = true;
  }

  $scope.feedback.toggle = function () {
    $scope.feedback.show = !$scope.feedback.show;
  };
});