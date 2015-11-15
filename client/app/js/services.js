'use strict';

angular.module('tempmon.services', ['ngResource'])

.factory('Weather', ['$resource',
  function($resource){
    return $resource('http://192.168.1.34:8080/api/v1/:type/?format=json&limit=:limit&order_by=:order', {
        limit: 20,
        order: 'dt',
    }, {
        latest: {
            method: 'get',
            params: {
                limit: 1,
                order: '-dt',
            },
            transformResponse: function(data, headersGetter) {
                var djson = angular.fromJson(data);
                return djson.objects[0];
            }
        },
        history: {
            method: 'get',
            isArray: true,
            params: {
                limit: 5,
                order: '-dt',
            },
            transformResponse: function(data, headersGetter) {
                var djson = angular.fromJson(data);
                return djson.objects;
            }
        }
    });

  }]);
