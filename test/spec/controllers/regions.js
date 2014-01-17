'use strict';

describe('Controller: RegionsCtrl', function () {

  // load the controller's module
  beforeEach(module('oregamiClientApp'));

  var RegionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegionsCtrl = $controller('RegionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
