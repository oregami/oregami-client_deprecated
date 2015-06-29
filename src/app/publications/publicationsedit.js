'use strict';

angular.module('oregamiClientApp')
  .controller('PublicationeditCtrl', function ($scope, $routeParams, publicationService, Restangular, $location, $translate, $translatePartialLoader, errorService) {

    $translatePartialLoader.addPart('publications');

    var _this = this;

    $scope.publicationFranchiseId = $routeParams.publicationsId;
    $scope.publicationFranchise = {
      'name': '',
      'id': null,
      'validationId': errorService.validationId(),
      publicationList: []
    };

    if ($scope.publicationFranchiseId != null) {
      publicationService.getOne($scope.publicationFranchiseId).then(function (p) {
        $scope.publicationFranchise = p;
      });
    }


    this.updatePublicationFranchise = function (publicationFranchise) {
      console.log(JSON.stringify(publicationFranchise));
      publicationService.updateOne(publicationFranchise).then(function (ret) {
        var url = null;
        if (ret.headers) {
          url = ret.headers('Location');
        }
        _this.goBack(url);
      });
    };

    this.goBack = function (url) {
      if (url != null) {
        var id = url.split('/').pop();
        $scope.publicationFranchiseId = id;
      }
      if ($scope.publicationFranchiseId) {
        $location.path('publications/' + $scope.publicationFranchiseId);
      } else {
        $location.path('publications/');
      }

    };

    this.addPublication = function (publicationFranchise) {
      publicationFranchise.publicationList.push(
        {
          validationId: errorService.validationId(),
          publicationIssueList: []
        });
    };

    this.removePublication = function (publicationFranchise, publication) {
      for (var i = 0; i < publicationFranchise.publicationList.length; i++) {
        if (publicationFranchise.publicationList[i] == publication) {
          publicationFranchise.publicationList.splice(i, 1);
        }
      }
    };

    this.removeIssue = function (publication, issue) {
      for (var i = 0; i < publication.publicationIssueList.length; i++) {
        if (publication.publicationIssueList[i] == issue) {
          publication.publicationIssueList.splice(i, 1);
        }
      }
    };
    this.addIssue = function (publication) {
      publication.publicationIssueList.push({validationId: errorService.validationId()});
    };


    $scope.getError = function (fieldName, entity) {
      return errorService.getError($scope.errordata, fieldName, entity);
    }

    $scope.availableLanguages = Restangular.all('language').getList().$object;

  });
