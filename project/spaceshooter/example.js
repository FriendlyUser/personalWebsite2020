var fs = require('fs')
var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

let output = ''
unified()
  .use(markdown)
  .use(html)
  .process(fs.readFileSync('index.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
    output=String(file)
    return String(file)
  })
console.log(output)