angular.module('app').controller('appAdminAddTweetCtrl', function ($scope, $http) {
  'use strict';
  $scope.tweet = {};
  $scope.topics = [];
  $scope.t4ms = window.bootstrappedTweet4Mes;
  
  $scope.updateTopics = function() {
    $scope.t4ms.forEach(function(t4m) {
      if (t4m.user === $scope.tweet.email) {
        $scope.topics = t4m.topics;
      }
    });
  };

  $scope.showTopic = function() {
    return !!$scope.tweet.email;
  };

  $scope.showTweetForm = function() {
    return !!$scope.tweet.topic;
  };

  $scope.addTweet = function() {
    var tweet = $scope.tweet;
    $http
      .post('/api/tweet4me/'+tweet.email+'/addTweet', {tweet: tweet})
      .then(function() {
        window.alert('Tweet Added!');
        $scope.tweet.url = '';
        $scope.tweet.text = '';
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
      });
  };
});
