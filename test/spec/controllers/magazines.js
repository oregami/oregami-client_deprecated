'use strict';

describe('Controller: MagazinesCtrl', function () {

  // load the controller's module
  beforeEach(module('oregamiClientApp'));

  var MagazinesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MagazinesCtrl = $controller('MagazinesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
