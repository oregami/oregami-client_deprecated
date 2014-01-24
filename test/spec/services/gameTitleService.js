'use strict';

describe('Service: gameTitleService', function () {

  // load the service's module
  beforeEach(module('oregamiClientApp'));

  // instantiate service
  var gameTitleService;
  beforeEach(inject(function (_gameTitleService_) {
    gameTitleService = _gameTitleService_;
  }));

  it('should do something', function () {
    expect(!!gameTitleService).toBe(true);
  });

});
