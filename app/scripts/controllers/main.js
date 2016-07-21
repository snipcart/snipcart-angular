'use strict';

/**
 * @ngdoc function
 * @name snipcartAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snipcartAngularApp
 */
angular.module('snipcartAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/data/products.json').then(function(res) {
  		$scope.products = res.data;
  		console.log(res.data)
    });
  });
