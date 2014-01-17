'use strict';

angular.module('oregamiClientApp')
  .service('regionService', ['mySettings', '$http', function regionService($mySettings, $http) {
        return {
            getRegions: function() {
                // $http returns a promise, which has a then function, which also returns a promise
                var url = $mySettings.apiUri + '/region';
                if (getCookie("customUrl")!=null && getCookie("customUrl").length>1 ) {
                    url = getCookie("customUrl") + '/region'
                }
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
