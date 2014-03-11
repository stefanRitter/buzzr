angular.module('app').factory('appProcessLinks', function () {
  var u = {};

  function setLocalDate(link) {
    if(!!link.activated) {
      link.activated = (new Date(link.activated)).toLocaleDateString();
      u[link.activated] = true;
    }
  }

  function getDates() {
    var a = [];
    for (var date in u) {
      if(u.hasOwnProperty(date)) {
        a.push(date);
      }
    }
    return a;
  }

  return {
    process: function($scope, incomingLinks) {
      incomingLinks.forEach(setLocalDate);
      $scope.dates = getDates();
      $scope.links = incomingLinks;
    }
  };
});
