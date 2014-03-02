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
    .when('/signup', {templateUrl: '/partials/account/signup', controller: 'appSignupCtrl'})
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
