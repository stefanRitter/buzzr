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
    .when('/',        {templateUrl: '/partials/pages/home',       controller: 'appPagesCtrl'})
    .when('/about',   {templateUrl: '/partials/pages/about',      controller: 'appPagesCtrl'})
    .when('/terms',   {templateUrl: '/partials/pages/terms',      controller: 'appPagesCtrl'})
    .when('/login',   {templateUrl: '/partials/account/login',    controller: 'appLoginCtrl'})
    .when('/join',    {templateUrl: '/partials/account/join',     controller: 'appJoinCtrl'})
    .when('/:id',     {templateUrl: '/partials/main/main', controller: 'appMainCtrl'});
  
  $routeProvider
    .when('/account/settings', {templateUrl: '/partials/account/settings',  controller: 'appSettingsCtrl',
                        resolve: routeRoleChecks.user});

  $routeProvider
    .when('/admin/users', {templateUrl: '/partials/admin/users', controller: 'appAdminUsersCtrl',
                            resolve: routeRoleChecks.admin});
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
angular.module('app').controller('appSettingsCtrl', function ($scope, appAuth, appIdentity, appNotifier) {
  $scope.currentUser = angular.copy(appIdentity.currentUser);

  $scope.update = function () {
    appAuth.updateCurrentUser($scope.currentUser).then(function () {
      appNotifier.notify('Your account has been updated', $scope);
    }, function (reason) {
      appNotifier.error(reason, $scope);
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
});;angular.module('app').factory('appIsMobile', function () {
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
;angular.module('app').factory('appFeedback', function ($rootScope) {
  return {
    toggle: function() {
      $rootScope.$broadcast('toggleFeedback');
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

  $scope.$on('toggleFeedback', function() {
    $scope.toggle();
  });
});
;angular.module('app').factory('appHeader', function ($rootScope) {
  var header = {};

  header.toggle = function() {
    $rootScope.$broadcast('toggleHeader');
  };
  
  return header;
});
;angular.module('app').controller('appHeaderCtrl', function ($scope, $location, $document, appAuth, appNotifier, appIdentity) {
  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/');
    });
  };

  $scope.toggleOpen = function() {
    $scope.open = !$scope.open;
    $document.one('click', function() {
      if ($scope.open) {
        $scope.open = false;
        $scope.$digest();
      }
    });
  }

  $scope.$on('toggleHeader', function() {
    $scope.toggleOpen();
  });
});
;angular.module('app').controller('appMainCtrl', function ($scope, $http, $routeParams, appIdentity, appHeader) {
  
  $scope.links = [];
  $scope.searching = true;
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id);

  $scope.triggerSearch = function() {
    if (!$scope.searchText) return;
    $scope.searching = true;

    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;

        if (res.data.err) { 
          return alert('Error ' + res.data.err);
        }
        
        if (!links || links.length === 0) {
          return alert('create new buzzr');
        }

        $scope.links = res.data.links;
        $scope.searching = false;
      });
  };

  $scope.toggleHeader = function() {
    appHeader.toggle();
  };

  $scope.triggerSearch();
});
;angular.module('app').controller('appPagesCtrl', function ($scope, $location, $document, appIdentity, appIsMobile, appFeedback, appHeader) {
  
  // auto focus on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById("focus");
    if (homeInput !== null) { homeInput.focus(); }
  }

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      var searchText = encodeURI($scope.searchText.trim());
      $location.path('/' + searchText);
    }
  };

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  if (appIdentity.isAuthenticated()) {
    appHeader.toggle();
  }
});
