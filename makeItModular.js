var filterFiles = require('./module.js')

const [,,dir, ext] = process.argv 

function displayOutput(data) {
  console.log(data)
}



filterFiles(dir, ext, displayOutput)

