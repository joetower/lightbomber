/**
 * @file
 * Gulpfile for lightbomber theme.
 */

'use strict';

var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    sass        = require('gulp-sass'),
    sassLint    = require('gulp-sass-lint'),
    minifyCSS   = require('gulp-minify-css'),
    prefix      = require('gulp-autoprefixer'),
    glob        = require('glob'),
    gulpicon    = require('gulpicon/tasks/gulpicon'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    stripDebug  = require('gulp-strip-debug'),
    rename      = require('gulp-rename'),
    browserSync = require('browser-sync'),
    conf        = require('./config.js'),
    paths       = conf.paths,
    iconConfig  = conf.icons,
    iconFiles   = glob.sync('./img/icons/*.svg');

iconConfig.dest = './img/icons';

/**
 * Task for linting javascript.
 */
gulp.task('lint', function () {
  return gulp.src([
    paths.sourceJs + '/**/*.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
});

/**
 * Task for processing javascript files into one file.
 */
gulp.task('scripts', function() {
  return gulp.src(paths.sourceJs + '/**/*.js')
    // Concatenate everything within the JavaScript folder.
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(paths.js))
    .pipe(rename('scripts.min.js'))
    // Strip all debugger code out.
    .pipe(stripDebug())
    // Minify the JavaScript.
    .pipe(uglify())
    .pipe(gulp.dest(paths.js));
});

/**
 * Task for compiling sass.
 */
gulp.task('styles', function() {
  return gulp.src(paths.sass + '/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix(['last 1 version', '> 1%', 'ie 8']))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.css));
});

/**
 * Task for generating icon colors/png fallbacks from svg.
 */
gulp.task('icons', gulpicon(iconFiles, iconConfig));

/**
 * Task for watching changes to files and running tasks on change.
 */
gulp.task('watch', function () {
  gulp.watch(paths.sourceJs + '/**/*.js', ['lint', 'scripts']);
  gulp.watch(paths.sass + '/**/*.scss', ['styles']);
});

/**
 * Task for running browserSync.
 */
gulp.task('browserSync', function () {
  browserSync.init(null, {
    proxy: '192.168.88.89',
    files: [
      paths.css +  '/**/*.css',
      paths.js + '/**/*.js',
      paths.img + '/**/*',
      paths.fonts + '/**/*',
    ]
  });
});

/**
 * Default gulp task.
 */
gulp.task('default', ['scripts', 'watch', 'styles']);
