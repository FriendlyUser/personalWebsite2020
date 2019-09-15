var fs = require('fs')
var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

module.exports = function parseMd(filename='') {
  if(filename === '') return

  let output = ''
  if (fs.existsSync(filename)) {
    unified()
    .use(markdown)
    .use(html)
    .process(fs.readFileSync(filename), function(err, file) {
      if (err) throw err
      output=String(file)
    })
  }
  return output
}