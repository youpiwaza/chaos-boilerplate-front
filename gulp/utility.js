// // Utility functions
const colors = require('ansi-colors');
const fancyLog = require('fancy-log');


// Handle htmllint errors display
function htmllintReporter(filepath, issues) {
  if (issues.length > 0) {
    issues.forEach((issue) => {
      fancyLog(colors.cyan('[gulp-htmllint] ') + colors.white(`${filepath} [${issue.line},${issue.column}]: `) + colors.red(`(${issue.code}) ${issue.msg}`));
    });
    process.exitCode = 1;
  } else {
    fancyLog(colors.green('HTML is clean :)'));
  }
}

// Display a message if css is ok
function isCssOk(report) {
  // console.log(report);
  if (typeof report[0].errored === 'undefined') {
    fancyLog(colors.green('CSS is clean :)'));
  }
}

// Callback for js is ok
function notifyJsIsOk() {
  fancyLog(colors.green('JS is clean :)'));
}


module.exports = {
  htmllintReporter,
  isCssOk,
  notifyJsIsOk,
};
