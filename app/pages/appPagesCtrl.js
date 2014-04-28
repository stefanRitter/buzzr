angular.module('app').controller('appPagesCtrl', function ($scope, appFeedback, appIdentity) {
  'use strict';

  var handler = window.StripeCheckout.configure({
    key: 'pk_test_A92gZzXMijuUIYouO3UXkIyB',
    image: '/img/icon.png',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
      window.alert('callback');
      var request = new XMLHttpRequest();
      
      request.onload = function () {
        var status = request.status;
        var data = request.responseText;
        console.log(status, data);
        window.alert('back');
      };

      request.open('POST', '/stripe', false);
      request.send(token);
    }
  });

  $scope.identity = appIdentity;

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
