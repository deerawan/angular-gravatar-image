'use strict';

describe('angular-gravatar-image', function() {

  var $scope, element, $compile;

  beforeEach(module('bgn.GravatarImage'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
  }));

  it('should initialize', function() {
    element = angular.element('<gravatar-image></gravatar-image>');
    element = $compile(element)($scope);
    $scope.$apply();

    expect(element.find('img').length).toEqual(1);
  });
});