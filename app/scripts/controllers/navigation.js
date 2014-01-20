'use strict';

angular.module('oregamiClientApp')
  .controller('NavigationCtrl',
            ['$scope', '$location', '$route', '$translate', '$translatePartialLoader',
    function ($scope,   $location,   $route, $translate,     $translatePartialLoader) {

    $translatePartialLoader.addPart('navigation');

    $scope.navlist = [
        {name: "home", url: "", title:"home of the site"},
        {name: "games", url: "games", title: "list all games"},
        {name: "persons", url: "persons", title: 'all persons'},
        {name: "companies", url: "companies", title: 'view all companies'},
        {name: "magazines", url: "magazines", title: 'mags'},
        {name: "regions", url: "regions", title: 'regions'},
    ];

    $scope.isActive = function(route) {
        return route === $location.path();
    }

    $scope.$location = $location;
    $scope.$route = $route;


  }]);
