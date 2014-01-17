'use strict';

var app = angular.module('oregamiClientApp', ['pascalprecht.translate', 'ngRoute'])

    .constant('mySettings', {
        apiUri: 'http://localhost:8080',
        //apiUri: 'http://test.server.oregami.org',
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

    $translateProvider.preferredLanguage('de');
}]);


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
    }
    return null;
}

function setCookie(name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=name + "=" + value;
}
