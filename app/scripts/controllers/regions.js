'use strict';

angular.module('oregamiClientApp')
  .controller('RegionsCtrl', ['$scope', 'regionService', '$translate', '$translatePartialLoader',
                     function ($scope,  $regionService,   $translate,   $translatePartialLoader) {

        $translatePartialLoader.addPart('regions');

        $scope.getRegions = function() {
            console.log("regionService.getRegions()");
            $regionService.getRegions().then(function(d) {
                $scope.regions = d;
            });
        };

        //load regions:
        $scope.getRegions();

  }]);

