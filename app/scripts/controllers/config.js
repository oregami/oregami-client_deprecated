'use strict';

angular.module('oregamiClientApp')
  .controller('ConfigCtrl', [ 'mySettings', '$scope', function ($mySettings, $scope) {

        $scope.defaultUrl = $mySettings.apiUri;
        $scope.customUrl = getCookie("customUrl");

        $scope.saveUrl = function() {
            console.log('ConfigCtrl.saveUrl() called');
            console.log($mySettings.apiUri);
            console.log($scope.customUrl);
            setCookie("customUrl", $scope.customUrl, 1)
        };
  }]);
