'use strict';

/**
 * @ngdoc function
 * @name snipcartAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snipcartAngularApp
 */
angular.module('snipcartAngularApp')
  .controller('MainCtrl', function ($scope, Product) {
    Product.query().then(function (data) {
      $scope.products = data;
    })
  });
