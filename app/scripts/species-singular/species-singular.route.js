(function () {
  'use strict';

  angular
    .module('yapp.speciesSingular')
    .config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/species', {
          templateUrl: 'scripts/species-singular/species.html',
          controller: 'SpeciesController as vm',
        });
    }]);
})();
