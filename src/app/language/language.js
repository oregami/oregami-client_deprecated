'use strict';

angular.module('oregamiClientApp')
  .controller('LanguageCtrl', ['$scope', '$translate', function ($scope, $translate) {

        $scope.languages = [
            'en',
            'de'
        ];

        $scope.preferredLanguage = $translate.preferredLanguage();

        $scope.changeLang = function (key) {
            //alert(key);
            $translate.use(key).then(function (key) {
                console.log("Switched language to " + key + ".");
                $scope.preferredLanguage = key;

            }, function (key) {
                console.log("changeLang: something went wrong.");
            });
        };

        $scope.isActiveLanguage = function (key) {
            var ret=  $translate.preferredLanguage()==key;
            console.log('isActiveLanguage(' + key + ') --> ' + ret);
            return ret;
        };
  }]);
