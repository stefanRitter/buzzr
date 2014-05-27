angular.module('app').controller('appMainCtrl', function ($scope, $routeParams, $location, appIdentity, appProcessLinks, appSidebar, appFeedback, appBuzzr) {
  /*jshint maxstatements: false */
  'use strict';

  $scope.countDown = 18;
  $scope.links = [];
  $scope.dates = [];
  $scope.lang = '';
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = 'searching';

  $scope.checkStatus = function(status) {
    return $scope.status === status;
  };

  $scope.encode = function(title) { return encodeURI(title); };
  $scope.newSearch = function(newSearchTerm) {
    if (!!newSearchTerm) {
      var url = newSearchTerm.toLowerCase().trim();
      $location.path('/' + url);
    }
  };

  $scope.toggleSidebar = function() { appSidebar.toggle(); };
  $scope.toggleFeedback = function() { appFeedback.toggle(); };

  $scope.getLang = function(lang) { return $scope.lang === lang; };

  $scope.triggerSearch = function() { appBuzzr.startFeed($scope); };

  $scope.showLoading = function() {
    if ($scope.checkStatus('searching') || $scope.checkStatus('creating') || $scope.checkStatus('updating')) { return true; }
    return false;
  };

  if (appIdentity.isAuthenticated()) {
    appIdentity.currentUser.addBuzzr($scope.searchText);
    $scope.saveLink = function(link) { appProcessLinks.saveLink(link, $scope.searchText); };
    $scope.removeLink = function(link) { appProcessLinks.removeLink(link, $scope.searchText); };
    $scope.trackView = function(url) { appIdentity.currentUser.trackView(url, $scope.searchText); };
    $scope.trackShare = function(url) { appIdentity.currentUser.trackShare(url, $scope.searchText); };
  }
  
  $scope.triggerSearch();
});
