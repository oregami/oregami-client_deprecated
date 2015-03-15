'use strict';

angular.module('oregamiClientApp')
  .controller('NavigationCtrl',
            ['$scope', '$location', '$route', '$translate', '$translatePartialLoader',
    function ($scope,   $location,   $route, $translate,     $translatePartialLoader) {

    $translatePartialLoader.addPart('navigation');

    $scope.navlist = [
        //{name: "home", url: "", title:"home of the site"},
        {name: "publications", url: "publications", title: 'show publications'},
        {name: "games", url: "games", title: "list all games"},
        {name: "gameTitles", url: "gameTitles", title: 'gameTitles'},
        {name: "regions", url: "regions", title: 'regions'},
        {name: "websites", url: "websites", title: 'websites'},
        {name: "persons", url: "persons", title: 'all persons'},
        {name: "companies", url: "companies", title: 'view all companies'},
        {name: "revisions", url: "revisions", title: 'revisions of entities'},


    ];

    $scope.isActive = function(route) {
        return route === $location.path();
    }

    $scope.$location = $location;
    $scope.$route = $route;


  }]);
