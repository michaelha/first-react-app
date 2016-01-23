//require gulp
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
// watchify watches for change files
var watchify = require('watchify');
var reactify = require('reactify');

// initial gulp task default
gulp.task('default', function(){

  var bundler = watchify(browserify({
    // the main file
    entries: ['./src/app.jsx'],
    // just boilerplates below
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

});
