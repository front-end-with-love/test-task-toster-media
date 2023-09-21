module.exports = function () {
  $.gulp.task('img', function () {
    return $.gulp.src('src/static/img/optimized/**/*.{png,jpeg,JPEG,jpg,JPG,tiff,webp}')
      .pipe($.gulp.dest('build/img/'))
      .pipe($.webp())
      .pipe($.gulp.dest('build/img/'))
  });
  $.gulp.task('img:svg', function () {
    return $.gulp.src('src/static/img/icon/optimized/**/*.svg')
      .pipe($.gulp.dest('build/img/icon/'))
  });
}
