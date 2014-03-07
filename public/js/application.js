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
        return appAuth.authorizeLoggedInUserForRoute();
      }
    }
  };

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/',        {templateUrl: '/partials/main/main', controller: 'appMainCtrl',
                        resolve: routeRoleChecks.user})
    .when('/home',    {templateUrl: '/partials/pages/home', controller: 'appPagesCtrl'})
    .when('/login',   {templateUrl: '/partials/account/login', controller: 'appLoginCtrl'})
    .when('/join',    {templateUrl: '/partials/account/join', controller: 'appJoinCtrl'})
    .when('/about',   {templateUrl: '/partials/pages/about', controller: 'appPagesCtrl'})
    .when('/terms',   {templateUrl: '/partials/pages/terms', controller: 'appPagesCtrl'})
    .when('/profile', {templateUrl: '/partials/account/profile', controller: 'appProfileCtrl',
                        resolve: routeRoleChecks.user})
    .when('/:id',     {templateUrl: '/partials/main/main', controller: 'appMainCtrl'});

  $routeProvider
    .when('/admin/users', {templateUrl: '/partials/admin/users', controller: 'appAdminUsersCtrl',
                            resolve: routeRoleChecks.admin});
});


angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/home');
    }
  });
});
;
angular.module('app').factory('appAuth', function ($http, $q, appIdentity, appUser) {
  return {
    authenticateUser: function (email, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {email: email, password: password})
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

    authorizeLoggedInUserForRoute: function () {
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
;angular.module('app').controller('appJoinCtrl', function ($scope, $location, appUser, appAuth, appNotifier) {

  $scope.signup = function () {
    var newUserData = {
      email: $scope.email,
      password: $scope.password
    };

    appAuth.createUser(newUserData).then(function () {
      $location.path('/');
    }, function (reason) {
      appNotifier.error(reason, $scope);
    });
  };
});;angular.module('app').controller('appLoginCtrl', function ($scope, $location, appAuth, appNotifier) {
  
  $scope.signin = function () {
    
    appAuth
      .authenticateUser($scope.email, $scope.password)
      .then(function (success) {
        if (success) {
          $location.path('/');
        } else {
          appNotifier.error('email/password combination incorrect', $scope);
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
});;angular.module('app').factory('appHeader', function ($rootScope) {
  var header = {};

  header.toggle = function () {
    $rootScope.$broadcast('toggleHeader');
  };
  
  return header;
});
;angular.module('app').controller('appHeaderCtrl', function ($scope, $location, $document, appAuth, appNotifier, appIdentity) {
  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.signout = function () {
    appAuth.logoutUser().then(function() {
      appNotifier.notify('You are now logged out!');
      $location.path('/home');
    });
  };

  $scope.toggle = function () {
    $scope.open = !$scope.open;
    $scope.$digest();
    $document.one('click', function () {
      if ($scope.open) {
        $scope.open = false;
        $scope.$digest();
      }
    });
  };

  $scope.$on('toggleHeader', function () {
    $scope.toggle();
  });
});
;angular.module('app').factory('appIsMobile', function () {
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
  };
  
  return isMobile;
});
;angular.module('app').factory('appNotifier', function () {
  return {
    notify: function (msg, scope) {
      scope.notifier = {};
      scope.notifier.notice = msg;
      setTimeout(function () {
        scope.notifier.notice = '';
        scope.$digest();
      }, 4000);
    },
    error: function (msg, scope) {
      scope.notifier = {};
      scope.notifier.error = msg;
      setTimeout(function () {
        scope.notifier.error = '';
        scope.$digest();
      }, 4000);
    }
  };
});
;angular.module('app').controller('appFeedbackCtrl', function ($scope, $location, $window, $http, appIdentity, appNotifier) {
  
  $scope.success = false;
  $scope.show = false;

  $scope.feedback = {};
  $scope.feedback.userAgent = $window.navigator.userAgent;
  
  if (appIdentity.isAuthenticated()) {
    $scope.feedback.name = appIdentity.currentUser.name
    $scope.feedback.email = appIdentity.currentUser.email
  }  

  $scope.send = function () {
    $scope.feedback.currentPath = $location.path();
    
    $http
      .post('/api/feedback', $scope.feedback)
      .then(function (res) {
        if (res.data.success) {
          $scope.success = true;
        } else {
          appNotifier.error(res.data.err || 'unknown error', $scope);
        }
      }, function (res) {
        appNotifier.error('error ' + res.status +
          ' occurred - please email help@buzzr.io', $scope);
      });
  }

  $scope.toggle = function () {
    $scope.show = !$scope.show;
  };
});
;angular.module('app').controller('appMainCtrl', function ($scope, $http, appIdentity) {
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
;angular.module('app').controller('appPagesCtrl', function ($scope, $location, $document, appIsMobile) {
  if (!appIsMobile.any()) {
    $document[0].getElementById("focus").focus();
  }

  $scope.search = function () {
    if (!!$scope.searchTerm) {
      var searchTerm = encodeURI($scope.searchTerm.replace(' ', '-'));
      $location.path(searchTerm);
    }
  };
});
