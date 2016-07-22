'use strict';

/**
 * @ngdoc component
 * @name snipcartAngularApp.components.buyButton
 * @description
 * # buyButton.component
 * Component to render buy button.
 */
angular.module('snipcartAngularApp')
  .component('buyButton', {
    templateUrl: 'views/buybutton.html',
    bindings: {
      'product' : '<'
    },
    controller: function () {
      this.product = this.product;
    }
  });
