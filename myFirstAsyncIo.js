const fs = require('fs')
const arg = process.argv[2]
let tracker = 0

if (arg !== undefined) {

  function readMyFile(callback) {
    fs.readFile(arg, 'utf-8', function(err, fileContents) {
      callback(fileContents)
    })
  }

  function countNewLines(file) {
    // console.log('line: ', file)
    console.log(file.split('\n').length -1)
  }


} else {
  console.log("You must pass a file as a parameter")
}

readMyFile(countNewLines)
