module.exports = function () {
  // base
  $.gulp.task('scripts-base', function () {
    return $.gulp.src(
      [
        'src/static/**/{,*/}*.js',
      ], {allowEmpty: true}
    )
      .pipe($.gp.concat('app-project-base.js'))
      .pipe($.gulp.dest('build/js/'))
      .on('end', $.bs.reload);
  });
  // run
  $.gulp.task('scripts-run', function () {
    return $.gulp.src(
      [
        'src/blocks/**/{,*/}*.js',
      ], {allowEmpty: true}
    )
      .pipe($.gp.concat('app-project-run.js'))
      .pipe($.gulp.dest('build/js/'))
      .on('end', $.bs.reload);
  });
};
