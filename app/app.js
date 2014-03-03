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
