angular.module('app').controller('appMainCtrl', function ($scope, $http, $routeParams, appIdentity, appProcessLinks, appHeader) {
  
  $scope.links = [];
  $scope.dates = [];

  $scope.toggleHeader = function() {
    appHeader.toggle();
  };
 
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id);

  $scope.triggerSearch = function() {
    $scope.searching = true;

    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;

        if (res.data.err) { 
          return alert('Error ' + res.data.err);
        }
        
        if (!links || links.length === 0) {
          return alert('create new buzzr');
        }

        appProcessLinks.process(res.data.links);
        $scope.searching = false;
      });
  };
  
  $scope.triggerSearch();
});
