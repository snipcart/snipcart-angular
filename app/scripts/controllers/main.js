'use strict';

angular.module('snipcartAngularApp')
  .controller('MainCtrl', function ($scope, products) {
    $scope.products = products;
  });
