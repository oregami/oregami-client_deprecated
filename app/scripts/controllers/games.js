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

  }]);
