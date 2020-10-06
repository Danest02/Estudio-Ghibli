const gulp = require("gulp")
// const pgulpug = require('gulp-pug')
const pug = require('pug');
// const plumber = require("gulp-plumber")
// const babel = require('gulp-babel');

// const browserSync = require('browser-sync')

// const server = browserSync.create()

gulp.task('pug', () => {
  return gulp.src('pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('../'))
})

gulp.task('default', () => {
  server.init({
    server: '../'
  })

  //PUG
  gulp.watch('./dev/*.pug', gulp.series('pug')).on('change', server.reload)
})

  // gulp.task('js', () => {
  //   return gulp
  //   .src('js/*.js')
  //   .pipe(babel({
  //     presets:['@babel/env']
  //   }))
  //   .pipe(gulp.dest('public/js'))
  // })