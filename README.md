# chaos-boilerplate-front

Front-end boilerplate, to suit my needs.

TODO / https://csscomb.herokuapp.com/config

## Gulp heavy

Numerous optimisations are done automattically thanks to gulp.

More details in [/gulp](./gulp/).

Here are the main commands.

> gulp

Copy /src & selected vendors to /watch

> gulp watch

Html, css, js HMR


## Before prod Checklist

Various recommandations, you can also directly run online validators

### Online validators

- [w3c](https://validator.w3.org/)
- [Pagespeed insight](https://developers.google.com/speed/pagespeed/insights/)
- [Dareboost](https://www.dareboost.com/fr/) / Limited use per day in free version !
- [Webpage test](https://www.webpagetest.org/)


### Html

- Meta tags
- Open graph tags
- Favicon

- Linted
- Minified
- Remove css & js tags if inline injection


### Css

- Linted
- Concat external librairies
- Minified
- Inline injection
- .htaccess inline security (SHA-256) (XSS prevention)


### JS

- Linted
- Concat external librairies
- Minified
- Inline injection
- .htaccess inline security (SHA-256) (XSS prevention)


### Misc

- **Clean unused files**
- .htaccess configuration
- Images minification (.webp & webm, cf. [/src/assets/images](./src/assets/images/))
- Security loopholes prevention / https://www.hacksplaining.com/lessons
