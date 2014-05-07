angular.module('app').controller('appAdminAddTweetCtrl', function ($scope, $http) {
  'use strict';
  
  $scope.addTweet = function() {
    var tweet = $scope.tweet;
    $http
      .post('/api/tweet4me/'+tweet.email+'/addTweet', {tweet: tweet})
      .then(function() {
        window.alert('Tweet Added!');
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
      });
  };
});
