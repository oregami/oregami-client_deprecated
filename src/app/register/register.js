'use strict';

angular.module('oregamiClientApp')
    .controller('RegisterCtrl',
                ['$scope', 'Restangular', '$translatePartialLoader',
        function ($scope, Restangular, $translatePartialLoader) {

        $translatePartialLoader.addPart('register');
        $scope.registrationSuccess = false;

        $scope.submit = function () {
            $scope.errordata = null;
            var baseUsers = Restangular.all('user');
            var newAccount = Restangular.copy($scope.newuser);
            baseUsers.post(newAccount).then(function() {
                $scope.newuser = null;
                $scope.registrationSuccess = true;
            }, function(response){
                $scope.errordata = response.data;
                $scope.registrationSuccess = false;
            })
        };


        $scope.getError = function (fieldName) {
            var errors =  $scope.errordata;
            if (errors!=null) {
              for (var i = 0; i < errors.length; i++) {
                  if (typeof errors[i] !='undefined' && errors[i].context.field == fieldName) {
                      return errors[i].messageName;
                  }
              }
            }
            return "";
        }

        $scope.reset = function() {
            $scope.registrationSuccess = false;
            $scope.errordata = null;
            $scope.newuser = null;
        }

    }]);
