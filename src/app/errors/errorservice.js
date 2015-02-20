'use strict';

/**
 * @ngdoc service
 * @name oregamiClientApp.errorService
 * @description
 * # errorService
 * Service in the oregamiClientApp.
 */
angular.module('oregamiClientApp')
  .service('errorService', function errorService() {

        return {
            getError : function (errors, fieldName, entity) {
                var id = entity.id;
                if (id==null || id == "") {
                    id = entity.validationId;
                }
                if (errors!=null) {
                    for (var i = 0; i < errors.length; i++) {
                        if (typeof errors[i] !='undefined' && errors[i].context.field == fieldName) {
                            if (id!=null) {
                                if (id==errors[i].context.id) {
                                    return errors[i].messageName;
                                }
                            } else {
                                //return errors[i].messageName;
                            }
                        }
                    }
                }
                return "";
            } ,

            validationId : function() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                    return v.toString(16);
                });
            }

        }

  });
