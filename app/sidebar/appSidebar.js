angular.module('app').factory('appSidebar', function ($rootScope) {
  'use strict';

  var header = {};

  header.toggle = function() {
    $rootScope.$emit('toggleSidebar');
  };
  
  return header;
});
