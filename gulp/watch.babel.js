import {gulp, srcDir, livereload} from './common.babel'

gulp.task('watch', ['default'], () => {
  livereload.listen({
    basePath: srcDir
  })
  gulp.watch(`${srcDir}/**/*.ts`, ['ts'])
  gulp.watch([
    `${srcDir}/**/*.css`,
    `${srcDir}/**/*.html`
  ], ['ts'])
})