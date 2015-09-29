module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/angular-gravatar-image.js',
      'src/md5.js',
      'src/template/*.html',
      'test/spec/**/*.js'
    ],
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'template'
    },
    preprocessors: {
      'src/template/*.html': ['ng-html2js']
    },
    autoWatch: false,
    singleRun: true,
    browsers: ['Chrome'],
    reporters: ['dots'],
    exclude: []
  });
};