'use strict';

describe('Directive: inputs', function () {

  // load the directive's module
  beforeEach(module('b2bautosFrontpocApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inputs></inputs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inputs directive');
  }));
});
