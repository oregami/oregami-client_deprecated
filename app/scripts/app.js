'use strict';

var app = angular.module('oregamiClientApp',
            [
            'pascalprecht.translate',
            'ngRoute',
            'restangular',
            'chieffancypants.loadingBar',
            'ngAnimate'
            ]
    )


  .config(function ($routeProvider, RestangularProvider, cfpLoadingBarProvider) {

    //RestangularProvider.setBaseUrl('http://localhost:8080');
    RestangularProvider.setBaseUrl('http://test.server.oregami.org');
    cfpLoadingBarProvider.includeSpinner = false;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/persons', {
        templateUrl: 'views/persons.html',
        controller: 'PersonsCtrl'
      })
      .when('/companies', {
        templateUrl: 'views/companies.html',
        controller: 'CompaniesCtrl'
      })
      .when('/magazines', {
        templateUrl: 'views/magazines.html',
        controller: 'MagazinesCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      })
      .when('/languages', {
        templateUrl: 'views/languages.html',
        controller: 'LanguagesCtrl'
      })
      .when('/regions', {
        templateUrl: 'views/regions.html',
        controller: 'RegionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  })

;


app.config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {

    $translatePartialLoaderProvider.addPart('navigation');
    $translatePartialLoaderProvider.addPart('games');
    $translatePartialLoaderProvider.addPart('regions');

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/language/{part}_{lang}.json'
    });

    $translateProvider.preferredLanguage('en');
}]);
