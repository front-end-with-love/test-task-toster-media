module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src(
      [
        'src/tpls/**/*.pug',
      ]
    )
      .pipe($.gp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('build'))
      .on('end', $.bs.reload);
  });
}
