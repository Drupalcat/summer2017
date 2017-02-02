/*
* Dependencies
*/
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  shell = require('gulp-shell'),
  browserSync = require('browser-sync').create();

/*
* Task for building _site when something changed
*/
gulp.task('build', shell.task(['bundle exec jekyll build --watch']));
// Or if you don't use bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

/*
* Task for serving _site with Browsersync
*/
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

/*
* Compress js files
*/
gulp.task('compress', function (cb) {
  pump([
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('assets/js-min')
    ],
    cb
  );
});
/*
* Default Task
*/
gulp.task('default', ['compress', 'build', 'serve']);