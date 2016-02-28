import                 'colors'
import gulp       from 'gulp'
import browserify from 'browserify'
import babelify   from 'babelify'
import tsify      from 'tsify'
import sources    from 'vinyl-source-stream'
import server     from 'gulp-server-livereload'
import livereload from 'gulp-livereload'

export {
  gulp,
  browserify,
  babelify,
  tsify,
  sources,
  server,
  livereload
}

export let
debug   = true,
handle  = (error) => {
  console.log([
    'BUILD FAILED'.red.underline,
    '\u0007', /* beep */
    error.stack.substring(0, error.stack.indexOf(' at ') || error.stack.length)
  ].join('\n'))
  /* this.end() */
},
srcDir  = './',
main    = 'main.ts',
bundle  = 'bundle.js',
dist    = 'dist',
port    = 3000