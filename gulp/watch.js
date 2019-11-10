// Plugins ressources
const {
  dest, parallel, series, src, task, watch,
} = require('gulp');
const browserSync = require('browser-sync').create();

//// Tasks imports
require('./copy');


//// Sub-tasks

// Copy css & notify browser sync
task('copy-css', () => src('src/**/*.css')
  .pipe(dest('watch/'))
  .pipe(browserSync.stream()));

// Copy html & notify browser sync
task('copy-html', () => src('src/**/*.html')
  .pipe(dest('watch/'))
  .pipe(browserSync.stream()));

// Copy js & notify browser sync
task('copy-js', () => src(
  [
    'src/**/*.js',
    '!src/js/vendor/**/*.js',
  ])
  .pipe(dest('watch/'))
  .pipe(browserSync.stream()));


// Create watcher
task('start-watch', () => {
  browserSync.init({
    server: './watch',
  });

  // Watch every tech
  const watcherHTML = watch(['src/**/*.html']);
  const watcherCSS  = watch(['src/**/*.css']);
  const watcherJS   = watch(
    [
      'src/**/*.js',
      '!src/js/vendor/**/*.js',
    ]
  );

  // Update when necessary
  watcherHTML .on('change', parallel('copy-html'));
  watcherCSS  .on('change', parallel('copy-css'));
  watcherJS   .on('change', parallel('copy-js'));
});


// Tasks
//  Watch : copy all files, and then update when necessary
task('watch', series(parallel('copy-assets', 'copy-vendors'), 'start-watch'));
