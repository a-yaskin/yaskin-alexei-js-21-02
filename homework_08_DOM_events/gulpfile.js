const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('less', function (done) {
    gulp.src('./src/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./src/'));
    done();
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './src/'
        },
        port: 3000
    });
    gulp.watch('./src/**/*').on('change', browserSync.reload);
});

gulp.task('build', function () {
    gulp.watch('./src/**/*.less', gulp.series('less'));
});

gulp.task('default', gulp.parallel('build', 'serve'));
