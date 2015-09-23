(function() {
  'use strict';

  angular
    .module('bgn.GravatarImage', [])
    .directive('gravatarImage', gravatarImage);

  function gravatarImage() {
    var directive = {
      restrict: 'EA',
      scope: {
        email: '@'
      },
      template: '<div><img src="{{url}}" /></div>',
      controller: gravatarImageController
      // link: function(scope) {
      //   scope.url = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
      // }
    };

    return directive;
  }

  gravatarImageController.$inject = ['$scope'];
  function gravatarImageController($scope) {
    $scope.url = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  }

}());