'use strict';

angular.module('oregamiClientApp')
  .controller('GamesCtrl', ['$scope', 'gamesService', '$translate', '$translatePartialLoader', 'Restangular', '$routeParams',
    function ($scope, $gamesService, $translate, $translatePartialLoader, Restangular, $routeParams) {

      $translatePartialLoader.addPart('games');

      $scope.id = $routeParams.gamesId;
      var service = $gamesService;

      $scope.originalTitleFilter = function (gameTitle) {
        return gameTitle.titleType.value == 'ORIGINAL_TITLE';
      };
      $scope.notOriginalTitleFilter = function (gameTitle) {
        return !$scope.originalTitleFilter(gameTitle);
      };


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


      $scope.tabs = ["releases", "gametitles", "revisions"];
      $scope.tabs.activeTab = "releases";

      $scope.getTitle = function (game) {
        if (game == null || game.gameToGameTitleConnectionList == null
        || typeof game.gameToGameTitleConnectionList == 'undefined') {
          return "";
        }
        for (var i=0; i<game.gameToGameTitleConnectionList.length; i++) {
          var thisTitleType = game.gameToGameTitleConnectionList[i].titleType;
          if (thisTitleType.value == 'ORIGINAL_TITLE') {
            return game.gameToGameTitleConnectionList[i].gameTitle;
          }
        }
        return game.gameToGameTitleConnectionList[0].gameTitle;
      }

      $scope.getDate = function (timestamp) {
        return moment(timestamp).format('YYYY-MM-DD HH:mm');
      }

      $scope.showAlert = function () {
        alert('showAlert');
      }




    }]);
