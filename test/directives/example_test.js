'use strict';

describe('Directive: Example', function () {
  var element;
  
  beforeEach(module('example'));
  beforeEach(module('alchemy', 'alch-templates'));

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<blah></blah>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('');
  }));

});
