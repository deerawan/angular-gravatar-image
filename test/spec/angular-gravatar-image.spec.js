'use strict';

describe('angular-gravatar-image', function() {

  var $scope, element, $compile;

  beforeEach(module('bgn.GravatarImage'));

  beforeEach(module('template'));

  beforeEach(inject(function(_$rootScope_, _$compile_, $httpBackend) {
    $compile = _$compile_;
    $scope = _$rootScope_;

    // $httpBackend.whenGET('angular-gravatar-image.html').passThrough();
  }));

  // afterEach(function() {
  //    $httpBackend.verifyNoOutstandingExpectation();
  //    $httpBackend.verifyNoOutstandingRequest();
  //  });

  it('should initialize', function() {
    element = angular.element('<gravatar-image></gravatar-image>');
    element = $compile(element)($scope);
    $scope.$apply();

    expect(element.find('img').length).toEqual(1);
  });
});