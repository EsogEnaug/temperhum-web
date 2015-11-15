'use strict';

angular.module('tempmon.services', ['ngResource'])

.factory('Temperature', ['$resource',
  function($resource){
    return $resource('http://192.168.1.34:8080/api/v1/temperature/1/?format=json', {}, {});
  }])

.factory('Humidity', ['$resource',
  function($resource){
    return $resource('http://192.168.1.34:8080/api/v1/humidity/1/?format=json', {}, {});
  }]);
