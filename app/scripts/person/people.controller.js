(function() {
  'use strict';

  angular
    .module('yapp.person')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['people'];

  function PeopleController(people) {
    var vm = this;
    vm.people = people;

  }
})();
