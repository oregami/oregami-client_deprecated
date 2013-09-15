'use strict';

describe('Controller: PersonsCtrl', function () {

  // load the controller's module
  beforeEach(module('oregamiClientApp'));

  var PersonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonsCtrl = $controller('PersonsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
