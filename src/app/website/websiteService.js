'use strict';

angular.module('oregamiClientApp')
    .service('websiteService', [ 'Restangular',
        function websiteService( Restangular) {
            return {
                getWebsites: function () {
                    return Restangular.all('website').getList();
                },

                createWebsite: function(website) {
                    return Restangular.all('website').post(website);
                }
            }
        }]);
