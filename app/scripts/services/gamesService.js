'use strict';

angular.module('oregamiClientApp')
  .service('gamesService', [ 'mySettings' , '$http',  function gamesService($mySettings, $http) {

        return {
            test: function(callback) {
                console.log('gamesService.test() called');
            },
            getGames: function() {
                // $http returns a promise, which has a then function, which also returns a promise
                var url = $mySettings.apiUri + '/games/list';
                console.log('gamesService.test() called => ' + url);
                var promise = $http.get(url).then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(url + '->' + response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
            }
        }

  }]);
