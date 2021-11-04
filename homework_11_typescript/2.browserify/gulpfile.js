const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const fancyLog = require('fancy-log');
const path = {
  pages: ["./src/*.html"]
};

gulp.task('copy-html', (done) => {
    gulp
      .src(path.pages)
      .pipe(gulp.dest('./dist'));
    done();
  }
);

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
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dist'));

gulp.task('default', gulp.parallel('copy-html', bundle));
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
