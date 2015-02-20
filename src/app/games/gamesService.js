'use strict';

angular.module('oregamiClientApp')
  .service('gamesService', [ 'Restangular',
   function gamesService( Restangular) {

        return {
            test: function(callback) {
                console.log('gamesService.test() called');
            },
            getGames: function() {
                return Restangular.all("games").getList();
            }

        }


  }]);
