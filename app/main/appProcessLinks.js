angular.module('app').factory('appProcessLinks', function (appIdentity) {
  'use strict';

  var uniqDates = {},
      removedLinks = [],
      readlater = [];

  function setLocalDate(link) {
    if(!!link.activated) {
      link.activated = (new Date(link.activated)).toLocaleDateString();
      uniqDates[link.activated] = true;
    }
  }

  function getDates() {
    var a = [];
    for (var date in uniqDates) {
      if(uniqDates.hasOwnProperty(date)) {
        a.push(date);
      }
    }
    return a.reverse();
  }

  function checkRemoved(link) {
    link.removed = false;
    if (removedLinks.indexOf(link) > -1) {
      link.removed = true;
    }
  }

  function checkSaved(link) {
    link.saved = false;
    if (readlater.indexOf(link) > -1) {
      link.saved = true;
    }
  }

  function processLink(link) {
    setLocalDate(link);
    checkSaved(link);
    checkRemoved(link);
  }

  return {
    process: function($scope, incomingLinks) {
      if (appIdentity.isAuthenticated()) {
        readlater = appIdentity.currentUser.readlater;
        appIdentity.currentUser.activities.forEach(function(obj, i) {
          if (obj.topic === $scope.searchText) {
            removedLinks = obj.removed;
          }
        });
      }
      
      incomingLinks.forEach(processLink);
      
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
