'use strict';

angular.module('oregamiClientApp')
  .controller('GamingEnvironmentsEditCtrl', function ($scope, $routeParams, gamingEnvironmentsService, Restangular, $location, $translate, $translatePartialLoader, errorService) {

    $translatePartialLoader.addPart('gamingEnvironments');

    var _this = this;

    $scope.gamingEnvironmentId = $routeParams.gamingEnvironmentsId;
    $scope.gamingEnvironment = {'name': '', 'id': null, 'validationId': errorService.validationId()};

    if ($scope.publicationFranchiseId != null) {
      gamingEnvironmentsService.getOne($scope.gamingEnvironmentId).then(function (p) {
        $scope.gamingEnvironment = p;
      });
    }


    this.updateEntity = function (publicationFranchise) {
      console.log(JSON.stringify(publicationFranchise));
      gamingEnvironmentsService.updateOne(publicationFranchise).then(function (ret) {
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
