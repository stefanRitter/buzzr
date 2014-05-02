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

  function setDomain(link) {
    link.domain = link.url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase().replace('www.', '');
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
    if (removedLinks.indexOf(link.url) > -1) {
      link.removed = true;
    }
  }

  function checkSaved(link) {
    link.saved = false;
    if (readlater.indexOf(link.url) > -1) {
      link.saved = true;
    }
  }

  function processLink(link) {
    setLocalDate(link);
    setDomain(link);
    checkSaved(link);
    checkRemoved(link);
  }

  return {
    process: function($scope, incomingLinks) {
      if (appIdentity.isAuthenticated()) {
        appIdentity.currentUser.readlater.forEach(function(obj) {
          readlater.push(obj.url);
        });
        appIdentity.currentUser.activities.forEach(function(obj) {
          if (obj.topic === $scope.searchText) {
            removedLinks = obj.removed;
          }
        });
      }

      incomingLinks.splice(5,1);

      incomingLinks.forEach(processLink);
      
      $scope.dates = getDates();
      $scope.links = incomingLinks;
    },

    saveLink: function(link, topic) {
      var newSavedLink = {
        url: link.url,
        title: link.title,
        topic: topic,
        activated: Date.now()
      };
      link.saved = appIdentity.currentUser.saveLink(newSavedLink);
    },
    
    removeLink: function(link, topic) {
      appIdentity.currentUser.removeLink(link.url, topic);
      link.removed = true;
    }
  };
});
