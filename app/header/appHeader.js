angular.module('app').factory('appHeader', function ($rootScope) {
  var header = {};

  header.toggle = function() {
    $rootScope.$broadcast('toggleHeader');
  };
  
  return header;
});
