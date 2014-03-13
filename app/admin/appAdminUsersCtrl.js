
angular.module('app').controller('appAdminUsersCtrl', function ($scope, AppUser) {
  $scope.users = AppUser.query();
});