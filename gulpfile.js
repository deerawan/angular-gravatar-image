'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var Server = require('karma').Server;

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'    
  }, done).start();
});

gulp.task('default', ['lint', 'test'], function() {

});