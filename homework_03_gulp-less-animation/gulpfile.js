const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function (done) {
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/'));
    done();
});
