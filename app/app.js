angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  'use strict';

  var routeRoleChecks = {
    user: {
      auth: ['appAuth', function (appAuth) {
        return appAuth.authorizeLoggedInUserForRoute();
      }]
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
    .when('/account/readlater', {templateUrl: '/partials/readlater/readlater',
      controller: 'appReadlaterCtrl', resolve: routeRoleChecks.user})
    .when('/account/settings', {templateUrl: '/partials/account/settings',
      controller: 'appSettingsCtrl', resolve: routeRoleChecks.user});
});


angular.module('app').run(function ($rootScope, $location) {
  'use strict';

  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/');
    }
  });
});
