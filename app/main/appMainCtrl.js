angular.module('app').controller('appMainCtrl', function ($scope, $http, $routeParams, appIdentity, appProcessLinks, appHeader) {
  
  $scope.links = [];
  $scope.dates = [];
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id);
  $scope.status = {
    searching: true,
    creating: false,
    feeding: false
  };

  $scope.showLoading = function() {
    if ($scope.status.searching) { return true; }
    if ($scope.status.creating && appIdentity.isAuthenticated()) { return true; }
    return false;
  };

  $scope.toggleHeader = function() {
    appHeader.toggle();
  };

  $scope.triggerSearch = function() {
    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;

        if (res.data.err) { 
          return alert('Error ' + res.data.err);
        }
        
        if (!links || links.length === 0) {
          $scope.status.creating = true;
          alert('create new buzzr');
        
        } else {
          appProcessLinks.process(res.data.links);
          $scope.status.feeding = true;
        }

        $scope.status.searching = false;
      });
  };
  
  $scope.triggerSearch();
});
