(function() {
  'use strict';

  angular
    .module('yapp', [
      'ngRoute',
      'ngAnimate',
      'yapp.core',
      'yapp.dashboard',
      'yapp.person',
      'yapp.planet',
      'yapp.speciesSingular'
    ]);

})();
