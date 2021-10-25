const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('less', function (done) { // cb done() works quicker than return (5ms vs 50ms!)
    gulp.src('./src/**/*.less')
        .pipe(less())
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
    gulp.watch('./src/**/*.{html,js}', gulp.series('copy'));
});

gulp.task('default', gulp.parallel('build', 'serve'));
