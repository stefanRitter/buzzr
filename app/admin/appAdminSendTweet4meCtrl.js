angular.module('app').controller('appAdminSendTweet4meCtrl', function ($scope, $http) {
  'use strict';
  $scope.t4ms = window.bootstrappedTweet4Mes;

  $scope.sendEmail = function() {
    $http
      .post('/api/tweet4me/'+$scope.email+'/sendEmail', {})
      .then(function() {
        window.alert('Email sent!');
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
      });
  };
});
