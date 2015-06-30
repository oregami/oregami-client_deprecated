'use strict';

angular.module('oregamiClientApp')
  .service('gamingEnvironmentsService', ['Restangular', 'RestFulResponse', '$log',

    function gamingEnvironmentsService(Restangular, RestFulResponse, $log) {

      var url = 'gamingEnvironments';

      return {
        getAll: function () {
          return Restangular.all(url).getList().$object;
        },
        updateOne: function (entity) {
          $log.debug('updateOne: id=' + JSON.stringify(entity.id));
          if (typeof pf.id == 'undefined' || entity.id === null) {
            return RestFulResponse.all(url).post(entity).then(function (response) {
              console.log(JSON.stringify(response.headers));
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
        getOneRevisionNumbers: function (taskId) {
          return Restangular.all(url + '/' + taskId + "/revisions").getList().$object;
        }
        ,
        getOneWithRevision: function (taskId, revision) {
          return Restangular.one(url + '/' + taskId + "/revisions/" + revision).get();
        }

      }

    }
  ])
;
