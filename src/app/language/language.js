'use strict';

angular.module('oregamiClientApp')
  .controller('LanguageCtrl',
  ['$scope', '$translate', '$log',
    function ($scope, $translate, $log) {

      $scope.languages = [
        {id: "de", name: "GERMAN"},
        {id: "en", name: "ENGLISH"}
      ];

      $scope.preferredLanguage = $translate.preferredLanguage();

      $scope.changeLang = function (key) {
        $translate.use(key).then(function (key) {
          $scope.preferredLanguage = key;

        }, function (key) {
          $log.error("changeLang: something went wrong.");
        });
      };

      $scope.isActiveLanguage = function (key) {
        var ret = $translate.preferredLanguage() == key;
        return ret;
      };
    }]);
