angular.module('app').controller('appMainCtrl', function ($scope, $http, $route, $routeParams, appIdentity, appProcessLinks, appHeader, appFeedback) {
  'use strict';

  $scope.countDown = 10;
  $scope.links = [];
  $scope.dates = [];
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = {
    searching: true,
    creating: false,
    feeding: false,
    error: false
  };

  $scope.encode = function(title) {
    return encodeURI(title);
  };

  $scope.showLoading = function() {
    var status = $scope.status;
    if (status.searching || status.error || status.creating) {
      return true;
    }
    return false;
  };

  $scope.toggleHeader = function() {
    appHeader.toggle();
  };

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.triggerSearch = function() {
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
      });
  };

  if (appIdentity.isAuthenticated()) {
    appIdentity.currentUser.addBuzzr($scope.searchText);

    $scope.saveLink = function(link) { appProcessLinks.saveLink(link, $scope.searchText); };
    $scope.removeLink = function(link) { appProcessLinks.removeLink(link, $scope.searchText); };
    $scope.trackView = function(url) {
      appIdentity.currentUser.trackView(url, $scope.searchText);
    };
    $scope.trackShare = function(url) {
      appIdentity.currentUser.trackShare(url, $scope.searchText);
    };
  } else  {
    $scope.saveLink = $scope.toggleHeader;
    $scope.removeLink = $scope.toggleHeader;
  }
  
  $scope.triggerSearch();
});
