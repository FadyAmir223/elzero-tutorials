var
  gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass')(require('sass')),
  prefix = require('gulp-autoprefixer'),
  connect = require('gulp-connect'),
  sourcemaps = require('gulp-sourcemaps'),
  zip = require('gulp-zip');


gulp.task('html', () => {
  return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
             .pipe(pug(/* {pretty: true} */))
             .pipe(gulp.dest('dist/html'))
             .pipe(connect.reload());
})


gulp.task('css', () => {
  return gulp.src('src/sass/**/*.scss')
             .pipe(sourcemaps.init())
             .pipe(sass({outputStyle: 'compressed'}))
             .pipe(prefix('last 2 versions'))
             .pipe(sourcemaps.write('./maps'))
             .pipe(gulp.dest('dist/css'))
             .pipe(connect.reload());
})


gulp.task('js', () => {
  return gulp.src('src/scripts/**/*.js')
             .pipe(gulp.dest('dist/js'))
             .pipe(connect.reload());
});


gulp.task('watch', () => {
  gulp.watch('src/pug/**/*.pug', gulp.series('html'));
  gulp.watch('src/sass/**/*.scss', gulp.series('css'));
  gulp.watch('src/scripts/**/*.js', gulp.series('js'));
})


gulp.task('connect', () => {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8000
  });
})


gulp.task('zip', () => {
  return gulp.src('dist/**')
             .pipe(zip('file.zip'))
             .pipe(gulp.dest('.'))
})


gulp.task('default', gulp.parallel('connect', 'html', 'css', 'js', 'watch'));
