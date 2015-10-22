#!/usr/bin/env node

var fs = require('fs')
var pkg = require('./package.json')
var psg = require('./')

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  boolean: [
    'help',
    'versions',
    'showCode'
  ],
  alias: {
    h: 'help',
    V: 'versions',
    t: 'theme',
    n: 'name',
    f: 'file',
    d: 'dir',
    c: 'showCode'
  }
})


if (argv.V) {
  console.log(pkg.version)
}


if (argv.h) {
  console.log('Usage: psg css-file [options]')
  console.log('')
  console.log('Options:')
  console.log('')
  console.log('  -V, --versions    Output the version number')
  console.log('  -h, --help        Output usage information')
  console.log('  -t, --theme       Theme name')
  console.log('  -n, --name        Project name')
  console.log('  -f, --file        Style guide file name (default: styleguide.html)')
  console.log('  -d, --dir         Output directory (default: docs)')
  console.log('  -c, --showCode    The flag to show CSS code in styleguide')
}


var opts = {}

if (argv.theme) {
  opts.theme = argv.theme
}
if (argv.name) {
  opts.name = argv.name
}
if (argv.file) {
  opts.file = argv.file
}
if (argv.dir) {
  opts.dir = argv.dir
}


if (argv._[0]) {
  var input = fs.readFileSync(argv._[0], 'utf-8')
  psg(input, opts)
}
