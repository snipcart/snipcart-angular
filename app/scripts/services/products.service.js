'use strict';

/**
 * @ngdoc service
 * @name snipcartAngularApp.products.service
 * @description
 * # products.service
 * Service in the snipcartAngularApp.
 */
angular.module('snipcartAngularApp')
  .factory('Product', function ($http) {
    var json = $http.get('/data/products.json').then(function (response) {
      return response.data;
    });

    return {
      query: function() {
        return json;
      },
      get: function(id) {
        return json.then(function (items) {
          angular.forEach(items, function (item) {
            if (id == item.id) {
              return item;
            }
          })
        }).promise;
      }
    };
  });
