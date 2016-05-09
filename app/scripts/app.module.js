(function() {
  'use strict';

  angular
    .module('yapp', [
      'ngRoute',
      'ngAnimate',
      'yapp.core',
      'yapp.dashboard',
      'yapp.planet',
      'yapp.speciesSingular'
    ]);

})();
