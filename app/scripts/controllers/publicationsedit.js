'use strict';

angular.module('oregamiClientApp')
  .controller('PublicationeditCtrl', function ($scope, $routeParams, publicationService, Restangular, $location, $translate, $translatePartialLoader, errorService) {

        $translatePartialLoader.addPart('publications');

        var _this = this;

        $scope.publicationFranchiseId = $routeParams.publicationsId;

        
        $scope.publicationFranchise = {};

        publicationService.getOne($scope.publicationFranchiseId).then(function(p){
            $scope.publicationFranchise = p;
        });

        this.updatePublicationFranchise = function(publicationFranchise) {
            publicationService.updateOne(publicationFranchise).then(function () {
                _this.goBack();
            })
        };

        this.goBack = function() {
            $location.path("publications/" + $scope.publicationFranchiseId);
        }

        this.addPublication = function(publicationFranchise) {
            publicationFranchise.publicationList.push({validationId : errorService.validationId()});
        };

        this.removePublication = function(publicationFranchise, publication) {
            for(var i=0;i<publicationFranchise.publicationList.length;i++){
                if(publicationFranchise.publicationList[i] == publication){
                    publicationFranchise.publicationList.splice(i, 1);
                }
            }
        };

        this.removeIssue = function(publication, issue) {
            for(var i=0;i<publication.publicationIssueList.length;i++){
                if(publication.publicationIssueList[i] == issue){
                    publication.publicationIssueList.splice(i, 1);
                }
            }
        };
        this.addIssue = function(publication) {
            publication.publicationIssueList.push({validationId : errorService.validationId()});
        };


        $scope.getError = function(fieldName, entity) {
            return errorService.getError($scope.errordata, fieldName, entity);
        }

  });
