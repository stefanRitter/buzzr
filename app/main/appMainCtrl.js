angular.module('app').controller('appMainCtrl', function ($scope, $http, appIdentity) {
  $scope.links = [];
  $scope.searching = false;

  $scope.triggerSearch = function () {
    if (!$scope.searchText) return;
    $scope.searching = true;

    $http
      .post('/search', {searchText: $scope.searchText})
      .then(function (res) {
        if (res.data.err) { alert(res.data.err); }
        
        $scope.links = res.data.links;
        $scope.searching = false;
      });
  };
});
