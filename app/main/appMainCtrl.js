angular.module('app').controller('appMainCtrl', function ($scope, $routeParams, $location, appTimeToUpdate, appIdentity, appProcessLinks, appSidebar, appFeedback, appBuzzr) {
  /*jshint maxstatements: false */
  'use strict';

  $scope.countDown = 60;
  $scope.links = [];
  $scope.dates = [];
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = 'searching';
  $scope.updateStatus = appTimeToUpdate.timeLeft();

  $scope.checkStatus = function(status) { return $scope.status === status; };
  $scope.encode = function(title) { return encodeURI(title); };
  $scope.toggleSidebar = function() { appSidebar.toggle(); };
  $scope.toggleFeedback = function() { appFeedback.toggle(); };
  $scope.triggerSearch = function() { appBuzzr.startFeed($scope); };
  $scope.showUpdate = function() { return $scope.lastUpdated !== (new Date()).toLocaleDateString(); };
  $scope.updateNow = function() { appBuzzr.update($scope); };

  $scope.showLoading = function() {
    if ($scope.checkStatus('searching') || $scope.checkStatus('creating') ||
      $scope.checkStatus('updating')) {
      return true;
    }
    return false;
  };

  $scope.newSearch = function(newSearchTerm) {
    if (!!newSearchTerm) {
      var url = newSearchTerm.toLowerCase().trim();
      $location.path('/' + url);
    }
  };

  if (appIdentity.isAuthenticated()) {
    appIdentity.currentUser.addBuzzr($scope.searchText);
    $scope.saveLink = function(link) { appProcessLinks.saveLink(link, $scope.searchText); };
    $scope.removeLink = function(link) { appProcessLinks.removeLink(link, $scope.searchText); };
    $scope.trackView = function(url) { appIdentity.currentUser.trackView(url, $scope.searchText); };
    $scope.trackShare = function(url) { appIdentity.currentUser.trackShare(url, $scope.searchText); };
    $scope.savedLink = '/account/readlater';
  } else {
    $scope.saveLink = function() { $location.path('/join'); };
    $scope.savedLink = '/join';
  }
  
  $scope.triggerSearch();
});
