//import capserJs from 'gulp-casperjs-local';
var gulp = require('gulp');
var casperJs = require('gulp-casperjs');

gulp.task('test', function() {
    gulp.src('test.js')
        .pipe(casperJs());
});
