'use strict';

describe('angular-gravatar-image', function() {

  var $scope, element, $compile;

  beforeEach(module('bgn.GravatarImage'));

  beforeEach(module('template'));

  beforeEach(inject(function(_$rootScope_, _$compile_, $httpBackend) {
    $compile = _$compile_;
    $scope = _$rootScope_;
  }));

  // it('should initialize', function() {
  //   element = angular.element('<gravatar-image></gravatar-image>');
  //   element = $compile(element)($scope);
  //   $scope.$apply();

  //   expect(element.find('img').length).toEqual(1);
  // });

  it('should initialize with email', function() {
    element = angular.element('<gravatar-image email="deerawan@gmail.com"></gravatar-image>');
    element = $compile(element)($scope);
    $scope.$apply();

    expect(element.find('div').html()).toEqual('http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50');
  });
});