# gulp-cson2

> Inspired by [gulp-cson](https://github.com/stevelacy/gulp-cson), but written in js and works properly with gulp-watch & gulp-plumber

# Usage

## Install

```
npm i -D gulp-cson2
```
## Example
```javascript
// you can use it without watch & plumber for sure
const gulp = require('gulp')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber')
const cson = require('gulp-cson2')

function compileCSON() {
  return watch(
    './hello.cson',
    { ignoreInitial: false },
    f => console.log(f.event, f.relative)
  )
    .pipe(plumber())
    // indent is 2 by default. it's directly passed to JSON.stringify's third argument
    .pipe(cson({ indent: 2 }))
    .pipe(gulp.dest('dist'))
}

gulp.task('default', compileCSON)
```

## License
[MIT](LICENSE)
