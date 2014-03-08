angular.module('app').factory('appFeedback', function ($rootScope) {
  return {
    toggle: function() {
      $rootScope.$broadcast('toggleFeedback');
    }
  };
});
