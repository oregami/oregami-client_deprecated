'use strict';

angular.module('oregamiClientApp')
  .controller('NavigationCtrl',
  ['$scope', '$location', '$route', '$translate', '$translatePartialLoader',
    function ($scope, $location, $route, $translate, $translatePartialLoader) {

      $translatePartialLoader.addPart('navigation');

      $scope.navlist = [
        {name: "publications", url: "publications"},
        {name: "games", url: "games"},
        {name: "gamingEnvironments", url: "gamingEnvironments"},
        {name: "regions", url: "regions"},
        {name: "websites", url: "websites"},
        //{name: "persons", url: "persons"},
        //{name: "companies", url: "companies"},
        {name: "last_changes", url: "revisions"},
      ];

      $scope.isActive = function (route) {
        return route === $location.path();
      };

      $scope.$location = $location;
      $scope.$route = $route;


    }]);
