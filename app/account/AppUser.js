angular.module('app').factory('AppUser', function ($resource, $rootScope) {
  'use strict';

  var UserResource = $resource('/api/users/:id', {_id: '@id'}, {
    update: { method: 'PUT', isArray: false }
  });

  UserResource.prototype.isAdmin = function() {
    return this.roles && this.roles.indexOf('admin') > -1;
  };

  UserResource.prototype.addBuzzr = function(topic) {
    if (this.buzzrs.indexOf(topic) === -1) {
      this.buzzrs.push(topic);
      this.$update();
      $rootScope.$broadcast('buzzrsChanged');
    }
  };

  UserResource.prototype.removeBuzzr = function(topic) {
    var i = this.buzzrs.indexOf(topic);
    if (i > -1) {
      this.buzzrs.splice(i,1);
      this.$update();
      $rootScope.$broadcast('buzzrsChanged');
    }
  };

  return UserResource;
});