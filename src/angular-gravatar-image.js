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
      template: '<div><img src="{{url}}" /></div>',
      controller: GravatarImageController
      // link: function(scope) {
      //   scope.url = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
      // }
    };

    return directive;
  }

  GravatarImageController.$inject = ['$scope', 'md5'];

  function GravatarImageController($scope, md5) {
    // $scope.url = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
    $scope.url = md5.encrypt('deerawan@gmail.com');
  }

}());