'use strict';

angular.module('snipcartAngularApp')
  .controller('MainCtrl', function ($scope, Product) {
    Product.query().then(function (data) {
      $scope.products = data;
    })
  });
