'use strict';

angular.module('oregamiClientApp')
  .service('publicationService', ['Restangular', 'RestFulResponse',

    function publicationService(Restangular, RestFulResponse) {

      var url = 'publicationFranchise';

      return {
        getAll: function () {
          return Restangular.all(url).getList().$object;
        },
        updateOne: function (pf) {
          console.log('updateOne: id=' + JSON.stringify(pf.id));
          if (typeof pf.id == 'undefined' || pf.id === null) {
            return RestFulResponse.all(url).post(pf).then(function (response) {
              console.log(JSON.stringify(response.headers));
              return response;
            });
          }
          var ret = pf.put();
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
