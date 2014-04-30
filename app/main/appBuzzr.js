angular.module('app').factory('appBuzzr', function ($http, $route, appProcessLinks) {
  'use strict';
  var BuzzrResource = {};

  function handleZeroResults($scope) {
    $scope.errorMessage = 'Oh no, Buzzr did not find anything recent on this topic :( Please come back later and try again!';
    $scope.status = 'error';
  }

  function startCountdown($scope) {
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
  }

  function handleError($scope, msg) {
    $scope.errorMessage = msg;
    $scope.links = [];
    $scope.status = 'error';
  }

  BuzzrResource.updateFeed = function($scope) {
    $http
      .get('/api/buzzrs/refresh/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;
        if (res.data.err) {
          handleError($scope, res.data.err);
          return;
        }
        if (res.data.updating) {
          $scope.status = 'updating';
          startCountdown($scope);
          return;
        }
        if (links.length === 0) { return handleZeroResults($scope); }
        appProcessLinks.process($scope, links);
        $scope.status = 'feeding';
      }, function() {
        handleError($scope, 'Sorry, something went wrong! Please try again!');
      });
  };

  BuzzrResource.startFeed = function($scope) {
    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;
        if (res.data.err) {
          handleError($scope, res.data.err);
          return;
        }
        if (!links) {
          $scope.status = 'creating';
          startCountdown($scope);
        } else {
          if (links.length === 0) { return handleZeroResults($scope); }
          appProcessLinks.process($scope, links);
          $scope.status = 'feeding';
        }
      }, function() {
        handleError($scope, 'Sorry, something went wrong! Please try again!');
      });
  };

  return BuzzrResource;
});
