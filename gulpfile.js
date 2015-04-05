var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    coffee = require('gulp-coffee'),
    browserSync = require('browser-sync');

gulp.task('templates', function() {
  var locs = {};
  gulp.src('./src/**/*.jade')
    .pipe(jade({locals: locs}))
    .pipe(gulp.dest('./public'))
});

gulp.task('scripts', function() {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', log))
    .pipe(gulp.dest('./public/assets'))
});

gulp.task('styles', function() {
  gulp.src('./src/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/assets'))
});

gulp.task('watch', function() {
	log('Watching files');
	gulp.watch('./src/**/*', ['build']);
});

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: './public'
    }
  });
});

gulp.task('clean', function() {
  gulp.src(['./public/assets', './public/index.html'], {read: false}).pipe(clean());
});

//define cmd line default task
gulp.task('build', ['templates', 'styles', 'scripts']);
gulp.task('default', ['build', 'watch', 'browserSync']);
