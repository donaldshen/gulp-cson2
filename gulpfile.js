const cson = require('.')
const gulp = require('gulp')

gulp.task('default', () => {
  return gulp.src('./*.cson')
    .pipe(cson())
    .pipe(gulp.dest('.'))
})
