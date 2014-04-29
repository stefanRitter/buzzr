angular.module('app').controller('appMainCtrl', function ($scope, $routeParams, appIdentity, appProcessLinks, appSidebar, appFeedback, appBuzzr) {
  /*jshint maxstatements: false */
  'use strict';

  $scope.countDown = 18;
  $scope.links = [];
  $scope.dates = [];
  $scope.lang = '';
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = {
    searching: true,
    creating: false,
    feeding: false,
    error: false
  };

  $scope.encode = function(title) { return encodeURI(title); };

  $scope.toggleSidebar = function() { appSidebar.toggle(); };

  $scope.toggleFeedback = function() { appFeedback.toggle(); };

  $scope.getLang = function(lang) { return $scope.lang === lang; };

  $scope.triggerSearch = function() { appBuzzr.startFeed($scope); };

  $scope.showLoading = function() {
    if ($scope.status.searching || $scope.status.creating) { return true; }
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
