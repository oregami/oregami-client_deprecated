'use strict';

angular.module('oregamiClientApp')
  .controller('MainCtrl', [ '$scope', '$translatePartialLoader', function ($scope, $translatePartialLoader) {

        $translatePartialLoader.addPart('main');


  }]);
