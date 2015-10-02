'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var Server = require('karma').Server;

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
});

gulp.task('concat', function() {
  return gulp.src(['src/md5.js', 'src/angular-gravatar-image.js'])
    .pipe(concat('angular-gravatar-image.js'))
    .pipe(gulp.dest('./'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('watch', function() {
  watch('src/*.js', batch(function(events, done) {
      gulp.start('build', done);
    }));
});

gulp.task('build', ['lint', 'test', 'concat']);

gulp.task('default', ['build']);