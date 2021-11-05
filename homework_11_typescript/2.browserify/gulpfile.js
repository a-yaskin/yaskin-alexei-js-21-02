const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const fancyLog = require('fancy-log');
const browserSync = require('browser-sync').create();
const path = {
  pages: ["./src/*.{html,css}"]
}

gulp.task('copy-files', (done) => {
    gulp
      .src(path.pages)
      .pipe(gulp.dest('./dist'));
    done();
  }
);

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000
  });
  gulp.watch(['./dist/*']).on('change', browserSync.reload);
  gulp.watch(['./src/*.{html,css}']).on('change', gulp.series('copy-files'));
});

const watchifyBrowserify = watchify(
  browserify({
    baseDir: '.',
    entries: ['./src/main.ts'],
    debug: true,
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
);

const bundle = () => watchifyBrowserify
  .bundle()
  .on('error', fancyLog)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dist'));

gulp.task('default', gulp.parallel('copy-files', bundle));
watchifyBrowserify.on('update', bundle);
watchifyBrowserify.on('log', fancyLog);

// A version without watchify:
// gulp.task('default', gulp.parallel('copy-html', () =>
//   browserify(
//     {
//       baseDir: '.',
//       entries: ['./src/main.ts'],
//       debug: true,
//       cache: {},
//       packageCache: {}
//     }
//   )
//   .plugin(tsify)
//   .bundle()
//   .pipe(source('bundle.js'))
//   .pipe(gulp.dest('./dist'))
// ));
