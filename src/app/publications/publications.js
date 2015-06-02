'use strict';

angular.module('oregamiClientApp')
  .controller('PublicationsCtrl', ['$scope', 'publicationService', '$translate', '$translatePartialLoader', '$routeParams',
    function ($scope, $publicationService, $translate, $translatePartialLoader, $routeParams) {

      var service = $publicationService;

      $scope.id = $routeParams.publicationsId;

      $translatePartialLoader.addPart('publications');
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

      $scope.tabs = ["publications", "revisions"];
      $scope.tabs.activeTab = "publications";

    }]);
