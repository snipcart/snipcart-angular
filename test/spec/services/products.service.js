'use strict';

describe('Service: products.service', function () {

  // load the service's module
  beforeEach(module('snipcartAngularApp'));

  // instantiate service
  var products.service;
  beforeEach(inject(function (_products.service_) {
    products.service = _products.service_;
  }));

  it('should do something', function () {
    expect(!!products.service).toBe(true);
  });

});
