'use strict';

angular.module('snipcartAngularApp')
  .factory('Product', function ($http, $q) {
    var json = $http.get('/data/products.json').then(function (response) {
      return response.data;
    });

    return {
      query: function() {
        return json;
      },
      get: function(id) {
        var q = $q.defer();

        json.then(function (items) {
          angular.forEach(items, function (item) {
            if (id == item.id) {
              q.resolve(item);
              return;
            }
          })
        });

        return q.promise;
      }
    };
  });
