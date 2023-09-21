module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch(['src/tpls/**/*.pug', 'src/blocks/**/{,*/}*.pug'], $.gulp.series('pug'));
    $.gulp.watch([
      'src/static/sass/**/{,*/}*.{scss,sass}',
      'src/blocks/**/{,*/}*.{scss,sass}',
      'src/**/{,*/}*.{scss,sass}'
    ], $.gulp.series('sass'));
    $.gulp.watch([
      'src/static/libs/**/{,*/}*.js',
    ], $.gulp.series([
      'scripts-base',
    ]));
    $.gulp.watch([
      'src/blocks/**/{,*/}*.js',
    ], $.gulp.series([
      'scripts-run',
    ]));
    $.gulp.watch('src/static/img/**/{,*/}*.{png,gif,jpg,jpeg,bmp,webp}', $.gulp.series('img'));
    $.gulp.watch('src/static/img/**/{,*/}*.svg', $.gulp.series('img:svg'));
    $.gulp.watch('src/static/fonts/**/{,*/}*.{woff,truetype,opentype,svg,otf,ttf}', $.gulp.series('fonts'));
    // $.gulp.watch('src/static/libs/**/{,*/}*.js', $.gulp.series('copy'));
  });
}
