'use strict';

describe('appUser', function () {
  beforeEach(module('app'));

  describe('isAdmin', function () {
    it('should return false if the roles array does not have an admin entry', inject(function (AppUser) {
      var user = new AppUser();
      user.roles = ['not admin'];
      expect(user.isAdmin()).to.be.falsey;
    }));

    it('should return true if the has an admin role', inject(function (AppUser) {
      var user = new AppUser();
      user.roles = ['admin'];
      expect(user.isAdmin()).to.be.true;
    }));
  });
});