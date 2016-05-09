(function () {
  'use strict';

  angular
    .module('yapp.planet')
    .config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/planets', {
          templateUrl: 'scripts/planet/planets.html',
          controller: 'PlanetsController as vm',
        })
        .when('/planet/:id', {
          templateUrl: 'scripts/planet/planet.html',
          controller: 'PlanetController as vm'
      });
    }]);
})();
