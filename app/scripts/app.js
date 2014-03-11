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

    //.constant("API_URL", "http://localhost:8080")
    .constant("API_URL", "http://test.server.oregami.org")

    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    })

  .config(function ($routeProvider, RestangularProvider, cfpLoadingBarProvider, API_URL) {

    RestangularProvider.setBaseUrl(API_URL);

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
      .when('/publications', {
        templateUrl: 'views/publications.html',
        controller: 'PublicationsCtrl'
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
      .when('/gameTitles', {
        templateUrl: 'views/gameTitles.html',
        controller: 'GameTitlesCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/websites', {
        templateUrl: 'views/website.html',
        controller: 'WebsiteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  })


;


app.config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {

    $translatePartialLoaderProvider.addPart('main');
    $translatePartialLoaderProvider.addPart('navigation');
    $translatePartialLoaderProvider.addPart('games');
    $translatePartialLoaderProvider.addPart('regions');
    $translatePartialLoaderProvider.addPart('gameTitles');
    $translatePartialLoaderProvider.addPart('publications');
    $translatePartialLoaderProvider.addPart('languages');
    $translatePartialLoaderProvider.addPart('websites');
    $translatePartialLoaderProvider.addPart('register');

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/language/{part}_{lang}.json'
    });

    $translateProvider.preferredLanguage('en');
}]);
