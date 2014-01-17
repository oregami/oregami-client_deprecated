'use strict';

describe('Service: languageService', function () {

  // load the service's module
  beforeEach(module('oregamiClientApp'));

  // instantiate service
  var languageService;
  beforeEach(inject(function (_languageService_) {
    languageService = _languageService_;
  }));

  it('should do something', function () {
    expect(!!languageService).toBe(true);
  });

});
