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

  // tells bundler to do something
  function build(file) {
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      // if there's ever an error. console.log it
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      // put the compiled file to main.js
      .pipe(source('main.js'))
      // like concat
      .pipe(gulp.dest('./'));
  }


  // run gulp will immediately build
  build();
  // whenever we change file, build again
  bundler.on('update', build);

});
