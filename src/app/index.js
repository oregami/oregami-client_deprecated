'use strict';

var app = angular.module('oregamiClientApp',
  [
    'ngAnimate',
    'ngSanitize',
    'restangular',
    'ngRoute',
    'mgcrea.ngStrap',
    'pascalprecht.translate',
    'LocalStorageModule',
    'http-auth-interceptor'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/games', {
        templateUrl: 'app/games/games.html',
        controller: 'GamesCtrl'
      })
      .when('/games/:gamesId', {
        templateUrl: 'app/games/games.html',
        controller: 'GamesCtrl'
      })
      .when('/persons', {
        templateUrl: 'app/persons/persons.html',
        controller: 'PersonsCtrl'
      })
      .when('/companies', {
        templateUrl: 'app/companies/companies.html',
        controller: 'CompaniesCtrl'
      })
      .when('/publications', {
        templateUrl: 'app/publications/publications.html',
        controller: 'PublicationsCtrl'
      })
      .when('/publications/:publicationsId', {
        templateUrl: 'app/publications/publications.html',
        controller: 'PublicationsCtrl'
      })
      .when('/publications/edit/:publicationsId', {
        templateUrl: 'app/publications/publicationsEdit.html',
        controller: 'PublicationeditCtrl as ctrl'
      })
      .when('/config', {
        templateUrl: 'app/config.html',
        controller: 'ConfigCtrl'
      })
      .when('/languages', {
        templateUrl: 'app/languages/languages.html',
        controller: 'LanguagesCtrl'
      })
      .when('/regions', {
        templateUrl: 'app/regions/regions.html',
        controller: 'RegionsCtrl'
      })
      .when('/gameTitles', {
        templateUrl: 'app/gameTitles/gameTitles.html',
        controller: 'GameTitlesCtrl'
      })
      .when('/register', {
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/websites', {
        templateUrl: 'app/website/website.html',
        controller: 'WebsiteCtrl'
      })
      .when('/revisions', {
        templateUrl: 'app/revisions/revisions.html',
        controller: 'RevisionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
;

app.run(function($rootScope, Restangular, localStorageService) {

    $rootScope.API = "http://test.server.oregami.org";
    $rootScope.API = "http://localhost:8080";
  //$rootScope.API = "http://192.168.59.103:8080";
  Restangular.setBaseUrl($rootScope.API);
  Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
    $rootScope.errordata = response.data;
    $rootScope.isLoading--;
    return response;
  });

  Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
    //console.log('FRI for ' + url + ': ' + (localStorageService.get("token")==null?null:localStorageService.get("token").token));
    if (localStorageService.get("token") != null) {
      console.log('auth-header wird gesetzt! \n' + JSON.stringify(localStorageService.get("token")));
      headers.authorization = "bearer " + localStorageService.get("token").token;
    }
    return {
      element: element,
      headers: headers,
      params: params,
      httpConfig: httpConfig
    };

  });

  Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
    //console.log('FRI for ' + url + ': ' + (localStorageService.get("token")==null?null:localStorageService.get("token").token));
    if (localStorageService.get('token') != null) {
      console.log('auth-header wird gesetzt! \n' + JSON.stringify(localStorageService.get('token')));
      headers.authorization = 'bearer ' + localStorageService.get('token').token;
    }
    return {
      element: element,
      headers: headers,
      params: params,
      httpConfig: httpConfig
    };

  });
  Restangular.addResponseInterceptor(function(response) {
    $rootScope.isLoading--;
    $rootScope.errordata = null;
    return response;
  });
  Restangular.setDefaultHeaders({'Content-Type': 'application/json'});
  $rootScope.loggedIn = false;
  if (localStorageService.get('token') != null) {
    $rootScope.loggedIn = true;
  }
});

app.config(function ($translateProvider, $translatePartialLoaderProvider) {


  $translatePartialLoaderProvider.addPart('main');
  $translatePartialLoaderProvider.addPart('navigation');
  $translatePartialLoaderProvider.addPart('games');
  $translatePartialLoaderProvider.addPart('regions');
  $translatePartialLoaderProvider.addPart('gameTitles');
  $translatePartialLoaderProvider.addPart('publications');
  $translatePartialLoaderProvider.addPart('languages');
  $translatePartialLoaderProvider.addPart('websites');
  $translatePartialLoaderProvider.addPart('register');
  //$translatePartialLoaderProvider.addPart('login');

  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/assets/language/{part}_{lang}.json'
  });

  $translateProvider.preferredLanguage('en');
});


app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('oregami');
});
