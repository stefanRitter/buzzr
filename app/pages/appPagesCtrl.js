angular.module('app').controller('appPagesCtrl', function ($scope, $http, $location, appFeedback, appIdentity) {
  'use strict';
  $scope.identity = appIdentity;

  var stripeToken = {};
  
  var handler = window.StripeCheckout.configure({
    key: 'pk_test_A92gZzXMijuUIYouO3UXkIyB',
    image: '/img/icon.png',
    token: function(token) {
      stripeToken = token;
      console.log(token);

      $http
        .post('/stripe', token)
        .then(function(res) {
          if (res.data.success) {
            appIdentity.currentUser.email = token.email;
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

  $scope.openCheckout = function() {
    handler.open({
      name: 'Buzzr',
      description: 'Lifetime access ($9.00)',
      amount: 900
    });
  };
});
