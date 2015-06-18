'use strict';

angular.module('oregamiClientApp')
  .service('publicationService', ['Restangular', 'RestFulResponse',

    function publicationService(Restangular, RestFulResponse) {

      var url = 'publicationFranchise';

      return {
        getAll: function () {
          return Restangular.all(url).getList().$object;
        },
        updateOne: function (entity) {
          console.log('updateOne: id=' + JSON.stringify(entity.id));
          if (typeof entity.id == 'undefined' || entity.id === null) {
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
