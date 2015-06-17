'use strict';

angular.module('oregamiClientApp')
  .service('gamesService', ['Restangular', 'RestFulResponse',

    function gamesService(Restangular, RestFulResponse) {

      var url = 'games';

      return {
        getAll: function () {
          return Restangular.all(url).getList().$object;
        },
        updateOne: function (entity) {
          if (typeof entity.id == 'undefined' || entity.id === null) {
            return RestFulResponse.all(url).post(entity).then(function (response) {
              return response;
            });
          }
          var ret = entity.put();
          return ret;
        }
        ,
        getOne: function (id) {
          return Restangular.one(url, id).get();
        }
        ,
        getOneRevisionNumbers: function (entityId) {
          return Restangular.all(url + '/' + entityId + "/revisions").getList().$object;
        }
        ,
        getOneWithRevision: function (entityId, revision) {
          return Restangular.one(url + '/' + entityId + "/revisions/" + revision).get();
        }

      }

    }]);
