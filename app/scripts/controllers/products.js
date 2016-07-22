'use strict';

/**
 * @ngdoc function
 * @name snipcartAngularApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the snipcartAngularApp
 */
angular.module('snipcartAngularApp')
  .controller('ProductsCtrl', function ($scope, $stateParams, Product) {
    Product.get($stateParams.productId).then(function (product) {
      $scope.product = product;
    });
  });
