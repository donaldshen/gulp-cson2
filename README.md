# gulp-cson2

> Inspired by [gulp-cson](https://github.com/stevelacy/gulp-cson), but written in js.

- It delays the extname modification to the next event loop so gulp-watch's callback could print files with their origin 'json' extname.
- It has a standard error handling, so it works great with gulp-plumber.
- It uses cson-parser directly instead of using cson package, so it is smaller than `gulp-cson`

## Usage

### Install

```
npm i -D gulp-cson2
```
### Example
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
