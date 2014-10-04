'use strict';

angular.module('oregamiClientApp')
  .service('publicationService', ['Restangular',

     function publicationService(Restangular) {

         var url = 'publicationFranchise';

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
             getOneRevisionNumbers: function(taskId) {
                 return Restangular.all(url + '/' +  taskId + "/revisions").getList().$object;
             }
             ,
             getOneWithRevision: function(taskId, revision) {
                 return Restangular.one(url + '/' +  taskId + "/revisions/" + revision).get();
             }

         }

  }]);
