angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  'use strict';

  var routeRoleChecks = {
    admin: {
      auth: ['appAuth', function (appAuth) {
        return appAuth.authorizeCurrentUserForRoute('admin');
      }]
    }
  };

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/admin/users', {templateUrl: '/partials/admin/users',
      controller: 'appAdminUsersCtrl', resolve: routeRoleChecks.admin})
    .when('/admin/errors', {templateUrl: '/partials/admin/errors',
      controller: 'appAdminErrorsCtrl', resolve: routeRoleChecks.admin})
    .when('/admin/buzzrs', {templateUrl: '/partials/admin/buzzrs',
      controller: 'appAdminBuzzrsCtrl', resolve: routeRoleChecks.admin});

  $routeProvider
    .when('/admin/sendTweet4me', {templateUrl: '/partials/admin/sendTweet4me',
      controller: 'appAdminSendTweet4meCtrl', resolve: routeRoleChecks.admin})
    .when('/admin/addTweet', {templateUrl: '/partials/admin/addTweet',
      controller: 'appAdminAddTweetCtrl', resolve: routeRoleChecks.admin});
});

angular.module('app').run(function ($rootScope, $location) {
  'use strict';

  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/');
    }
  });
});
angular.module('app').factory('AppUser', function ($resource, $rootScope) {
  'use strict';

  var UserResource = $resource('/api/users/:id', {_id: '@id'}, {
    update: { method: 'PUT', isArray: false }
  });

  UserResource.prototype.isAdmin = function() {
    return this.roles && this.roles.indexOf('admin') > -1;
  };

  UserResource.prototype.addBuzzr = function(topic) {
    if (!!this.buzzrs && this.buzzrs.indexOf(topic) === -1) {
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

  UserResource.prototype.indexOfSavedLink = function(url) {
    var index = -1;
    this.readlater.forEach(function(l, i) {
      if (l.url === url) {
        index = i;
      }
    });
    return index;
  };
  
  UserResource.prototype.saveLink = function(newSavedLink) {
    if (this.indexOfSavedLink(newSavedLink.url) > -1) {
      this.removeSavedLink(newSavedLink.url);
      return false;
    }
    this.recordActivity('saved', newSavedLink.url, newSavedLink.topic);
    this.readlater.push(newSavedLink);
    this.$update();
    $rootScope.$broadcast('readlaterChanged');
    return true;
  };

  UserResource.prototype.removeSavedLink = function(url) {
    var index = this.indexOfSavedLink(url);

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
});
angular.module('app').factory('appAuth', function ($http, $q, appIdentity, AppUser) {
  'use strict';

  return {
    authenticateUser: function(email, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {email: email, password: password})
        .then(function(res) {
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

    createUser: function(newUserData) {
      var newUser = new AppUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        appIdentity.currentUser = newUser;
        dfd.resolve(true);
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    updateCurrentUser: function(updatedUser) {
      var dfd = $q.defer();

      updatedUser.$update().then(function() {
        appIdentity.currentUser = updatedUser;
        dfd.resolve(true);
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    logoutUser: function() {
      var dfd = $q.defer();

      $http
        .post('/logout', {logout: true})
        .then(function() {
          appIdentity.currentUser = undefined;
          dfd.resolve(true);
        });

      return dfd.promise;
    },

    authorizeCurrentUserForRoute: function() {
      if (appIdentity.isAuthorized('admin')) {
        return true;
      }
      return $q.reject('not authorized');
    },

    authorizeLoggedInUserForRoute: function() {
      if (appIdentity.isAuthenticated()) {
        return true;
      }
      return $q.reject('not authorized');
    }
  };
});angular.module('app').factory('appIdentity', function ($window, AppUser) {
  'use strict';

  var currentUser;
  
  if (!!$window.bootstrappedUser) {
    currentUser = new AppUser();
    angular.extend(currentUser, $window.bootstrappedUser);
  }

  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  };
});
angular.module('app').controller('appJoinCtrl', function ($scope, $location, appIdentity, appAuth, appNotifier) {
  'use strict';

  $scope.signup = function() {
    var newUserData = {
      email: $scope.email,
      password: $scope.password
    };

    appAuth.createUser(newUserData).then(function() {
      $location.path('/search');
    }, function(reason) {
      appNotifier.error(reason, $scope);
    });
  };
});
angular.module('app').controller('appLoginCtrl', function ($scope, $location, appAuth, appNotifier) {
  'use strict';

  $scope.signin = function() {
    
    appAuth
      .authenticateUser($scope.email, $scope.password)
      .then(function(success) {
        if (success) {
          $location.path('/search');
        } else {
          appNotifier.error('email/password combination incorrect', $scope);
        }
      });
  };
});
angular.module('app').controller('appSettingsCtrl', function ($scope, $location, $http, appAuth, appIdentity, appNotifier) {
  'use strict';

  $scope.currentUser = angular.copy(appIdentity.currentUser);
  $scope.email = {
    valid: appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)
  };

  // User came from Twitter Auth
  if (!$scope.email.valid) {
    $scope.currentUser.email = '';
  }

  $scope.update = function() {
    appAuth.updateCurrentUser($scope.currentUser).then(function() {
      if (!$scope.email.valid) { return $location.path('/search'); }
      appNotifier.notify('Your account has been updated', $scope);
    }, function(reason) {
      appNotifier.error(reason, $scope);
    });
  };
});
angular.module('app').controller('appAdminAddTweetCtrl', function ($scope, $http) {
  'use strict';
  $scope.tweet = {};
  $scope.topics = [];
  $scope.t4ms = window.bootstrappedTweet4Mes;
  
  $scope.updateTopics = function() {
    $scope.t4ms.forEach(function(t4m) {
      if (t4m.user === $scope.tweet.email) {
        $scope.topics = t4m.topics;
      }
    });
  };

  $scope.showTopic = function() {
    return !!$scope.tweet.email;
  };

  $scope.showTweetForm = function() {
    return !!$scope.tweet.topic;
  };

  $scope.addTweet = function() {
    var tweet = $scope.tweet;
    $http
      .post('/api/tweet4me/'+tweet.email+'/addTweet', {tweet: tweet})
      .then(function() {
        window.alert('Tweet Added!');
        $scope.tweet.url = '';
        $scope.tweet.text = '';
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
      });
  };
});
angular.module('app').controller('appAdminBuzzrsCtrl', function ($scope, $http, $window) {
  'use strict';
  
  $scope.buzzrs = [];

  $http
    .get('/api/buzzrs')
    .then(function(res) {
      if (res.data.buzzrs) {
        $scope.buzzrs = res.data.buzzrs;
      } else {
        $window.alert('$http error');
      }
    });
});
angular.module('app').controller('appAdminErrorsCtrl', function ($scope, $http, $window) {
  'use strict';
  
  $scope.socketErrors = [];
  $scope.titleErrors = [];

  $http
    .get('/api/errors')
    .then(function(res) {
      if (!!res.data.titleErrors) {
        $scope.socketErrors = res.data.socketErrors;
        $scope.titleErrors = res.data.titleErrors;
      } else {
        $window.alert('$http error');
      }
    });
});
angular.module('app').controller('appAdminSendTweet4meCtrl', function ($scope, $http) {
  'use strict';
  $scope.t4ms = window.bootstrappedTweet4Mes;

  $scope.sendEmail = function() {
    $http
      .post('/api/tweet4me/'+$scope.email+'/sendEmail', {})
      .then(function() {
        window.alert('Email sent!');
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
      });
  };
});
angular.module('app').controller('appAdminUsersCtrl', function ($scope, AppUser) {
  'use strict';
  
  $scope.users = AppUser.query();
});angular.module('app').controller('appBufferCtrl', function ($scope, appFeedback) {
  'use strict';

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
angular.module('app').controller('appBufferSettingsCtrl', function ($scope, $http, $location, appIdentity) {
  'use strict';

  if (!appIdentity.isAuthenticated()) {
    $location.path('/buffer/pricing');
  }

  $scope.signup = function() {
    if (!$scope.email || !$scope.topic) {
      $scope.success = false;
      $scope.error = 'Make sure you filled out both email and topic';
      return;
    }

    $scope.processing = true;
    $http
      .post('/buffer', {email: $scope.email, topic: $scope.topic, plan: appIdentity.currentUser.email})
      .then(function(res) {
        if (res.data.success) {
          $scope.success = true;
          $scope.error = false;
        } else {
          $scope.success = false;
          $scope.error = res.data.error;
          $scope.processing = false;
        }
      });
  };
});
  /*
   * angular-loading-bar
   *
   * intercepts XHR requests and creates a loading bar.
   * Based on the excellent nprogress work by rstacruz (more info in readme)
   *
   * (c) 2013 Wes Cruver
   * License: MIT
   */


(function() {

  'use strict';

  // Alias the loading bar so it can be included using a simpler
  // (and maybe more professional) module name:
  angular.module('angular-loading-bar', ['chieffancypants.loadingBar']);


  /**
   * loadingBarInterceptor service
   *
   * Registers itself as an Angular interceptor and listens for XHR requests.
   */
  angular.module('chieffancypants.loadingBar', [])
    .config(['$httpProvider', function ($httpProvider) {

      var interceptor = ['$q', '$cacheFactory', '$timeout', '$rootScope', 'cfpLoadingBar', function ($q, $cacheFactory, $timeout, $rootScope, cfpLoadingBar) {

        /**
         * The total number of requests made
         */
        var reqsTotal = 0;

        /**
         * The number of requests completed (either successfully or not)
         */
        var reqsCompleted = 0;

        /**
         * The amount of time spent fetching before showing the loading bar
         */
        var latencyThreshold = cfpLoadingBar.latencyThreshold;

        /**
         * $timeout handle for latencyThreshold
         */
        var startTimeout;


        /**
         * calls cfpLoadingBar.complete() which removes the
         * loading bar from the DOM.
         */
        function setComplete() {
          $timeout.cancel(startTimeout);
          cfpLoadingBar.complete();
          reqsCompleted = 0;
          reqsTotal = 0;
        }

        /**
         * Determine if the response has already been cached
         * @param  {Object}  config the config option from the request
         * @return {Boolean} retrns true if cached, otherwise false
         */
        function isCached(config) {
          var cache;
          var defaults = $httpProvider.defaults;

          if (config.method !== 'GET' || config.cache === false) {
            config.cached = false;
            return false;
          }

          if (config.cache === true && defaults.cache === undefined) {
            cache = $cacheFactory.get('$http');
          } else if (defaults.cache !== undefined) {
            cache = defaults.cache;
          } else {
            cache = config.cache;
          }

          var cached = cache !== undefined ?
            cache.get(config.url) !== undefined : false;

          if (config.cached !== undefined && cached !== config.cached) {
            return config.cached;
          }
          config.cached = cached;
          return cached;
        }


        return {
          'request': function(config) {
            // Check to make sure this request hasn't already been cached and that
            // the requester didn't explicitly ask us to ignore this request:
            if (!config.ignoreLoadingBar && !isCached(config)) {
              $rootScope.$broadcast('cfpLoadingBar:loading', {url: config.url});
              if (reqsTotal === 0) {
                startTimeout = $timeout(function() {
                  cfpLoadingBar.start();
                }, latencyThreshold);
              }
              reqsTotal++;
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
            return config;
          },

          'response': function(response) {
            if (!isCached(response.config)) {
              reqsCompleted++;
              $rootScope.$broadcast('cfpLoadingBar:loaded', {url: response.config.url});
              if (reqsCompleted >= reqsTotal) {
                setComplete();
              } else {
                cfpLoadingBar.set(reqsCompleted / reqsTotal);
              }
            }
            return response;
          },

          'responseError': function(rejection) {
            if (!isCached(rejection.config)) {
              reqsCompleted++;
              $rootScope.$broadcast('cfpLoadingBar:loaded', {url: rejection.config.url});
              if (reqsCompleted >= reqsTotal) {
                setComplete();
              } else {
                cfpLoadingBar.set(reqsCompleted / reqsTotal);
              }
            }
            return $q.reject(rejection);
          }
        };
      }];

      $httpProvider.interceptors.push(interceptor);
    }])


    /**
     * Loading Bar
     *
     * This service handles adding and removing the actual element in the DOM.
     * Generally, best practices for DOM manipulation is to take place in a
     * directive, but because the element itself is injected in the DOM only upon
     * XHR requests, and it's likely needed on every view, the best option is to
     * use a service.
     */
    .provider('cfpLoadingBar', function() {

      this.includeSpinner = true;
      this.includeBar = true;
      this.latencyThreshold = 100;
      this.startSize = 0.02;
      this.parentSelector = 'body';

      this.$get = ['$document', '$timeout', '$animate', '$rootScope', function ($document, $timeout, $animate, $rootScope) {

        var $parentSelector = this.parentSelector,
          $parent = $document.find($parentSelector),
          loadingBarContainer = angular.element('<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>'),
          loadingBar = loadingBarContainer.find('div').eq(0),
          spinner = angular.element('<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>');

        var incTimeout,
          completeTimeout,
          started = false,
          status = 0;

        var includeSpinner = this.includeSpinner;
        var includeBar = this.includeBar;
        var startSize = this.startSize;

        /**
         * Inserts the loading bar element into the dom, and sets it to 2%
         */
        function _start() {
          $timeout.cancel(completeTimeout);

          // do not continually broadcast the started event:
          if (started) {
            return;
          }

          $rootScope.$broadcast('cfpLoadingBar:started');
          started = true;

          if (includeBar) {
            $animate.enter(loadingBarContainer, $parent);
          }

          if (includeSpinner) {
            $animate.enter(spinner, $parent);
          }

          _set(startSize);
        }

        /**
         * Set the loading bar's width to a certain percent.
         *
         * @param n any value between 0 and 1
         */
        function _set(n) {
          if (!started) {
            return;
          }
          var pct = (n * 100) + '%';
          loadingBar.css('width', pct);
          status = n;

          // increment loadingbar to give the illusion that there is always
          // progress but make sure to cancel the previous timeouts so we don't
          // have multiple incs running at the same time.
          $timeout.cancel(incTimeout);
          incTimeout = $timeout(function() {
            _inc();
          }, 250);
        }

        /**
         * Increments the loading bar by a random amount
         * but slows down as it progresses
         */
        function _inc() {
          if (_status() >= 1) {
            return;
          }

          var rnd = 0;

          // TODO: do this mathmatically instead of through conditions

          var stat = _status();
          if (stat >= 0 && stat < 0.25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
          } else if (stat >= 0.25 && stat < 0.65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3) / 100;
          } else if (stat >= 0.65 && stat < 0.9) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2) / 100;
          } else if (stat >= 0.9 && stat < 0.99) {
            // finally, increment it .5 %
            rnd = 0.005;
          } else {
            // after 99%, don't increment:
            rnd = 0;
          }

          var pct = _status() + rnd;
          _set(pct);
        }

        function _status() {
          return status;
        }

        function _complete() {
          $rootScope.$broadcast('cfpLoadingBar:completed');
          _set(1);

          // Attempt to aggregate any start/complete calls within 500ms:
          completeTimeout = $timeout(function() {
            $animate.leave(loadingBarContainer, function() {
              status = 0;
              started = false;
            });
            $animate.leave(spinner);
          }, 500);
        }

        return {
          start            : _start,
          set              : _set,
          status           : _status,
          inc              : _inc,
          complete         : _complete,
          includeSpinner   : this.includeSpinner,
          latencyThreshold : this.latencyThreshold,
          parentSelector   : this.parentSelector,
          startSize        : this.startSize
        };

      }];
    });
})();angular.module('app').factory('appIsMobile', function() {
  'use strict';

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
angular.module('app').factory('appNotifier', function() {
  'use strict';

  return {
    notify: function(msg, scope) {
      scope.notifier = {};
      scope.notifier.notice = msg;
      setTimeout(function() {
        scope.notifier.notice = '';
        scope.$digest();
      }, 4000);
    },
    error: function(msg, scope) {
      scope.notifier = {};
      scope.notifier.error = msg;
      setTimeout(function() {
        scope.notifier.error = '';
        scope.$digest();
      }, 4000);
    }
  };
});
angular.module('app').controller('appSocialHeaderCtrl', function ($scope, $location) {
  'use strict';

  var show = ['/', '/tweet4me', '/tweet4me/pricing', '/tweet4me/join', '/terms'];

  $scope.showSocialHeader = function() {
    return show.indexOf($location.path()) > -1;
  };
});
angular.module('app').factory('appTopics', function ($window) {
  'use strict';

  var topics = [];
  
  if (!!$window.bootstrappedTopics) {
    topics = $window.bootstrappedTopics;
  }

  return topics;
});
String.prototype.trunc = function(n) {
  'use strict';
  return this.length > n ? this.substr(0, n-1) + '...' : this;
};
angular.module('app').factory('appFeedback', function ($rootScope) {
  'use strict';

  return {
    toggle: function() {
      $rootScope.$broadcast('toggleFeedback');
    }
  };
});
angular.module('app').controller('appFeedbackCtrl', function ($scope, $location, $window, $http, appIdentity, appNotifier) {
  'use strict';

  $scope.success = false;
  $scope.show = false;

  $scope.feedback = {};
  $scope.feedback.userAgent = $window.navigator.userAgent;
  
  if (appIdentity.isAuthenticated()) {
    $scope.feedback.name = appIdentity.currentUser.name;
    $scope.feedback.email = appIdentity.currentUser.email;
  }

  $scope.send = function() {
    $scope.feedback.currentPath = $location.path();
    
    $http
      .post('/api/feedback', $scope.feedback)
      .then(function(res) {
        if (res.data.success) {
          $scope.success = true;
        } else {
          appNotifier.error(res.data.err || 'unknown error', $scope);
        }
      }, function(res) {
        appNotifier.error('error ' + res.status +
          ' occurred - please email help@buzzr.io', $scope);
      });
  };

  $scope.toggle = function () {
    $scope.show = !$scope.show;
  };

  $scope.$on('toggleFeedback', function() {
    $scope.toggle();
  });
});
angular.module('app').controller('appHeaderCtrl', function ($scope, $rootScope, $location, appIdentity, appSidebar) {
  'use strict';

  $scope.isLoggedIn = function() {
    return appIdentity.isAuthenticated() && !appIdentity.currentUser.bufferUser;
  };
  
  $scope.toggleSidebar = function() {
    appSidebar.toggle();
  };

  $rootScope.$on('toggleSidebar', function() {
    $scope.open = !$scope.open;
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  });

  $scope.showLogo = function() {
    var noLogo = ['/', '/search', '/login', '/tweet4me', '/about', '/join', '/terms'];
    return noLogo.indexOf($location.path()) === -1;
  };
});
angular.module('app').factory('appBuzzr', function ($http, $route, appProcessLinks) {
  'use strict';
  var BuzzrResource = {};

  function handleZeroResults($scope) {
    $scope.errorMessage = 'Oh no, Buzzr did not find anything recent on this topic :( Please come back later and try again!';
    $scope.status = 'error';
  }

  function startCountdown($scope) {
    var interv = setInterval(function() {
      $scope.$apply(function() {
        $scope.countDown -= 1;
        if ($scope.countDown <= 0) {
          $scope.countDown = 0;
          $route.reload();
          clearInterval(interv);
        }
      });
    }, 1000);
  }

  function handleError($scope, msg) {
    $scope.errorMessage = msg;
    $scope.links = [];
    $scope.status = 'error';
  }

  BuzzrResource.updateFeed = function($scope) {
    $http
      .get('/api/buzzrs/refresh/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;
        if (res.data.err) {
          handleError($scope, res.data.err);
          return;
        }
        if (res.data.updating) {
          $scope.status = 'updating';
          startCountdown($scope);
          return;
        }
        if (links.length === 0) { return handleZeroResults($scope); }
        appProcessLinks.process($scope, links);
        $scope.status = 'feeding';
      }, function() {
        handleError($scope, 'Sorry, something went wrong! Please try again!');
      });
  };

  BuzzrResource.startFeed = function($scope) {
    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function(res) {
        var links = res.data.links;
        if (res.data.err) {
          handleError($scope, res.data.err);
          return;
        }
        if (!links) {
          $scope.status = 'creating';
          startCountdown($scope);
        } else {
          if (links.length === 0) { return handleZeroResults($scope); }
          appProcessLinks.process($scope, links);
          $scope.status = 'feeding';
        }
      }, function() {
        handleError($scope, 'Sorry, something went wrong! Please try again!');
      });
  };

  return BuzzrResource;
});
angular.module('app').controller('appMainCtrl', function ($scope, $routeParams, $location, appIdentity, appProcessLinks, appSidebar, appFeedback, appBuzzr) {
  /*jshint maxstatements: false */
  'use strict';

  $scope.countDown = 18;
  $scope.links = [];
  $scope.dates = [];
  $scope.lang = '';
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = 'searching';

  $scope.checkStatus = function(status) {
    return $scope.status === status;
  };

  $scope.encode = function(title) { return encodeURI(title); };
  $scope.newSearch = function(newSearchTerm) {
    if (!!newSearchTerm) {
      var url = newSearchTerm.toLowerCase().trim();
      $location.path('/' + url);
    }
  };

  $scope.toggleSidebar = function() { appSidebar.toggle(); };
  $scope.toggleFeedback = function() { appFeedback.toggle(); };

  $scope.getLang = function(lang) { return $scope.lang === lang; };

  $scope.triggerSearch = function() { appBuzzr.startFeed($scope); };
  $scope.loadMore = function() {
    $scope.status = 'searching';
    appBuzzr.updateFeed($scope);
  };

  $scope.showLoading = function() {
    if ($scope.checkStatus('searching') || $scope.checkStatus('creating') || $scope.checkStatus('updating')) { return true; }
    return false;
  };

  if (appIdentity.isAuthenticated()) {
    appIdentity.currentUser.addBuzzr($scope.searchText);
    $scope.saveLink = function(link) { appProcessLinks.saveLink(link, $scope.searchText); };
    $scope.removeLink = function(link) { appProcessLinks.removeLink(link, $scope.searchText); };
    $scope.trackView = function(url) { appIdentity.currentUser.trackView(url, $scope.searchText); };
    $scope.trackShare = function(url) { appIdentity.currentUser.trackShare(url, $scope.searchText); };
  }
  
  $scope.triggerSearch();
});
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
      if (appIdentity.currentUser && appIdentity.currentUser.readlater) {
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
      link.saved = appIdentity.currentUser.saveLink(newSavedLink);
    },
    
    removeLink: function(link, topic) {
      appIdentity.currentUser.removeLink(link.url, topic);
      link.removed = true;
    }
  };
});
angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIdentity, appSidebar, appIsMobile) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      $location.path('/' + $scope.searchText.trim());
    }
  };

  if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      // redirect if email invalid (twitter logins)
      $location.path('account/settings');
    }
  }

  // auto focus input on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById('focus');
    homeInput.focus();
  }
});
angular.module('app').controller('appPagesCtrl', function ($scope, $http, $location, appFeedback) {
  'use strict';
  /*
  $scope.identity = appIdentity;
  var stripeToken = {};
  
  var handler = window.StripeCheckout.configure({
    key: 'pk_live_xGJ0UWxpKbFmhRVaXUcMDuIG',
    image: '/img/icon.png',
    token: function(token) {
      stripeToken = token;

      $http
        .post('/stripe', {token: token, plan: 'scholar'})
        .then(function(res) {
          if (res.data.success) {
            appIdentity.email = token.email;
            $location.path('/join');
          } else {
            // card declined
            window.alert(res.data.reason);
          }
        }, function() {
          window.alert('There was a server error, your card was NOT charged! Please contact us for help!');
        });
    }
  });

  $scope.openCheckout = function() {
    handler.open({
      name: 'Buzzr',
      description: '14-day free trial, $2.00 monthly',
      amount: 0
    });
  };
  */

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.toggleVideo = function() {
    //$scope.showVideo = !$scope.showVideo;
  };
});
angular.module('app').controller('appReadlaterCtrl', function ($scope, appFeedback, appSidebar, appIdentity) {
  'use strict';

  $scope.readlater = appIdentity.currentUser.readlater || [];
  $scope.empty = function() {
    return $scope.readlater.length === 0;
  };

  $scope.toggleFeedback = function() { appFeedback.toggle(); };

  $scope.removeLink = function(url) {
    appIdentity.currentUser.removeSavedLink(url);
  };

  $scope.$on('readlaterChanged', function() {
    $scope.readlater = appIdentity.currentUser.readlater;
  });
});
angular.module('app').factory('appSidebar', function ($rootScope) {
  'use strict';

  var header = {};

  header.toggle = function() {
    $rootScope.$emit('toggleSidebar');
  };
  
  return header;
});
angular.module('app').controller('appSidebarCtrl', function ($scope, $rootScope, appSidebar, $location, $document, appAuth, appNotifier, appIdentity) {
  'use strict';

  var blackout = angular.element(document.querySelector('.blackout'));
  
  function close() {
    if ($scope.open) {
      appSidebar.toggle();
    }
  }

  $scope.identity = appIdentity;

  $scope.setBuzzrs = function() {
    if (appIdentity.isAuthenticated()) {
      $scope.buzzrs = appIdentity.currentUser.buzzrs;
    }
  };

  $scope.encode = function(topic) {
    return encodeURI(topic);
  };

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/');
    });
  };

  $scope.removeBuzzr = function(topic) {
    appIdentity.currentUser.removeBuzzr(topic);
  };

  $scope.toggleOpen = function() {
    blackout.toggleClass('on');
    $scope.open = !$scope.open;
    if ($scope.open) {
      $document.one('click', close);
      $document.one('touch', close);
    }
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  };

  $rootScope.$on('toggleSidebar', function() {
    $scope.setBuzzrs();
    $scope.toggleOpen();
  });

  $scope.$on('buzzrsChanged', function() {
    $scope.setBuzzrs();
  });

  $scope.setBuzzrs();
});
angular.module('app').factory('appTweet4me', function ($http, $filter) {
  'use strict';
  var Tweet4meResource = {},
      uniqDates = {};

  function getDates() {
    var a = [];
    for (var date in uniqDates) {
      if(uniqDates.hasOwnProperty(date)) {
        a.push(date);
      }
    }
    return a.reverse();
  }

  function setLocalDate(tw) {
    var date = new Date(tw.added);
    tw.added = $filter('date')(date, 'dd MMM yyyy');
    uniqDates[tw.added] = true;
  }
  
  function processTweet(tw) {
    setLocalDate(tw);
  }

  
  Tweet4meResource.processTweets = function($scope, tweets) {
    tweets.forEach(processTweet);
      
    $scope.dates = getDates();
    $scope.tweets = tweets;
  };

  Tweet4meResource.mark = function(email, mark, url) {
    $http.post(
      '/api/tweet4me/'+email+'/mark',
      {mark: mark, url: url}
    );
  };

  return Tweet4meResource;
});
angular.module('app').controller('appTweet4meCtrl', function ($scope, $location, appFeedback) {
  'use strict';

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };

  $scope.signup = function() {
    $location.path('/tweet4me/pricing');
  };
});
angular.module('app').controller('appTweet4meFeedCtrl', function ($scope, $routeParams, $http, appTweet4me) {
  'use strict';

  $scope.email = $routeParams.user;
  $scope.status = 'loading';

  $scope.encode = function(title) { return encodeURI(title); };

  $scope.ifStatus = function(status) {
    return $scope.status === status;
  };
  
  $scope.login = function() {
    $scope.getTweets();
  };

  $scope.mark = function(mark, tweet) {
    appTweet4me.mark($scope.email, mark, tweet.url);
    tweet[mark] = true;
  };

  $scope.getTweets = function() {
    $scope.status = 'loading';
    $http
      .get('/api/tweet4me/' + $scope.email)
      .then(function(res) {
        var tweets = res.data.tweets;
        if (tweets.length === 0) {
          $scope.error = 'Couldn\'t find your Tweet4me. Is your Email correct?';
          $scope.status = 'login';
          return;
        }
        appTweet4me.processTweets($scope, tweets);
        $scope.status = 'feeding';
      }, function() {
        window.alert('Sorry, something went wrong! Please try again!');
        $scope.status = 'login';
      });
  };

  if (!$scope.email) {
    $scope.status = 'login';
  } else {
    $scope.getTweets();
  }
});
angular.module('app').controller('appTweet4meJoinCtrl', function ($scope, $http, $routeParams) {
  'use strict';

  $scope.signup = function() {
    if (!$scope.email || !$scope.topic) {
      $scope.success = false;
      $scope.error = 'Make sure you filled out both email and topic';
      return;
    }

    $scope.processing = true;
    $http
      .post('/tweet4me', {email: $scope.email, topic: $scope.topic, plan: $routeParams.plan || 'startup'})
      .then(function(res) {
        if (res.data.success) {
          $scope.success = true;
          $scope.error = false;
        } else {
          $scope.success = false;
          $scope.error = res.data.error;
          $scope.processing = false;
        }
      });
  };
});
