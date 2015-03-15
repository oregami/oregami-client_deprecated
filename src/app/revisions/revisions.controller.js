'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:RevisionsCtrl
 * @description
 * # RevisionsCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('oregamiClientApp')
  .controller('RevisionsCtrl', function ($scope, $routeParams, revisionsService) {

    $scope.loadRevisionsList = function () {
      $scope.revisionsList = revisionsService.getAll();
    };

    $scope.loadRevisionsList();

    $scope.getDate = function(timestamp) {
      return moment(timestamp).format('YYYY-MM-DD HH:mm');
    }

    $scope.getUrlForDiscriminator = function(discriminator) {
      if (discriminator == 'PUBLICATIONFRANCHISE') {
        return 'publications';
      }
      if (discriminator == 'REGION ') {
        return 'region';
      }
      return '';
    }


  });
