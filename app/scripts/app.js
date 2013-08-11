'use strict';

var app = angular.module('oregamiClientApp', [])
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('mySettings', {
        apiUri: '/api/foo',
        version: '0.0.1'
    });
;
