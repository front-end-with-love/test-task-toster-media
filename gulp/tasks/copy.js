module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src(
      [
        // 'src/static/libs/js/',
      ]
    )
      .pipe($.gulp.dest('build/js/'))
      .on('end', $.bs.reload);
  });
};
