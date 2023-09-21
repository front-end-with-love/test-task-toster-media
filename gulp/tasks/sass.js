module.exports = function () {
  // Для верстки
  $.gulp.task('sass', function () {
    return $.gulp.src('src/app-project.sass')
      .pipe($.gp.sourcemaps.init())
      .on("error", $.gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      .pipe($.sass({
        outputStyle: 'expanded'
      }))
      .pipe($.gp.rename('app-project.css'))
      .pipe($.gp.sourcemaps.write('./'))
      .pipe($.gulp.dest('build/css/'))
      .on('end', $.bs.reload);
  });
  // Для бека
  $.gulp.task('sass:min', function () {
    return $.gulp.src('src/app-project.sass')
      .pipe($.gp.sourcemaps.init())
      .on("error", $.gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      // SASS
      .pipe($.sass({
        outputStyle: 'compressed'
      }))
      // Autoprefixer
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 Chrome versions', 'Safari >= 8']
      }))
      // Очистка лишнего CSS
      .pipe($.cleanCSS())
      // Удаление комментариев
      .pipe($.gp.postcss(
        [$.removeComments({
          removeAll: true
        })]
      ))
      // Объединение/удаление дубликатов и общая оптимизация стилей
      .pipe($.gp.postcss(
        [$.mergeRules()]
      ))
      .pipe($.gp.postcss(
        [$.combineSelectors({
          removeDuplicatedValues: true
        })]
      ))
      // Сортировка медиа-запросов и перемещение их в конец файла
      .pipe($.gp.postcss(
        [$.sortMediaQueries({
          sort: 'desktop-first'
        })]
      ))
      // Минификация
      .pipe($.sass({
        outputStyle: 'compressed'
      }))
      .pipe($.gp.rename('app-project.min.css'))
      .pipe($.gulp.dest('build/css/'))
      .on('end', $.bs.reload);
  });
}
