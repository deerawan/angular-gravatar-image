(function() {
  'use strict';

  angular
    .module('bgn.GravatarImage', [])
    .directive('gravatarImage', gravatarImage);

  function gravatarImage() {
    var directive = {
      restrict: 'EA',
      template: '<img />'
    };

    return directive;

  }

}());