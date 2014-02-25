'use strict';

describe('Service: websiteService', function () {

  // load the service's module
  beforeEach(module('oregamiClientApp'));

  // instantiate service
  var websiteService;
  beforeEach(inject(function (_websiteService_) {
    websiteService = _websiteService_;
  }));

  it('should do something', function () {
    expect(!!websiteService).toBe(true);
  });

});
