(function () {
  'use strict';

  /* Directive takes an ISO 8601 datetime string format
   * (yyyy-MM-ddTHH:mm:ss.sssZ) and returns a formatted short date inside a pulled-right div
   * Input: "2014-12-10T15:10:51.357000Z"
   * Output: created on 12/10/14 10:10 AM
  */

  angular
    .module('yapp.core')
    .directive('yCreatedOn', yCreatedOn);

  yCreatedOn.$inject = ['$filter'];

  function yCreatedOn($filter) {
    return {
      restrict: 'AE',
      template: '<div class="pull-right"><small><span ng-bind="createdOn"></span></small></div>',
      link: function (scope, element, attrs) {
        var createdAt = $filter('date')(attrs.date, 'short');
        scope.createdOn = 'created on ' + createdAt;

      }
    }
  }
})();

