import {gulp, srcDir, livereload} from './common.babel'

gulp.task('watch', ['default'], () => {
  livereload.listen({
    basePath: srcDir
  })
  gulp.watch([
    `${srcDir}/**/*.ts`,
    `${srcDir}/**/*.css`,
    `${srcDir}/**/*.html`
  ], ['default'])
})
