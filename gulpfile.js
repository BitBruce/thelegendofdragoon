'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('default', ['sass'], function() {

});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(concat('all.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./public/stylesheets'));
});
