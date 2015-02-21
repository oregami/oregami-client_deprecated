'use strict';

angular.module('oregamiClientApp')
    .controller('GameTitlesCtrl',
        ['$scope', 'Restangular', 'gameTitleService', '$translatePartialLoader',
            function ($scope, Restangular, $gameTitleService, $translatePartialLoader) {

                $translatePartialLoader.addPart('gameTitles');

                $scope.updateGameTitle = function (gameTitle) {
                    var gameTitleEdited = Restangular.copy(gameTitle);
                    $gameTitleService.updateGameTitle(gameTitleEdited);
                    $scope.gameTitle = null;
                    $scope.gameTitleToEdit = null;
                    window.setTimeout($scope.refreshList,500);


                };
                $scope.saveGameTitle = function (gameTitle) {
                    var gameTitle2 = angular.copy(gameTitle);
                    console.log(gameTitle2);
                    $gameTitleService.saveGameTitle(gameTitle2);
                };
                $scope.loadGameTitle = function (id) {
                    $gameTitleService.loadGameTitle(id).then(function (gameTitleLoaded) {
                        $scope.gameTitle = gameTitleLoaded;
                    });


                };

                $scope.refreshList = function () {
                    $scope.gameTitleList = null;
                    $gameTitleService.getAll().then(function (list) {
                        $scope.gameTitleList = list;
                    });
                };

                $scope.getGameTitleForCombobox = function(gameTitle) {
                  return gameTitle.nativeSpelling +
                    (gameTitle.standardTransliteration == null ? '' : (' (' + gameTitle.standardTransliteration +  ')'))
                    ;
                };

                $scope.refreshList();

                //Restangular.all("language").getList().then(function(languages) {
                //    $scope.availableLanguages = languages;
                //});
                $scope.availableLanguages = Restangular.all("language").getList().$object;

            }]);
