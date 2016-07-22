'use strict';

/**
 * @ngdoc overview
 * @name snipcartAngularApp
 * @description
 * # Angular e-commerce website powered by Snipcart
 *
 * Main module of the application.
 */
angular
  .module('snipcartAngularApp', ['ui.router'])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/');

    // This rule will remove the trailing !/ that Snipcart does not remove when
    // the cart is closed. It allows Angular to navigate to the expected route.
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      var match = path.match(/(.*)!\/{0,1}$/);

      if (match) {
        return match[1];
      }
    });

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('productDetails', {
        url: '/products/{productId}',
        templateUrl: 'views/productDetails.html',
        controller: 'ProductsCtrl'
      });
  });
