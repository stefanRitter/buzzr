angular.module('app').factory('appProcessLinks', function (appIdentity) {
  'use strict';

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
    return a.reverse();
  }

  return {
    process: function($scope, incomingLinks) {
      incomingLinks.forEach(setLocalDate);
      $scope.dates = getDates();
      $scope.links = incomingLinks;
    },

    saveLink: function(url, title, topic) {
      var newSavedLink = {
        url: url,
        title: title,
        topic: topic,
        activated: Date.now()
      };
      appIdentity.currentUser.saveLink(newSavedLink);
    },
    
    removeLink: function(url, topic) {
      appIdentity.currentUser.removeLink(url, topic);
    }
  };
});
