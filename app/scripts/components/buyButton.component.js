'use strict';

angular.module('snipcartAngularApp')
  .component('buyButton', {
    templateUrl: 'views/buybutton.html',
    bindings: {
      'product' : '<'
    }
  });
