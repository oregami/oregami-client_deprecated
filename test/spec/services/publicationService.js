'use strict';

describe('Service: publicationService', function () {

  // load the service's module
  beforeEach(module('oregamiClientApp'));

  // instantiate service
  var publicationService;
  beforeEach(inject(function (_publicationService_) {
    publicationService = _publicationService_;
  }));

  it('should do something', function () {
    expect(!!publicationService).toBe(true);
  });

});
