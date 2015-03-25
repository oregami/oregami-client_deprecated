'use strict';

angular.module('oregamiClientApp')
  .service('gameTitleService', ['Restangular',

    function gameTitleService(Restangular) {

      var url = 'gameTitle';

      return {
        getAll: function() {
          return Restangular.all(url).getList().$object;
        },
        updateOne: function(task) {
          var ret = task.put();
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

