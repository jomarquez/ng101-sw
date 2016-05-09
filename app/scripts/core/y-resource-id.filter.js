(function () {
  'use strict';

  /* Filter returns resourceId given a url
   * HTML EX: {{person.url | yResourceId}}
   * JS EX: $filter('yResourceId')(person.url);
   * Input: "http://swapi.co/api/people/10/"
   * Output: 10
   */

  angular
    .module('yapp.core')
    .filter('yResourceId', yResourceId);

  function yResourceId() {
    return function (url) {
      url = url.replace(/\/$/, ""); //remove trailing slash
      return url.split('/').pop();
    };
  }
})();
