'use strict';

/**
 * @ngdoc function
 * @name snipcartAngularApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the snipcartAngularApp
 */
angular.module('snipcartAngularApp')
  .controller('ProductsCtrl', function ($scope, $route, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
