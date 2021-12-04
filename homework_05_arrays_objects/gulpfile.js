const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './src/'
        },
        port: 3000
    });
    gulp.watch('./src/**/*').on('change', browserSync.reload);
});
