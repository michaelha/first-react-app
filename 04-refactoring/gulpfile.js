var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

// initial gulp task default
gulp.task('default', function(){
  // will write a series of instruction for work to compile
  // the following tells gulp to load all the file inside src directory
  return gulp.src('src/**')
    // .pipe chains the commands
    // turn jsx into js
    .pipe(react())
    // do the next step
    // join all the files together. new file is application.js
    .pipe(concat('application.js'))
    // save the new file in current working dir './'
    .pipe(gulp.dest('./'))
});
