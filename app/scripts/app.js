'use strict';

var app = angular.module('oregamiClientApp', [])

    .constant('mySettings', {
        apiUri: 'http://localhost:8080',
        version: '0.0.1'
    })

  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  })

;
