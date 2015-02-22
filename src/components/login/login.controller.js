'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('oregamiClientApp')
  .controller('LoginCtrl', function ($scope, $rootScope, loginService, localStorageService, $modal, authService, $translatePartialLoader) {

    console.log('LoginCtrl started');

    $translatePartialLoader.addPart('login');

    var myModal = $modal({scope: $scope, title: 'Login', template: 'components/login/login_modal.html', show: false});

    var _this = this;

    function configUpdater(config) {
      config.headers.authorization = 'bearer ' + localStorageService.get('token').token;
      return config;
    }

    $scope.getUsername = function() {
      return localStorageService.get('username');
    };
    $scope.username = localStorageService.get('username');

    this.login = function (user) {
      console.log('LoginCtrl.login()');
      $scope.errorMessage = null;
      loginService.login(user).then(function (t) {
        if (!t || t == null) {
          _this.handleLoginError();
          return;
        }
        $rootScope.loggedIn = true;
        localStorageService.set('token', t);
        localStorageService.set('username', user.username);
        myModal.hide();
        authService.loginConfirmed({}, configUpdater);
      }, function (response) {
        console.log('Error with status code', response.status);
        _this.handleLoginError();
      });
    };

    this.logout = function () {
      $rootScope.loggedIn = false;
      localStorageService.remove('token');
      localStorageService.remove('username');
      $scope.user = null;
    };

    this.handleLoginError = function () {
      console.log('loginError');
      $rootScope.loggedIn = false;
      localStorageService.remove('token');
      localStorageService.remove('username');
      $rootScope.username = null;
      $scope.user = null;
      $scope.errorMessage = 'Error';
    };

    this.clearError = function() {
       $scope.errorMessage=null;
    } ;


    $scope.open = function () {
      myModal.$promise.then(myModal.show);
    };

    $scope.$on('event:auth-loginRequired', function () {
      console.log('LoginCtrl: event:auth-loginRequired');
      $scope.errorMessage = null;
      myModal.$promise.then(myModal.show);
    });
    $scope.$on('event:auth-loginConfirmed', function () {
      console.log('LoginCtrl: event:auth-loginConfirmed');
    });

    $scope.$on('event:auth-loginCancelled', function () {
      console.log('LoginCtrl: event:auth-loginCancelled');
    });




  });
