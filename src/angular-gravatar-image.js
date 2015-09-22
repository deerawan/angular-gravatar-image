(function() {
  'use strict';

  angular
    .module('bgn.GravatarImage', [])
    .directive('gravatarImage', gravatarImage);

  function gravatarImage() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'template/angular-gravatar-image.html'
    };

    return directive;

  }

}());