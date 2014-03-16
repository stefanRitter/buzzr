angular.module('app').factory('appLink', function (appIdentity, appHeader) {
  'use strict';

  return {
    saveLink: function(url, title, topic) {
      var newSavedLink = {
        url: url,
        title: title,
        topic: topic,
        activated: Date.now()
      };
      appIdentity.currentUser.saveLink(newSavedLink);
    },
    removeLink: function(link, topic) {
      alert(link);
    }
  };
});
