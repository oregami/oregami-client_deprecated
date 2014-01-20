'use strict';

angular.module('oregamiClientApp')
  .service('gamesService', [ '$http', 'Restangular',
   function gamesService($http, Restangular) {

        return {
            test: function(callback) {
                console.log('gamesService.test() called');
            },
            getGames: function() {
                return Restangular.all("games").getList();
            }
/*
            ,updateGame: function(game) {
                var url = $mySettings.apiUri + '/games';
                if (game.id==null) {
                    $http({
                        url: url,
                        method: "POST",
                        data: game,
                        headers: {'Content-Type': 'application/json'}
                    }).success(function (data, status, headers, config) {
                            //$scope.persons = data; // assign  $scope.persons here as promise is resolved here
                            console.log("post / insert / success");
                        }).error(function (data, status, headers, config) {
                            //$scope.status = status;
                            console.log("post / insert / error");
                        });
                } else {
                    $http({
                        url: url,
                        method: "PUT",
                        data: game,
                        headers: {
                            //'Content-Type': 'application/json',
                            //'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
                            //'Access-Control-Allow-Origin' : '*'
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, Access-Control-Allow-Methods, Access-Control-Allow-Origin',
                            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT',
                            'Content-Type': 'application/json'
                        }
                    }).success(function (data, status, headers, config) {
                            //$scope.persons = data; // assign  $scope.persons here as promise is resolved here
                            console.log("put / update / success");
                        }).error(function (data, status, headers, config) {
                            //$scope.status = status;
                            console.log("put / update / error");
                        });
                }
            }
 */
        }


  }]);
