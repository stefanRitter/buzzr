angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {
      auth: function (appAuth) {
        return appAuth.authorizeCurrentUserForRoute('admin');
      }
    },
    user: {
      auth: function (appAuth) {
        return appAuth.authorizeLeggedInUserForRoute();
      }
    }
  };

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {templateUrl: '/partials/main/main', controller: 'appMainCtrl'})
    .when('/about', {templateUrl: '/partials/main/about', controller: 'appMainCtrl'})
    .when('/signup', {templateUrl: '/partials/account/signup', controller: 'appSignupCtrl'})
    .when('/login', {templateUrl: '/partials/account/login', controller: 'appLoginCtrl'})
    .when('/profile', {templateUrl: '/partials/account/profile',
      controller: 'appProfileCtrl', resolve: routeRoleChecks.user})
    
    .when('/admin/users', {templateUrl: '/partials/admin/users',
      controller: 'appAdminUsersCtrl', resolve: routeRoleChecks.admin})
    
    .when('/:id', {templateUrl: '/partials/main/main', controller: 'appMainCtrl'});
});


angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/');
    }
  });
});
;
angular.module('app').factory('appAuth', function ($http, $q, appIdentity, appUser) {
  return {
    authenticateUser: function (username, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {username: username, password: password})
        .then(function (res) {
          if (res.data.success) {
            var user = new appUser();
            angular.extend(user, res.data.user);
            appIdentity.currentUser = user;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });

      return dfd.promise;
    },

    createUser: function (newUserData) {
      var newUser = new appUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function () {
        appIdentity.currentUser = newUser;
        dfd.resolve(true);
      }, function (response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    updateCurrentUser: function (updatedUser) {
      var dfd = $q.defer();

      updatedUser.$update().then(function () {
        appIdentity.currentUser = updatedUser;
        dfd.resolve(true);
      }, function (response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    logoutUser: function () {
      var dfd = $q.defer();

      $http
        .post('/logout', {logout: true})
        .then(function (res) {
          appIdentity.currentUser = undefined;
          dfd.resolve(true);
        });

      return dfd.promise;
    },

    authorizeCurrentUserForRoute: function (role) {
      if (appIdentity.isAuthorized('admin')) {
        return true;
      }
      return $q.reject('not authorized');
    },

    authorizeLeggedInUserForRoute: function () {
      if (appIdentity.isAuthenticated()) {
        return true;
      }
      return $q.reject('not authorized');
    }
  };
});;angular.module('app').factory('appIdentity', function ($window, appUser) {
  var currentUser;
  
  if (!!$window.bootstrappedUser) {
    currentUser = new appUser();
    angular.extend(currentUser, $window.bootstrappedUser);
  }

  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    },
    isAuthorized: function (role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  };
});
;angular.module('app').controller('appLoginCtrl', function ($scope, $location, appAuth, appNotifier) {
  
  $scope.signin = function (username, password) {
    
    appAuth
      .authenticateUser(username, password)
      .then(function (success) {
        if (success) {
          appNotifier.notify('You have successfully logged in!');
          $location.path('/');
        } else {
          appNotifier.error('username/password combination incorrect');
        }
      });
  };
});
;
angular.module('app').controller('appProfileCtrl', function ($scope, appAuth, appIdentity, appNotifier) {
  $scope.currentUser = angular.copy(appIdentity.currentUser);

  $scope.update = function () {
    appAuth.updateCurrentUser($scope.currentUser).then(function () {
      appNotifier.notify('Your account has been updated');
    }, function (reason) {
      appNotifier.error(reason);
    });
  };
});;angular.module('app').controller('appSignupCtrl', function ($scope, $location, appUser, appAuth, appNotifier) {

  $scope.signup = function () {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    appAuth.createUser(newUserData).then(function () {
      appNotifier.notify('User account created');
      $location.path('/');
    }, function (reason) {
      appNotifier.error(reason);
    });
  };
});;angular.module('app').factory('appUser', function ($resource) {
  var UserResource = $resource('/api/users/:id', {_id: '@id'}, {
    update: { method: 'PUT', isArray: false }
  });

  UserResource.prototype.isAdmin = function () {
    return this.roles && this.roles.indexOf('admin') > -1;
  };

  return UserResource;
});;
angular.module('app').controller('appAdminUsersCtrl', function ($scope, appUser) {
  $scope.users = appUser.query();
});;angular.module('app').controller('appHeaderCtrl', function ($scope, $location, appAuth, appNotifier, appIdentity) {
  
  $scope.identity = appIdentity;

  $scope.signout = function () {
    appAuth.logoutUser().then(function() {
      $scope.username = $scope.password = '';
      appNotifier.notify('You are now logged out!');
      $location.path('/');
    });
  };
});
;angular.module('app').value('appToastr', {
  success: function () {},
  error: function() {}
});

angular.module('app').factory('appNotifier', function (appToastr) {
  return {
    notify: function (msg) {
      appToastr.success(msg);
      console.log(msg);
    },
    error: function (msg) {
      appToastr.error(msg);
      console.log(msg);
    }
  };
});
;angular.module('app').controller('appMainCtrl', function ($scope, $http) {

  $scope.links = [];
  $scope.searching = false;

  $scope.triggerSearch = function () {
    if (!$scope.searchText) return;
    $scope.searching = true;

    $http
      .post('/search', {searchText: $scope.searchText})
      .then(function (res) {
        if (res.data.err) { alert(res.data.err); }
        
        $scope.links = res.data.links;
        $scope.searching = false;
      });
  };
});
