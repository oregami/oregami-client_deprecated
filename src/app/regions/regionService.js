'use strict';

angular.module('oregamiClientApp')
  .service('regionService', ['$http', 'Restangular',
    function regionService( $http, Restangular) {
        return {
            getRegions: function() {
                return Restangular.all("region").getList();
            }
        }
  }]);
