const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

const browserSync = require('browser-sync').create();

function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    cb();
}

function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}

function jsBabel() {
    return gulp.src('./src/js/index.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js/'))
}

function scssToCss() {
    return gulp.src('./src/sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
}

function copyHTML(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
}

function copyIMG(){
    return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img/'))
}

function watchFiles() {
    gulp.watch('./src/index.html', gulp.series(copyHTML, browserSyncReload))
    gulp.watch('./src/img/**/*', gulp.series(copyIMG, browserSyncReload))
    gulp.watch('./src/sass', gulp.series(scssToCss, browserSyncReload))
    gulp.watch('./src/js/*.js', gulp.series(jsBabel, browserSyncReload))
}

const build = gulp.series(copyHTML, copyIMG, scssToCss, jsBabel, browserSyncServe, watchFiles)

exports.default = build