import {gulp, browserify, debug, main, babelify, tsify, sources, handle, bundle, dist, livereload} from './common.babel'

gulp.task('ts', () => {
    return browserify({
        debug: debug
      })
      .add(main)
      .plugin(tsify)
      .transform(babelify, {
        sourceMaps: debug,
        presets: ["es2015"]
      })
      .bundle()
      .on('error', handle)
      .pipe(sources(bundle))
      .pipe(gulp.dest(dist))
      .pipe(livereload())
})