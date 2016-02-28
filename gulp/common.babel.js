import                 'colors'
import gulp       from 'gulp'
import browserify from 'browserify'
import babelify   from 'babelify'
import tsify      from 'tsify'
import sources    from 'vinyl-source-stream'
import livereload from 'gulp-livereload'
import {handle}   from './handle.babel'

export {
  gulp,
  browserify,
  babelify,
  tsify,
  sources,
  livereload,
  handle
}

export let
debug   = true,
srcDir  = './',
main    = 'main.ts',
bundle  = 'bundle.js',
dist    = 'dist'