'use strict';

angular.module('oregamiClientApp')
  .controller('MainCtrl', [ '$scope', 'mySettings', function ($scope, $mySettings, $translatePartialLoader) {

        $translatePartialLoader.addPart('main');
        $scope.mySettings = $mySettings;


  }]);
