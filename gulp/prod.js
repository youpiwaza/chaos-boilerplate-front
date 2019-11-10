// // Copy functions
const {
  dest,
  parallel,
  series,
  src,
  task,
} = require('gulp');

// Require config
const { cssVendors, jsVendors } = require('./_config');
require('./file');


const cleanCSS  = require('gulp-clean-css');
const concat    = require('gulp-concat');
const htmlmin   = require('gulp-htmlmin');
const inject    = require('gulp-inject');
const replace   = require('gulp-replace');
const uglify    = require('gulp-uglify-es').default;


// Copy all /assets to prod
task('prod-copy-assets', () => src(
  [
    'src/assets/**/*.*',
    '!node_modules/**',
    '!**/node_modules/**',
    '!**/*.md',
  ]
)
  .pipe(dest('prod/assets/')));


// Copy htaccess to /prod root
task('prod-copy-htaccess', () => src('src/.htaccess')
  .pipe(dest('prod/')));


////  Remove style & script tags from index.html, all will be injected
task('prod-clean-index', () => src('./src/index.html')
  .pipe(replace('<link rel="stylesheet" type="text/css" href="css/vendors/normalize.css">\n'        , ''))
  .pipe(replace('<link rel="stylesheet" type="text/css" href="style.css">\n'                        , ''))
  .pipe(replace('<script src="./js/vendors/fontfaceobserver.js" type="text/javascript"></script>\n' , ''))
  .pipe(replace('<script src="script.js" type="module"></script>\n'                                 , ''))
  .pipe(replace(`<!-- Those lines will be removed automatically w. 'gulp prod' -->\n`               , ''))
  .pipe(dest('prod/')));


////  Inject all css (vendors + src/style.css) to prod/index.html
task('prod-minify-inject-css', () => {
  // minify-before injection
  const source = src(
    [
      ...cssVendors,
      'src/style.css',
    ]
  )
    // Adjust CSS : Font path no longer needs ../
    .pipe(replace('../', ''))
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    // .pipe(dest('minify/')) // check generated file
  ;

  // inject minified file INTO already cleaned index.html
  return src('./prod/index.html')
    .pipe(inject(source, {
      starttag  : '/* inject:critcss */',
      endtag    : '/* endinject */',
      transform(filepath, file) {
        return file.contents.toString();
      },
    }))
    .pipe(dest('prod/'));
});


////  Inject all js (vendors + src/script.js) to prod/index.html
task('prod-minify-inject-js', () => {
  // minify-before injection
  const source = src(
    [
      ...jsVendors,
      'src/script.js',
    ]
  )
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    // .pipe(dest('minify/')) // check generated file
  ;

  // inject minified file INTO already css injected index.html
  return src('./prod/index.html')
    .pipe(inject(source, {
      starttag: '// inject:critjs',
      endtag: '// endinject',
      transform(filepath, file) {
        return file.contents.toString();
      },
    }))
    .pipe(dest('prod/'));
});


task('prod-minify-html', () =>
  src('prod/index.html')
    .pipe(htmlmin({
      collapseWhitespace    : true,
      ignoreCustomFragments : [
        /<!-- htmlmin:ignore1-->[\s\S]*<!-- htmlmin:ignore1:end-->/gi,
        /<!-- htmlmin:ignore2-->[\s\S]*<!-- htmlmin:ignore2:end-->/gi,
        /<!-- htmlmin:ignore3-->[\s\S]*<!-- htmlmin:ignore3:end-->/gi,
      ],
    }))
    .pipe(dest('prod/')));

task('prod', series('del-prod', parallel('prod-copy-assets', 'prod-copy-htaccess', series('prod-clean-index', 'prod-minify-inject-css', 'prod-minify-inject-js', 'prod-minify-html'))));
