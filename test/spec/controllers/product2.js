'use strict';

describe('Controller: Product2Ctrl', function () {

  // load the controller's module
  beforeEach(module('snipcartAngularApp'));

  var Product2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Product2Ctrl = $controller('Product2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Product2Ctrl.awesomeThings.length).toBe(3);
  });
});
