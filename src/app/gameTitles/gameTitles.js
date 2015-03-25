'use strict';

angular.module('oregamiClientApp')
    .controller('GameTitlesCtrl', ['$scope', 'gameTitleService', '$translate', '$translatePartialLoader', 'Restangular', '$routeParams',
    function ($scope, $gameTitleService, $translate, $translatePartialLoader, Restangular, $routeParams) {

      $translatePartialLoader.addPart('gameTitles');

      $scope.id = $routeParams.gameTitleId;
      var service = $gameTitleService;


      $scope.loadAll = function () {
        $scope.list = service.getAll();
      };
      $scope.loadOne = function (id) {
        $scope.loadOneWithRevision(id, null);
      }

      $scope.loadOneWithRevision = function (id, revision) {
        $scope.revisions = service.getOneRevisionNumbers($scope.id);
        $scope.currentRevision = revision;
        if (revision == null) {
          service.getOne($scope.id).then(function (t) {
            $scope.one = t;
          });
        } else {
          service.getOneWithRevision($scope.id, $scope.revision).then(function (t) {
            $scope.one = t;
          });
        }

      }

      if ($scope.id == null) {
        $scope.loadAll();
      } else {
        $scope.list = {};
        if ($routeParams.revision != null) {
          $scope.revision = $routeParams.revision;
          $scope.loadOneWithRevision($scope.id, $scope.revision);
        } else {
          $scope.loadOne($scope.id);
        }
      }


    }]
);
