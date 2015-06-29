'use strict';

angular.module('oregamiClientApp')
  .controller('GamesEditCtrl', function ($scope, $routeParams, gamesService, Restangular, $location, $translate, $translatePartialLoader, errorService) {

    $translatePartialLoader.addPart('games');

    var _this = this;

    $scope.gamesId = $routeParams.gamesId;
    $scope.one = {
      'name': '', 'id': null, 'validationId': errorService.validationId()
      , releaseGroupList: []
      , gameTitleList: []
    };

    if ($scope.gamesId != null) {
      gamesService.getOne($scope.gamesId).then(function (p) {
        $scope.one = p;
      });
    }

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

    this.addGameTitle = function (game) {
      game.gameTitleList.push(
        {
          validationId: errorService.validationId(),
          text: {
            text : ""
          }
        });
    };

    this.removeGameTitle = function (game, gameTitle) {
      for (var i = 0; i < game.gameTitleList.length; i++) {
        if (game.gameTitleList[i] == gameTitle) {
          game.gameTitleList.splice(i, 1);
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
      for (var i = 0; i < gamingEnvironment.title.length; i++) {
        if (i > 0) {
          title += " / ";
        }
        title += gamingEnvironment.title[i].text.text;
      }
      return title;
    }

    $scope.availableLanguages = Restangular.all('language').getList().$object;
    $scope.availableGameEntryTypes = Restangular.all('datalist/gameEntryTypes').getList().$object;
    $scope.availableGamingEnvironments = Restangular.all('gamingEnvironments').getList().$object;
    $scope.availableReleaseGroupReasons = Restangular.all('datalist/releaseGroupReasons').getList().$object;
    $scope.availableTitleTypes = Restangular.all('datalist/titleTypes').getList().$object;

  });
