'use strict';

describe('Service: gamesService', function () {

  // load the service's module
  beforeEach(module('oregamiClientApp'));

  // instantiate service
  var gamesService;
  beforeEach(inject(function(_gamesService_) {
    gamesService = _gamesService_;
  }));

  it('should do something', function () {
    expect(!!gamesService).toBe(true);
  });

});
