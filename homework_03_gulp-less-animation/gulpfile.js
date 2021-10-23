const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('less', function (done) { // requires a callback to signal async completion
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/'));
    done();
});

gulp.task('html', function (done) {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build/'));
    done();
});

gulp.task('js', function (done) {
    gulp.src('./src/**/*.js')
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

gulp.task('less:watch', function () {
    gulp.watch('./src/**/*.less', gulp.series('less'));
});

gulp.task('html:watch', function () {
    gulp.watch('./src/**/*.html', gulp.series('html'));
});

gulp.task('js:watch', function () {
    gulp.watch('./src/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.parallel('less:watch', 'html:watch', 'js:watch', 'serve'));
