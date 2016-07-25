'use strict';

angular.module('snipcartAngularApp')
  .controller('ProductsCtrl', function ($scope, $stateParams, Product) {
    Product.get($stateParams.productId).then(function (product) {
      $scope.product = product;
    });
  });
