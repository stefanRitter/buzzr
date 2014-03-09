angular.module('app').controller('appMainCtrl', function ($scope, $http, $routeParams, appIdentity, appHeader) {
  
  $scope.links = [];
  $scope.searching = false;
  $scope.identity = appIdentity;

  $scope.triggerSearch = function() {
    if (!$scope.searchText) return;
    $scope.searching = true;

    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;

        if (res.data.err) { 
          return alert('Error ' + res.data.err);
        }
        
        if (!links || links.length === 0) {
          return alert('empty');
        }

        $scope.links = res.data.links;
        $scope.searching = false;
      });
  };

  $scope.toggleHeader = function() {
    appHeader.toggle();
  };

  if (!!$routeParams.id) {
    $scope.searchText = decodeURI($routeParams.id);
    $scope.triggerSearch();
  } else {
    $scope.toggleHeader();
  }
});
