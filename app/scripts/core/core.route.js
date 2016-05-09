(function () {
  'use strict';

  angular
    .module('yapp.core')
    .config(coreRoute);

  coreRoute.$inject = ['$routeProvider'];

  function coreRoute($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'scripts/dashboard/dashboard.html',
        controller: 'DashboardController as vm'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  }
})();
