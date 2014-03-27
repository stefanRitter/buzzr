angular.module('app').factory('appBuzzr', function ($http, $route, appProcessLinks) {
  'use strict';
  var BuzzrResource = {};

  BuzzrResource.startFeed = function($scope) {
    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;

        if (res.data.err) {
          $scope.errorMessage = res.data.err;
          $scope.status.error = true;
          $scope.status.searching = false;
          return;
        }
        
        if (!links || links.length === 0) {
          $scope.status.creating = true;
          var interv = setInterval(function() {
            $scope.$apply(function() {
              $scope.countDown -= 1;
              if ($scope.countDown <= 0) {
                $scope.countDown = 0;
                $route.reload();
                clearInterval(interv);
              }
            });
          }, 1000);
        
        } else {
          appProcessLinks.process($scope, res.data.links);
          $scope.status.feeding = true;
        }
        $scope.status.searching = false;
      
      }, function() {
        $scope.errorMessage = 'Sorry, something went wrong! Please try again!';
        $scope.status.error = true;
        $scope.status.searching = false;
        return;
      });
  };

  return BuzzrResource;
});
