'use strict';

angular.module('oregamiClientApp')
  .service('publicationService', ['Restangular',

     function publicationService(Restangular) {

        return {
            getPublications: function() {
                return Restangular.all("publicationFranchise").getList();
            }
        }

  }]);
