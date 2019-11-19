# chaos-boilerplate-front

Front-end boilerplate, to suit my needs.

## Gulp heavy

Numerous optimisations are done automattically thanks to gulp.

More details in [/gulp](./gulp/).

Here are the main commands.

> gulp

Copy /src & selected vendors to /watch

> gulp watch

Html, css, js HMR

> gulp prod

Concat, minify & inline inject of css & js


## Before prod Checklist

Various recommandations, you can also directly run online validators

### Online validators

- [w3c](https://validator.w3.org/)
- [Pagespeed insight](https://developers.google.com/speed/pagespeed/insights/)
- [Dareboost](https://www.dareboost.com/fr/) / Limited use per day in free version !
- [Webpage test](https://www.webpagetest.org/)
- [CSP check](https://securityheaders.com/)


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


## TODO

- Add accessibility checks & resources from [this article](https://dev.to/karkranikhil/web-accessibility-by-making-your-site-accessible-you-automatically-increase-the-target-audience-d8d)
- [+1](https://varvy.com/googlebot.html)
- Get back tool box & reimplant with css/js injection
  - and add new html stuff :
  
  https://developer.mozilla.org/fr/docs/Web/HTML/Element
  
  https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/itemid
  
  https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/itemprop
  
  https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/itemref
  
  https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/itemscope
  
  https://developer.mozilla.org/fr/docs/Web/HTML/Element/details
  
    - and add [complex elements can do w html/css only](https://dev.to/adrianbdesigns/you-can-create-these-elements-without-javascript-525a) and it also contains ellipsis and stuff
