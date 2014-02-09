'use strict';

angular.module('oregamiClientApp')
  .controller('PublicationsCtrl', ['$scope', 'publicationService', '$translate', '$translatePartialLoader',
         function ($scope,  $publicationService,   $translate,   $translatePartialLoader) {

             $translatePartialLoader.addPart('publications');
             $translatePartialLoader.addPart('languages');

             $scope.getPublications = function() {
                 $publicationService.getPublications().then(function(d) {
                     $scope.publications = d;
                 });
             };

             //load publications:
             $scope.getPublications();


  }]);
