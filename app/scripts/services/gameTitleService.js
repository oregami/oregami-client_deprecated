'use strict';

angular.module('oregamiClientApp')
  .service('gameTitleService', ['Restangular', function gameTitleService(Restangular) {

        return {
            getAll: function() {
                return Restangular.all("gameTitle").getList();
            },
            saveGameTitle: function(gameTitle) {
                return Restangular.all("gameTitle").post(gameTitle);
            },
            updateGameTitle: function(gameTitle) {
                return gameTitle.put();
            },
            loadGameTitle: function(id) {
                return Restangular.one('gameTitle', id).get();
            }
        }
  }]);
