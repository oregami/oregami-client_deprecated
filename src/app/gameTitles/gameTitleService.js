'use strict';

angular.module('oregamiClientApp')
  .service('gameTitleService', ['Restangular', 'RestFulResponse',

    function gameTitleService(Restangular, RestFulResponse) {

      var url = 'gameTitle';

      return {
        getAll: function() {
          return Restangular.all(url).getList().$object;
        },
        updateOne: function (entity) {
          if (typeof entity.id == 'undefined' || entity.id === null) {
            return RestFulResponse.all(url).post(entity).then(function (response) {
              console.log('updateOne => ' + JSON.stringify(response));
              return response;
            });
          }
          var ret = entity.put();
          return ret;
        }
        ,
        getOne: function(id) {
          return Restangular.one(url, id).get();
        }
        ,
        getOneRevisionNumbers: function(id) {
          return Restangular.all(url + '/' +  id + "/revisions").getList().$object;
        }
        ,
        getOneWithRevision: function(id, revision) {
          return Restangular.one(url + '/' +  id + "/revisions/" + revision).get();
        }

      }

    }]);

