angular.module('app').controller('appPagesCtrl', function ($scope, $http, $location, appFeedback, appIdentity) {
  'use strict';
  $scope.identity = appIdentity;

  var stripeToken = {};
  
  var handler = window.StripeCheckout.configure({
    key: 'pk_live_xGJ0UWxpKbFmhRVaXUcMDuIG',
    image: '/img/icon.png',
    token: function(token) {
      stripeToken = token;

      $http
        .post('/stripe', token)
        .then(function(res) {
          if (res.data.success) {
            appIdentity.email = token.email;
            $location.path('/join');
          } else {
            // card declined
            window.alert(res.data.reason);
          }
        }, function() {
          window.alert('There was a server error, your card was NOT charged! Please contact us for help!');
        });
    }
  });

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.toggleVideo = function() {
    $scope.showVideo = !$scope.showVideo;
  };

  $scope.openCheckout = function() {
    handler.open({
      name: 'Buzzr',
      description: '14-day free trial, $9.00 monthly',
      amount: 0
    });
  };
});
