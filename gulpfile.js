const gulp = require('gulp');
const stylus = require('gulp-stylus');
const jade = require('gulp-pug');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync');

const paths = {
  styles: {
    src: 'src/**/*.styl',
    dest: 'public/assets/'
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'public/assets/'
  },
  templates: {
      src: './src/**/*.jade',
      dest: 'public'
  }
};

function serve() {
    browserSync({
      server: {
        baseDir: './public'
      }
    });
  };

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'public/assets' ]);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

function templates() {
  var locs = {};
  return gulp.src(paths.templates.src)
    .pipe(jade({locals: locs}))
    .pipe(gulp.dest(paths.templates.dest))
}
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts, templates), serve);

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;