'use strict';

/**
 * @ngdoc function
 * @name snipcartAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snipcartAngularApp
 */
angular.module('snipcartAngularApp')
  .controller('MainCtrl', function ($scope, $http, Product) {
    var p = Product.query().then(function (d) {
      debugger;
    });
    debugger;
  });
