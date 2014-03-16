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
    .when('/',        {templateUrl: '/partials/pages/home',     controller: 'appHomeCtrl'})
    .when('/about',   {templateUrl: '/partials/pages/about',    controller: 'appPagesCtrl'})
    .when('/terms',   {templateUrl: '/partials/pages/terms',    controller: 'appPagesCtrl'})
    .when('/login',   {templateUrl: '/partials/account/login',  controller: 'appLoginCtrl'})
    .when('/join',    {templateUrl: '/partials/account/join',   controller: 'appJoinCtrl'})
    .when('/:id',     {templateUrl: '/partials/main/main',      controller: 'appMainCtrl'});
  
  $routeProvider
    .when('/account/readlater', {templateUrl: '/partials/readlater/readlater',  controller: 'appReadlaterCtrl',
                        resolve: routeRoleChecks.user})
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
;angular.module('app').factory('AppUser', function ($resource, $rootScope) {
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

  UserResource.prototype.saveLink = function(newSavedLink) {
    this.recordActivity('saved', newSavedLink.url, newSavedLink.topic);
    this.readlater.push(newSavedLink);
    this.$update();
    $rootScope.$broadcast('readlaterChanged');
  };

  UserResource.prototype.removeSavedLink = function(url) {
    var index = -1;
    this.readlater.forEach(function(link, i) {
      if (link.url === url) {
        index = i;
      }
    });

    if (index > -1) {
      this.readlater.splice(index,1);
      this.$update();
      $rootScope.$broadcast('readlaterChanged');
    }
  };

  UserResource.prototype.removeLink = function(url, topic) {
    this.recordActivity('removed', url, topic);
    this.$update();
    $rootScope.$broadcast('removedLink');
  };

  UserResource.prototype.trackView = function(url, topic) {
    this.recordActivity('viewed', url, topic);
    this.$update();
  };

  UserResource.prototype.trackShare = function(url, topic) {
    this.recordActivity('shared', url, topic);
    this.$update();
  };

  UserResource.prototype.recordActivity = function(type, url, topic) {
    var index = -1;
    this.activities.forEach(function(obj, i) {
      if (obj.topic === topic) {
        index = i;
      }
    });
    
    if (index === -1) {
      this.activities.push({
        topic: topic,
        removed: [],
        viewed: [],
        saved: [],
        shared:[]
      });
      index = 0;
    }
    this.activities[index][type].push(url);
  };



  return UserResource;
});;
angular.module('app').factory('appAuth', function ($http, $q, appIdentity, AppUser) {
  return {
    authenticateUser: function (email, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {email: email, password: password})
        .then(function (res) {
          if (res.data.success) {
            var user = new AppUser();
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
      var newUser = new AppUser(newUserData);
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
});;angular.module('app').factory('appIdentity', function ($window, AppUser) {
  var currentUser;
  
  if (!!$window.bootstrappedUser) {
    currentUser = new AppUser();
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
;angular.module('app').controller('appJoinCtrl', function ($scope, $location, appAuth, appNotifier) {

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
angular.module('app').controller('appSettingsCtrl', function ($scope, $location, appAuth, appIdentity, appNotifier) {
  
  $scope.currentUser = angular.copy(appIdentity.currentUser);
  $scope.email = {
    valid: appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)
  };

  // User came from Twitter Auth
  if (!$scope.email.valid) {
    $scope.currentUser.email = '';
  }

  $scope.update = function () {
    appAuth.updateCurrentUser($scope.currentUser).then(function () {
      if (!$scope.email.valid) { return $location.path('/'); }
      appNotifier.notify('Your account has been updated', $scope);
    }, function (reason) {
      appNotifier.error(reason, $scope);
    });
  };
});
;
angular.module('app').controller('appAdminUsersCtrl', function ($scope, AppUser) {
  $scope.users = AppUser.query();
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
;angular.module('app').factory('appTopics', function ($window, AppUser) {
  'use strict';

  var topics = [];
  
  if (!!$window.bootstrappedTopics) {
    topics = $window.bootstrappedUser;
  }

  return topics;
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
  'use strict';

  $scope.open = false;
  $scope.identity = appIdentity;

  $scope.setBuzzrs = function() {
    if (appIdentity.isAuthenticated()) {
      $scope.buzzrs = appIdentity.currentUser.buzzrs;
    }
  }

  $scope.encode = function(topic) {
    return encodeURI(topic);
  }

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/');
    });
  };

  $scope.removeBuzzr = function(topic) {
    appIdentity.currentUser.removeBuzzr(topic);
  };

  $scope.toggleOpen = function() {
    $scope.open = !$scope.open;
    $document.one('click', close);
    $document.one('touch', close);

    function close() {
      if ($scope.open) {
        $scope.open = false;
        $scope.$digest();
      }
    }
  };

  $scope.$on('toggleHeader', function() {
    $scope.setBuzzrs();
    $scope.toggleOpen();
  });

  $scope.$on('buzzrsChanged', function() {
    $scope.setBuzzrs();
  });

  $scope.setBuzzrs();
});
;angular.module('app').controller('appMainCtrl', function ($scope, $http, $routeParams, appIdentity, appProcessLinks, appHeader, appFeedback) {
  'use strict';

  $scope.links = [];
  $scope.dates = [];
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = {
    searching: true,
    creating: false,
    feeding: false,
    error: false
  };

  $scope.encode = function(title) {
    return encodeURI(title);
  }

  $scope.showLoading = function() {
    var status = $scope.status;
    if (status.searching || status.error) { return true; }
    if (status.creating && appIdentity.isAuthenticated()) { return true; }
    return false;
  };

  $scope.toggleHeader = function() {
    appHeader.toggle();
  };

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.triggerSearch = function() {
    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;

        if (res.data.err) {
          $scope.errorMessage = res.data.err;
          $scope.status.error = true;
          return $scope.status.searching = false;
        }
        
        if (!links || links.length === 0) {
          $scope.status.creating = true;
        
        } else {
          appProcessLinks.process($scope, res.data.links);
          $scope.status.feeding = true;
        }

        $scope.status.searching = false;
      });
  };

  if (appIdentity.isAuthenticated()) {
    appIdentity.currentUser.addBuzzr($scope.searchText);

    $scope.saveLink = function(link) { appProcessLinks.saveLink(link, $scope.searchText); };
    $scope.removeLink = function(link) { appProcessLinks.removeLink(link, $scope.searchText); };
    $scope.trackView = function(url) {
      appIdentity.currentUser.trackView(url, $scope.searchText);
    };
    $scope.trackShare = function(url) {
      appIdentity.currentUser.trackShare(url, $scope.searchText);
    };
  } else  {
    $scope.saveLink = $scope.toggleHeader;
    $scope.removeLink = $scope.toggleHeader;
  }
  
  $scope.triggerSearch();
});
;angular.module('app').factory('appProcessLinks', function (appIdentity) {
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
      appIdentity.currentUser.saveLink(newSavedLink);
      link.saved = true;
    },
    
    removeLink: function(link, topic) {
      appIdentity.currentUser.removeLink(link.url, topic);
      link.removed = true;
    }
  };
});
;angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIsMobile, appIdentity, appHeader, appTopics) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      $location.path('/' + $scope.searchText.trim());
    }
  };

  // redirect if invalid email
  if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      $location.path('account/settings')
    }
  }

  // auto focus input on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById("focus");
    homeInput.focus();
  }

  // open header for returning users
  if (appIdentity.isAuthenticated()) {
    appHeader.toggle();
  }
});
;angular.module('app').controller('appPagesCtrl', function ($scope, appFeedback, appIdentity) {

  $scope.identity = appIdentity;

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
;angular.module('app').controller('appReadlaterCtrl', function ($scope, appFeedback, appHeader, appIdentity) {
  'use strict';

  $scope.readlater = appIdentity.currentUser.readlater || [];
  $scope.empty = function() {
    return $scope.readlater.length === 0;
  };

  $scope.toggleFeedback = function() { appFeedback.toggle(); };
  $scope.toggleHeader = function() { appHeader.toggle(); };

  $scope.removeLink = function(url) {
    appIdentity.currentUser.removeSavedLink(url);
  };

  $scope.$on('readlaterChanged', function() {
    $scope.readlater = appIdentity.currentUser.readlater;
  });
});
