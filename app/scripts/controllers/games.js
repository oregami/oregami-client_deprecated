'use strict';

angular.module('oregamiClientApp')
  .controller('GamesCtrl', ['$scope', 'mySettings', 'gamesService', function ($scope, $mySettings, $gamesService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.mySettings = $mySettings;

    $scope.test = function() {
         console.log('GamesCtrl.test() called');
         $gamesService.test();
    };
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
