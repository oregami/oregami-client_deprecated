'use strict';

angular.module('oregamiClientApp')
  .controller('MainCtrl', [ '$scope', 'mySettings', function ($scope, $mySettings) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.mySettings = $mySettings;
  }]);
