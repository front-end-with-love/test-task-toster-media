'use strict';

/* Plugins
********************
* browser-sync
* gulp
* gulp-autoprefixer
* gulp-clean
* gulp-concat
* gulp-load-plugins
* gulp-notify
* gulp-pug
* gulp-sass
* gulp-sourcemaps
* gulp-webp
* gulp-rename
* load
* sass
* gulp-postcss
* postcss-merge-rules
* postcss-combine-duplicated-selectors
* postcss-sort-media-queries
* postcss-discard-comments
* postcss-focus
*/

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  webp: require('gulp-webp'),
  clean: require('gulp-clean'),
  sass: require('gulp-sass')(require('sass')),
  postcss: require('gulp-postcss'),
  mergeRules: require('postcss-merge-rules'),
  combineSelectors: require('postcss-combine-duplicated-selectors'),
  sortMediaQueries: require('postcss-sort-media-queries'),
  removeComments: require('postcss-discard-comments'),
  cleanCSS: require('gulp-clean-css'),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'sass', 'scripts-base','scripts-run', 'img', 'img:svg', 'fonts'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('min', $.gulp.series(
  $.gulp.parallel('pug', 'sass:min', 'scripts-base', 'scripts-run', 'img', 'img:svg', 'fonts')
));
