##Notes
###*tl;nr:*
```
$ cd homework_03_gulp-less-animation
$ npm install
$ npm run boot
```

Gulp watches for changes in ./src/ and:
 - copies HTML and JS (if changed) to ./build/,
 - generates CSS from SCSS or LESS (if changed) to ./build/.
 
Browsersync serves files from ./build/; after `npm install` ./build/ is empty until some changes are made to files in ./src/.

If source files are not changed, to populate ./build/ with the current state of the source files in ./src/ use `npm run boot`. It copies HTML and JS, generates CSS, and starts `default` gulp task (normally used for development).
