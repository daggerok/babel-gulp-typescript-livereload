import 'colors'

export let handle  = (error) => {
  console.log([
    'BUILD FAILED'.red.underline,
    '\u0007', /* beep */
    error.stack.substring(0, error.stack.indexOf(' at ') || error.stack.length)
  ].join('\n'))
  /* this.end() */
}