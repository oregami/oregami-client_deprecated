'use strict';

angular.module('oregamiClientApp')
  .controller('GamesCtrl', ['$scope', 'gamesService', '$translate', '$translatePartialLoader', 'Restangular', '$routeParams',
    function ($scope, $gamesService, $translate, $translatePartialLoader, Restangular, $routeParams) {

      $translatePartialLoader.addPart('games');

      $scope.id = $routeParams.gamesId;
      var service = $gamesService;

      $scope.originalTitleFilter = function (gameToGameTitleConnection) {
        return gameToGameTitleConnection.titleType.value == 'ORIGINAL_TITLE';
      };
      $scope.notOriginalTitleFilter = function (gameToGameTitleConnection) {
        return !$scope.originalTitleFilter(gameToGameTitleConnection);
      };


      $scope.loadAll = function() {
        $scope.list = service.getAll();
      };
      $scope.loadOne = function(id) {
        $scope.loadOneWithRevision(id, null);
      }

      $scope.loadOneWithRevision = function(id, revision) {
        $scope.revisions = service.getOneRevisionNumbers($scope.id);
        $scope.currentRevision = revision;
        if (revision==null) {
          service.getOne($scope.id).then(function (t) {
            $scope.one = t;
          });
        } else {
          service.getOneWithRevision($scope.id, $scope.revision).then(function (t) {
            $scope.one = t;
          });
        }

      }

      if ($scope.id==null) {
        $scope.loadAll();
      } else {
        $scope.list = {};
        if ($routeParams.revision!=null) {
          $scope.revision = $routeParams.revision;
          $scope.loadOneWithRevision($scope.id, $scope.revision);
        } else {
          $scope.loadOne($scope.id);
        }
      }


      $scope.tabs = ["gametitles", "releases"];
      $scope.tabs.activeTab = "gametitles";


    }]);
