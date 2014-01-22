'use strict';

angular.module('oregamiClientApp')
  .controller('GamesCtrl', ['$scope', 'gamesService', '$translate', '$translatePartialLoader',
                   function ($scope,  $gamesService,   $translate,   $translatePartialLoader) {

    $translatePartialLoader.addPart('games');

    $scope.getGames = function() {
        console.log('GamesCtrl.games() called');
        $gamesService.getGames().then(function(d) {
            $scope.games = d;
        });
    };

    //load games:
    $scope.getGames();

    $scope.game=null;

        /*
        $scope.updateGame = function(game) {
            $scope.game= angular.copy(game);
            console.log($scope.game);
            $gamesService.updateGame(game);
        };
        */




  }]);
