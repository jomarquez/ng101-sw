(function () {
  'use strict';

  angular
    .module('yapp.person')
    .service('PersonService', PersonService);

  PersonService.$inject = ['$http', '$q'];

  function PersonService($http, $q) {
    var api = {
      getPerson: getPerson,
      getPeople: getPeople
    };

    return api;

    function getPerson(id) {
      var deferred = $q.defer();
      $http.get('http://swapi.co/api/people/' + id).success(function(data){
         deferred.resolve(data);
      }).error(function(){
          deferred.reject(error);
      });
      return deferred.promise;
    }

    function getPeople() {
      var deferred = $q.defer();
      $http.get('http://swapi.co/api/people/').success(function(data){
         deferred.resolve(data);
      }).error(function(){
          deferred.reject(error);
      });
      return deferred.promise;
    }
  }
})();



