const gulp = require('gulp');
const less = require('gulp-less');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

gulp.task('less', function (done) { // cb done() works quicker than return (5ms vs 50ms!)
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/'));
    done();
});

gulp.task('sass', function (done) {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/'));
    done();
});

gulp.task('copy', function (done) {
    gulp.src('./src/**/*.{html,js}')
        .pipe(gulp.dest('./build/'));
    done();
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './build/'
        },
        port: 3000
    });
    gulp.watch('./build/**/*').on('change', browserSync.reload);
});

gulp.task('build', function () {
    gulp.watch('./src/**/*.less', gulp.series('less'));
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/**/*.{html,js}', gulp.series('copy'));
});

gulp.task('distr', function (done) {
    gulp.src('./build/**/*.css')
        .pipe(postcss([cssnano]))
        .pipe(gulp.dest('./dist/'));
    gulp.src('./build/**/*.{html,js}')
        .pipe(gulp.dest('./dist/'));
    done();
});

gulp.task('default', gulp.parallel('build', 'serve'));
