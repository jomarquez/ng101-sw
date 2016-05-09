(function() {
  'use strict';

  angular
    .module('yapp.dashboard')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['person'];

  function PersonController(person) {
    var vm = this;
    vm.person = person;

    vm.cancel = cancel;
    vm.save = save;

    function cancel() {
      // some code here
    }

    function save() {
      // some code here
    }
  }
})();
