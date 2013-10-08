'use strict';

angular.module('oregamiClientApp')
  .service('gamesService', [ 'mySettings' , '$http',  function gamesService($mySettings, $http) {

        return {
            test: function(callback) {
                console.log('gamesService.test() called');
            },
            getGames: function() {
                // $http returns a promise, which has a then function, which also returns a promise
                var url = $mySettings.apiUri + '/games';
                if (getCookie("customUrl")!=null) {
                    url = getCookie("customUrl") + '/games'
                }
                console.log('gamesService.test() called => ' + url);
                var promise = $http.get(url).then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(url + '->' + response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
            } ,
/*
            updateGame: function(game) {
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
