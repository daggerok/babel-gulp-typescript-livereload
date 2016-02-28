import {gulp, srcDir, livereload, port} from './common.babel'

gulp.task('watch', ['default', 'server'], () => {
  livereload.listen({
    basePath: srcDir
  })
  gulp.watch(`${srcDir}/**/*.ts`, ['ts'])
  gulp.watch([
    `${srcDir}/**/*.css`,
    `${srcDir}/**/*.html`
  ], ['ts'])
})