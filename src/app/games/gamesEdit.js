'use strict';

angular.module('oregamiClientApp')
  .controller('GamesEditCtrl', function ($scope, $routeParams, gamesService, Restangular, $location, $translate, $translatePartialLoader, errorService) {

    $translatePartialLoader.addPart('games');

    var _this = this;

    $scope.gamesId = $routeParams.gamesId;


    //if ($scope.gamesId == null) {
      $scope.one = {'id': null, 'validationId': errorService.validationId()};
    //}
    //else {
      gamesService.getOne($scope.gamesId).then(function (entity) {
        $scope.one = entity;
      });
    //}


    this.updateGame = function (game) {
      gamesService.updateOne(game).then(function (ret) {
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
        $scope.gamesId = id;
      }
      if ($scope.gamesId) {
        $location.path('games/' + $scope.gamesId);
      } else {
        $location.path('games/');
      }

    };

    this.addReleaseGroup = function (game) {
      game.releaseGroupList.push(
        {
          validationId: errorService.validationId(),
          releaseList: []
        });
    };

    this.removeReleaseGroup = function (game, releaseGroup) {
      for (var i = 0; i < game.releaseGroupList.length; i++) {
        if (game.releaseGroupList[i] == releaseGroup) {
          game.releaseGroupList.splice(i, 1);
        }
      }
    };

    $scope.getError = function (fieldName, entity) {
      return errorService.getError($scope.errordata, fieldName, entity);
    }

    $scope.getTitlesFromGamingEnvironment = function (gamingEnvironment) {
      if (gamingEnvironment == null) {
        return "";
      }
      var title = "";
      for (var i=0; i<gamingEnvironment.title.length; i++) {
        if (i>0) {
          title += " / " ;
        }
        title += gamingEnvironment.title[i].text.text;
      }
      return title;
    }

    $scope.availableLanguages = Restangular.all('language').getList().$object;
    $scope.availableGameEntryTypes = Restangular.all('gameEntryTypes').getList().$object;
    $scope.availableGamingEnvironments= Restangular.all('gamingEnvironments').getList().$object;
    $scope.availableReleaseGroupReasons= Restangular.all('releaseGroupReasons').getList().$object;

  });
