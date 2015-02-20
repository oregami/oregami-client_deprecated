'use strict';

angular.module('oregamiClientApp', ['ngAnimate', 'ngSanitize', 'restangular', 'ngRoute', 'mgcrea.ngStrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
