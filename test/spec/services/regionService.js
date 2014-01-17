'use strict';

describe('Service: regionService', function () {

  // load the service's module
  beforeEach(module('oregamiClientApp'));

  // instantiate service
  var regionService;
  beforeEach(inject(function (_regionService_) {
    regionService = _regionService_;
  }));

  it('should do something', function () {
    expect(!!regionService).toBe(true);
  });

});
