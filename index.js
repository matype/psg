var postcss = require('postcss')
var styleguide = require('postcss-style-guide')


function psg (input, options) {
  options = options || {}
  options.processedCSS = input

  postcss()
    .use(styleguide(options))
    .process(input)
    .css
}

module.exports = psg
