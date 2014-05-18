angular.module('app').controller('appTweet4meUpgradeCtrl', function ($scope, $http) {
  'use strict';
  var stripeToken = {};
  var planAmounts = {
      'startup': 10*100,
      'business': 49*100,
      'enterprise': 99*100
    };


  $scope.plan = '';
  
  var handler = window.StripeCheckout.configure({
    key: 'pk_live_xGJ0UWxpKbFmhRVaXUcMDuIG',
    image: '/img/icon.png',
    token: function(token) {
      stripeToken = token;

      $http
        .post('/stripe', {token: token, plan: $scope.plan})
        .then(function(res) {
          if (res.data.success) {
            
          } else {
            // card declined
            window.alert(res.data.reason);
          }
        }, function() {
          window.alert('There was a server error, your card was NOT charged! Please contact us for help!');
        });
    }
  });

  $scope.openCheckout = function(plan) {
    $scope.plan = plan;
    handler.open({
      name: 'Buzzr',
      description: 'Upgrade: ' + plan,
      amount: planAmounts[plan]
    });
  };
});
