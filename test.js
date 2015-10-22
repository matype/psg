var fs = require('fs')
var test = require('ava')
var psg = require('./')

test('exist styleguide.html', function (t) {
  var input = fs.readFileSync('./sample.css', 'utf-8')
  var options = {
    name: 'Default theme',
    dir: 'styleguide',
    file: 'index.html'
  }
  psg(input, options)

  var actual = fs.existsSync('./styleguide/index.html')

  t.same(actual, true)
  t.end()
})
