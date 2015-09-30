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

    expect(element.find('img').attr('src')).toEqual('http://www.gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0');
  });
});