import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  minify = require('gulp-minify'),
  connect = require('gulp-connect'),
  zip = require('gulp-zip'),
  replace = require('gulp-replace'),
  purgecss = require('gulp-purgecss'),
  babel = require('gulp-babel');

import imagemin from 'gulp-imagemin';
import gulpBrotli from 'gulp-brotli';
import zlib from 'zlib';

const paths = {
  html: { src: 'src/html/pug/pages/*.pug' },
  css: { src: 'src/css/sass/pages/*.scss' },
  js: { src: 'src/js/pages/*.js' },
};

// HTML
gulp.task('html-dev', () => {
  return gulp.src([paths.html.src, '!src/html/pug/pages/_*.pug'])
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('src/html/dist'))
        .pipe(connect.reload());
});

gulp.task('html-import-pord', () => {
  return gulp.src('src/html/pug/**/*.pug')
        .pipe(replace(/(include)*-dev/g, '-prod'))
        .pipe(replace('../../image/', '../image/'))
        .pipe(gulp.dest('src/html/pug'));
});

gulp.task('html-import-dev', () => {
  return gulp.src('src/html/pug/**/*.pug')
        .pipe(replace(/(include)*-prod/g, '-dev'))
        .pipe(replace('../image/', '../../image/'))
        //  /\.\.\/(im.*g*)/ig
        .pipe(gulp.dest('src/html/pug'));
});

gulp.task('html-compile', () => {
  return gulp.src([paths.html.src, '!src/html/pug/pages/_*.pug'])
        .pipe(pug())
        .pipe(gulp.dest('dist/html'));
});

gulp.task('html-prod', gulp.series('html-import-pord', 'html-compile', 'html-import-dev'));


// CSS
gulp.task('css-dev', () => {
  return gulp.src(paths.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('src/css/dist'))
        .pipe(connect.reload());
});

gulp.task('css-libs', () => {
  return gulp.src(['src/css/libs/**/*.css', 'src/css/libs/**/*.scss'])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(purgecss({content: ['src/html/dist/**/*.html']}))
  .pipe(concat('libs.css'))
  .pipe(gulp.dest('dist/css'))
});

gulp.task('webfonts', () => {
  return gulp.src('src/css/webfonts/*')
  .pipe(gulp.dest('dist/webfonts'))
});

gulp.task('css-compile', () => {
  return gulp.src(paths.css.src)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(purgecss({content: ['src/html/dist/**/*.html', 
        "src/js/**/*.js"]}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css-prod', gulp.series('css-compile', 'css-libs', 'webfonts'));


// JS
gulp.task('js-dev', () => {
  return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('src/js/dist'))
        .pipe(connect.reload());
});

gulp.task('js-libs', () => {
  return gulp.src('src/js/libs/*.js')
        .pipe(concat('libs.js'))
        .pipe(minify({ext: {min: '.js'}, noSource: true}))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('js-compile', () => {
  return gulp.src(paths.js.src)
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(minify({ext: {min: '.js'}, noSource: true}))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('js-prod', gulp.series('js-compile', 'js-libs'));

// IMG
gulp.task('img', () => {
  return gulp.src('src/image/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
});


// ZIP
gulp.task('zip', () => {
  return gulp.src('dist/**')
        .pipe(zip('project.zip'))
        .pipe(gulp.dest('.'))
});


// compress
gulp.task('br-html', () => {
  return gulp.src('dist/html/**/*.html')
        .pipe(gulpBrotli())
        .pipe(gulp.dest('compress/html'))
});

gulp.task('br-css', () => {
  return gulp.src('dist/css/**/*.css')
        .pipe(gulpBrotli())
        .pipe(gulp.dest('compress/css'))
});

gulp.task('br-js', () => {
  return gulp.src('dist/js/**/*.js')
        .pipe(gulpBrotli())
        .pipe(gulp.dest('compress/js'))
});

gulp.task('compress', gulp.series('br-html', 'br-css', 'br-js'));


// LOCAL SERVER
gulp.task('connect', () => {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8000
  });
});


gulp.task('watch', () => {
  gulp.watch('src/html/pug/**/*.pug', gulp.series('html-dev'));
  gulp.watch('src/css/sass/**/*.scss', gulp.series('css-dev'));
  gulp.watch('src/js/**/*.js', gulp.series('js-dev'));
});


gulp.task('default', gulp.parallel('connect', 'html-dev', 'css-dev', 'js-dev', 'watch'));

gulp.task('final', gulp.series('html-prod', 'css-prod', 'js-prod' 
/* , 'img', 'compress', 'zip' */));
