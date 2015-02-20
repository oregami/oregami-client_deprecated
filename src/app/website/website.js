'use strict';

angular.module('oregamiClientApp')
    .controller('WebsiteCtrl', ['$scope', 'websiteService', '$translate', '$translatePartialLoader',
        function ($scope, $websiteService, $translate, $translatePartialLoader) {

            $translatePartialLoader.addPart('websites');

            $scope.getWebsites = function () {
                console.log("websiteService.getWebsites()");
                $websiteService.getWebsites().then(function (d) {
                    $scope.websites = d;
                });
            };

            $scope.refreshList = function() {
                $scope.getWebsites();
            }

            $scope.newwebsite = null;

            $scope.createWebsite = function(website) {
                $websiteService.createWebsite(website).then(function(users) {
                    $scope.getWebsites();

                });
            };

            //load regions:
            $scope.getWebsites();

        }]);