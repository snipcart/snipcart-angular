'use strict';

angular.module('snipcartAngularApp')
  .controller('ProductsCtrl', function ($scope, $stateParams, product) {
    $scope.product = product;
  });
