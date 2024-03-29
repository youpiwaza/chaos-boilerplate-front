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

- [Geekflare tools > Website performance audit](https://geekflare.com/tools/website-audit) & other usefull tools
- [w3c](https://validator.w3.org/)
- [Pagespeed insight](https://developers.google.com/speed/pagespeed/insights/)
- [Dareboost](https://www.dareboost.com/fr/) / Limited use per day in free version !
- [Webpage test](https://www.webpagetest.org/)
- [Ace Accessibe > accessibilité](https://ace.accessibe.com/)
- [CSP check](https://securityheaders.com/)
- [Test responsive](https://www.lambdatest.com/)
- [Test mobile load time](thinkwithgoogle.com/feature/testmysite/)
- [How's your website impacting the planet + web recos](https://www.websitecarbon.com/)
- [Find & remove unused code](https://dev.to/dailydevtips1/chrome-find-unused-code-3g9c)

### Html

- Meta tags
- Open graph tags
- Favicon, pref [SVG](https://formito.com/tools/favicon)
- [itemprop attribute](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/itemprop)

- Linted
- Minified
- Remove css & js tags if inline injection


### Css

- Linted
- Concat external librairies
- Minified
- Inline injection
- .htaccess inline security (SHA-256) (XSS prevention)
- [Remove unused CSS](https://dev.to/dailydevtips1/chrome-find-unused-code-3g9c)


### JS

- Linted
- Concat external librairies
- Minified
- Inline injection
- .htaccess inline security (SHA-256) (XSS prevention)
- [Remove unused JS](https://dev.to/dailydevtips1/chrome-find-unused-code-3g9c)


### Misc

- **Clean unused files**
- .htaccess configuration
- Images minification (.webp & webm, cf. [/src/assets/images](./src/assets/images/))
  - Or best, [AVIF](https://jakearchibald.com/2020/avif-has-landed/) when it'll be [more compatible](https://caniuse.com/?search=avif)
- Security loopholes prevention / https://www.hacksplaining.com/lessons
- Add google analytics / https://analytics.google.com/analytics/web/
- [Minify SVG](https://github.com/svg/svgo)
- [Legal stuff > gouv.fr](https://entreprendre.service-public.fr/vosdroits/F31228/personnalisation/resultat?lang=&quest0=0)
- [RGPD stuff > gouv.fr](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/gestion-des-donnees-clients/comment-rendre-le-fichier)

## TODO

- [Pretty cool article on website optimisations](https://dev.to/enterspeed/making-a-fast-website-is-super-easy-9lb)

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

- [seo stuff](https://totheweb.com/learning_center/tools-search-engine-simulator/)

- Add basic [PWA](https://www.webdesignerdepot.com/2019/03/should-you-be-building-progressive-web-apps/) and add it to end checklist

- html dl dt [https://developer.mozilla.org/fr/docs/Web/HTML/Element/dl](https://developer.mozilla.org/fr/docs/Web/HTML/Element/dl)
