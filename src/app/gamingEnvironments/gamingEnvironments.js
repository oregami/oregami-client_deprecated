'use strict';

angular.module('oregamiClientApp')
  .controller('GamingEnvironmentsCtrl', ['$scope', 'gamingEnvironmentsService', '$translate', '$translatePartialLoader', '$routeParams',
    function ($scope, $gamingEnvironmentsService, $translate, $translatePartialLoader, $routeParams) {

      var service = $gamingEnvironmentsService;

      $scope.id = $routeParams.gamingEnvironmentId;

      $translatePartialLoader.addPart('gamingEnvironments');
      $translatePartialLoader.addPart('languages');

      $scope.loadAll = function () {
        $scope.list = service.getAll();
      };
      $scope.loadOne = function (id) {
        $scope.loadOneWithRevision(id, null);
      }

      $scope.loadOneWithRevision = function (id, revision) {
        $scope.revisions = service.getOneRevisionNumbers($scope.id);
        $scope.currentRevision = revision;
        if (revision == null) {
          service.getOne($scope.id).then(function (t) {
            $scope.one = t;
          });
        } else {
          service.getOneWithRevision($scope.id, $scope.revision).then(function (t) {
            $scope.one = t;
          });
        }

      }

      if ($scope.id == null) {
        $scope.loadAll();
      } else {
        $scope.list = {};
        if ($routeParams.revision != null) {
          $scope.revision = $routeParams.revision;
          $scope.loadOneWithRevision($scope.id, $scope.revision);
        } else {
          $scope.loadOne($scope.id);
        }
      }

      $scope.activatePublication = function (pId) {
        $scope.activePublicationId = pId;
      }

      $scope.getDate = function (timestamp) {
        return moment(timestamp).format('YYYY-MM-DD HH:mm');
      }

      $scope.tabs = ["titles", "models", "revisions"];
      $scope.tabs.activeTab = "titles";


    }]);
