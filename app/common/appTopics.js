angular.module('app').factory('appTopics', function ($window, AppUser) {
  'use strict';

  var topics = [];
  
  if (!!$window.bootstrappedTopics) {
    topics = $window.bootstrappedUser;
  }

  return topics;
});
