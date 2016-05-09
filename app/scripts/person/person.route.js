(function () {
  'use strict';

  angular
    .module('yapp.person')
    .config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/people', {
          templateUrl: 'scripts/person/people.html',
          controller: 'PeopleController as vm',
          resolve: {
            people : ['$route', '$q', 'PersonService', function ($route, $q, PersonService) {
              var defer = $q.defer();
              PersonService.getPeople().then(function (data) {
                defer.resolve(data);
              });
              return defer.promise;
            }]
          }

        })
        .when('/person/:id', {
          templateUrl: 'scripts/person/person.html',
          controller: 'PersonController as vm',
          resolve: {
            person : ['$route', '$q', 'PersonService', function ($route, $q, PersonService) {
              var defer = $q.defer();
              PersonService.getPerson($route.current.params.id).then(function (data) {
                defer.resolve(data);
              });
              return defer.promise;
            }]
          }
      });
    }]);
})();
