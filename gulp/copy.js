//// Copy functions
const {
  dest,
  parallel,
  src,
  task,
} = require('gulp');

// Require config
const { cssVendors, jsVendors } = require('./_config');


// Copy all assets to /watch
task('copy-assets', () => src(['src/**/*.*', '!node_modules/**', '!**/node_modules/**'])
  .pipe(dest('watch/')));

// Copy all css vendor assets to watch
task('copy-css-vendors', () => src(cssVendors)
  .pipe(dest('watch/css/vendors/')));

// Copy all js vendor assets to watch
task('copy-js-vendors', () => src(jsVendors)
  .pipe(dest('watch/js/vendors/')));

task('copy-vendors', parallel('copy-css-vendors', 'copy-js-vendors'));
