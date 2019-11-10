const { parallel, task } = require('gulp');

// // Tasks imports
// defines main tasks 'copy-assets', 'copy-vendors'
require('./gulp/copy');
// defines task 'prod', 'prod-clean-index', 'prod-copy-assets', 'prod-minify-inject-css', 'prod-minify-inject-js', 'prod-minify-html'
require('./gulp/prod');
// defines task 'lint-css', 'lint-html', 'lint-js', 'lint-gulp'
require('./gulp/lint');
// defines main task 'watch'
require('./gulp/watch');


// // Tasks

// Default tesk, executed when using 'gulp'
//    Capy all assets to dist
task('default', parallel('copy-assets', 'copy-vendors'));

// Run all linters
task('lint', parallel('lint-html', 'lint-css', 'lint-js'));
