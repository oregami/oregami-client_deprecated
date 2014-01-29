'use strict';

angular.module('oregamiClientApp')
    .controller('GameTitlesCtrl',
        ['$scope', 'Restangular', 'gameTitleService', '$translatePartialLoader',
            function ($scope, Restangular, $gameTitleService, $translatePartialLoader) {

                $translatePartialLoader.addPart('gameTitles');

                $scope.updateGameTitle = function (gameTitle) {
                    var gameTitleEdited = Restangular.copy(gameTitle);
                    console.log(gameTitleEdited);
                    $gameTitleService.updateGameTitle(gameTitleEdited);
                    $scope.refreshList();
                    $scope.gameTitle = null;
                    $scope.$apply();
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


                }

                $scope.refreshList = function () {
                    console.log('refreshList');
                    $gameTitleService.getAll().then(function (list) {
                        $scope.gameTitleList = list;
                    });
                }

                $scope.refreshList();

                //Restangular.all("language").getList().then(function(languages) {
                //    $scope.availableLanguages = languages;
                //});
                $scope.availableLanguages = Restangular.all("language").getList().$object;

            }]);
