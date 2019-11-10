// // Files & folders related functions
const {
  parallel,
  task,
} = require('gulp');
const del = require('del');


// Delete /dist
task('del-dist', () => del('dist/**', {force:true}));

// Delete /prod
task('del-prod', () => del(['prod/**', 'prod/.*'], {force:true}));
