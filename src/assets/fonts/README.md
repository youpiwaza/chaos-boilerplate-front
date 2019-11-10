# Fonts

Prefer the use of [Font face observer](https://github.com/bramstein/fontfaceobserver) :

It allows the display of the webpage without waiting for the fonts to be loaded.


## Setup

In css, declare built-in fonts:

```
/* style.css */
body {
  font-family: Arial, sans-serif;
}

body.fonts-loaded {
  font-family: 'Roboto Condensed', Arial, sans-serif;
}
```

In JS, declare the observer & add the font display when it's loaded
```
// script.js
const font = new FontFaceObserver('Roboto Condensed');
font.load().then(function () {
  const bodyHTML = document.getElementsByTagName('body')[0];
  bodyHTML.classList.add('fonts-loaded');
});
```
