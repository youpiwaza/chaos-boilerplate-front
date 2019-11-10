//// Copy functions
const {
  dest,
  parallel,
  src,
  task,
} = require('gulp');

// Require config
const { cssVendors, jsVendors } = require('./_config');


// Copy all assets to /dist
task('copy-assets', () => src(['src/**/*.*', '!node_modules/**', '!**/node_modules/**', '!**/*.md'])
  .pipe(dest('dist/')));

// Copy all css vendor assets to dist
task('copy-css-vendors', () => src(cssVendors)
  .pipe(dest('dist/css/vendors/')));

// Copy all js vendor assets to dist
task('copy-js-vendors', () => src(jsVendors)
  .pipe(dest('dist/js/vendors/')));

task('copy-vendors', parallel('copy-css-vendors', 'copy-js-vendors'));
