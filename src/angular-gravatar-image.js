(function() {
  'use strict';

  angular
    .module('bgn.GravatarImage', ['bgn.md5'])
    .directive('gravatarImage', gravatarImage);

  function gravatarImage() {
    var directive = {
      restrict: 'EA',
      scope: {
        email: '@'
      },
      template: '<img ng-src="{{url}}" />',
      controller: GravatarImageController,
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      var parameters = '';

      if (attrs.size) {
        parameters += 'size=' + attrs.size;
      }

      if (attrs.default) {
        parameters += '&default=' + attrs.default;
      }

      if (attrs.forcedefault) {
        parameters += '&forcedefault=' + attrs.forcedefault;
      }

      if (attrs.rating) {
        parameters += '&rating=' + attrs.rating;
      }

      if (parameters != '') {
        scope.url = scope.url + '?' + parameters;
      }


    }
  }

  GravatarImageController.$inject = ['$scope', 'md5'];

  function GravatarImageController($scope, md5) {
    var md5Hash = md5.encrypt($scope.email);
    $scope.url = 'http://www.gravatar.com/avatar/' + md5Hash;
  }

}());