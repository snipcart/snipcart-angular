'use strict';

angular.module('snipcartAngularApp')
  .component('productListItem', {
    templateUrl: 'views/productlistitem.html',
    bindings: {
      'product': '<'
    }
  });
