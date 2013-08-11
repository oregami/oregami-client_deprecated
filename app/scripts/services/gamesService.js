'use strict';

angular.module('oregamiClientApp')
  .service('gamesService', [ 'mySettings' , function gamesService($mySettings) {

        return {
            test: function(callback) {
                //$http.get('/service/hefte').success(callback);
                console.log('gamesService.test() called');
            }
        }

  }]);
