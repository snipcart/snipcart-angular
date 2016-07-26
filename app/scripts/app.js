'use strict';

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
        controller: 'MainCtrl',
        resolve: {
          products: function($q, Product) {
            var def = $q.defer();
            Product.query().then(function (data) {
              def.resolve(data);
            });
            return def.promise;
          }
        }
      })
      .state('productDetails', {
        url: '/products/{productId}',
        templateUrl: 'views/productDetails.html',
        controller: 'ProductsCtrl',
        resolve: {
          product: function ($q, $stateParams, Product) {
            var def = $q.defer();
            Product.get($stateParams.productId).then(function (data) {
              def.resolve(data);
            });
            return def.promise;
          }
        }
      });
  });
