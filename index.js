var fs = require('fs')
var postcss = require('postcss')
var styleguide = require('postcss-style-guide')


module.exports = function (input, options) {
  options = options || {}
  options.processedCSS = input

  var result = postcss()
    .use(styleguide(options))
    .process(input)
    .css

  return result
}
