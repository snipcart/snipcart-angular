'use strict';

/**
 * @ngdoc component
 * @name snipcartAngularApp.components.productListItem
 * @description
 * # productListItem.component
 * Component to render productListItem.
 */
angular.module('snipcartAngularApp')
  .component('productListItem', {
    templateUrl: 'views/productlistitem.html',
    bindings: {
      'product': '<'
    },
    controller: function () {
      this.product = this.product;
    }
  });
