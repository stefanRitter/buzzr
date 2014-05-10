angular.module('app', ['ngResource', 'ngRoute', 'angular-loading-bar']);

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
    .when('/',          {templateUrl: '/partials/pages/landingpage',    controller: 'appPagesCtrl'})
    .when('/terms',     {templateUrl: '/partials/pages/terms',          controller: 'appPagesCtrl'})
    .when('/login',     {templateUrl: '/partials/account/login',        controller: 'appLoginCtrl'})
    .when('/join',      {templateUrl: '/partials/account/join',         controller: 'appJoinCtrl'});
  
  $routeProvider
    .when('/tweet4me',          {templateUrl: '/partials/tweet4me/home',      controller: 'appTweet4meCtrl'})
    .when('/tweet4me/join',     {templateUrl: '/partials/tweet4me/join',      controller: 'appTweet4meJoinCtrl'})
    .when('/tweet4me/feed',     {templateUrl: '/partials/tweet4me/main',      controller: 'appTweet4meFeedCtrl'})
    .when('/tweet4me/pricing',  {templateUrl: '/partials/tweet4me/pricing',   controller: 'appTweet4meCtrl'});

  $routeProvider
    .when('/buffer',            {templateUrl: '/partials/buffer/home',      controller: 'appBufferCtrl'})
    .when('/buffer/pricing',    {templateUrl: '/partials/buffer/pricing',   controller: 'appBufferCtrl'})
    .when('/buffer/join',       {templateUrl: '/partials/buffer/join',      controller: 'appBufferCtrl'})
    .when('/buffer/settings',   {templateUrl: '/partials/buffer/settings',  controller: 'appBufferCtrl'});

  $routeProvider
    .when('/search',  {templateUrl: '/partials/pages/home', controller: 'appHomeCtrl'})
    .when('/:id',     {templateUrl: '/partials/main/main',  controller: 'appMainCtrl'})
    .when('/account/readlater', {templateUrl: '/partials/readlater/readlater',
      controller: 'appReadlaterCtrl', resolve: routeRoleChecks.user})
    .when('/account/settings', {templateUrl: '/partials/account/settings',
      controller: 'appSettingsCtrl', resolve: routeRoleChecks.user});
});


angular.module('app').run(function ($rootScope, $location) {
  'use strict';
  
  $rootScope.$on('$routeChangeSuccess', function(){
    window.ga('send', 'pageview', $location.path());
  });
  
  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/');
    }
  });
});
