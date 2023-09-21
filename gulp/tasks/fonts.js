module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src('src/static/fonts/**/*.{eot,svg,ttf,woff,woff2}')
      .pipe($.gulp.dest('build/fonts'))
  });
}
