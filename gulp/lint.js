// // Linters functions
const { parallel, src, task } = require('gulp');

// Plugins ressources
const eslint    = require('gulp-eslint');
const htmllint  = require('gulp-htmllint');
const stylelint = require('gulp-stylelint');


// // Tasks imports
const { htmllintReporter, isCssOk, notifyJsIsOk } = require('./utility');


// Lint css & check for errors
task('lint-css', () => src(['src/**/*.css', '!node_modules/**'])
  .pipe(stylelint(
    {
      reporters:
      [
        {
          formatter : 'string',
          console   : true,
        },
        {
          formatter : isCssOk,
        },
      ],
    }
  )));

// Lint html & check for errors
task('lint-html', () => src(['src/**/*.html', '!node_modules/**'])
  .pipe(htmllint({}, htmllintReporter)));


// Lint html & check for errors
task('lint-js', () => src(['src/**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .on('end', notifyJsIsOk));

// Lint html & check for errors
task('lint-gulp', () => src(['gulpfile.js', 'gulp/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .on('end', notifyJsIsOk));

// Run all linters
task('lint', parallel('lint-html', 'lint-css', 'lint-js'));
