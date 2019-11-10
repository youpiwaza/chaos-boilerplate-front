# /gulp

Here lies all gulp tasks, grouped by type in their own files.

Can be required to make tasks availables (no need for export for tasks)


## \_config.js

Contains some of the configuration for convenience purposes.

- Add your node_modules/ dependancies here


## copy.js

Copy /assets & vendors


## file.js

Contains del functions, emptying /dist & prod/, preventing old unecessary files


## lint.js

Contains html, css & js linters. Needs fine tuning & IDE support/homogeneisation


## prod.js

Generates /prod folder : concat, minifies all css/js & inline injection


## utility.js

Log display for linters


## watch.js

Add the `gulp watch` command, enabling HMR and easier dev.

Generates in /dist
