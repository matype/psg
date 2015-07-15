var fs = require('fs')
var postcss = require('postcss')
var psg = require('postcss-style-guide')

module.exports = function (css, opts) {
  postcss().use(psg(css, opts)).process(css).css
}
