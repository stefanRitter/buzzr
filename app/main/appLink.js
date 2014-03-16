angular.module('app').factory('appLink', function (appIdentity, appHeader) {
  'use strict';

  return {
    saveLink: function(link, topic) {
      alert(link);
    },
    removeLink: function(link, topic) {
      alert(link);
    }
  };
});
