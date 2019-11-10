const { parallel, task } = require('gulp');

// // Tasks imports
// defines main tasks 'copy-assets', 'copy-vendors'
require('./gulp/copy');
// defines task 'lint-css', 'lint-html', 'lint-js', 'lint-gulp'
require('./gulp/lint');
// defines main task 'watch'
require('./gulp/watch');


// // Tasks

// Default tesk, executed when using 'gulp'
//    Capy all assets to dist
task('default', parallel('copy-assets', 'copy-vendors'));
