'use strict'

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')(require('./salad.config.json'))

gulp.task('compile', function () {
  let postcssors = [
    salad
  ]
  return gulp.src('./src/**/*.css')
    .pipe(postcss(postcssors))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('build', gulp.series(['compile', 'copyfont']))
gulp.task('watch', gulp.series(function () {
  gulp.watch('./src/**/*.css', gulp.series(['compile']))
}))
