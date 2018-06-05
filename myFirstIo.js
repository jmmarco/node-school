const fs = require('fs')
const arg = process.argv[2]

let tracker = 0;

if (arg !== undefined) {
  /*
    Instead of doing this:
    let file = fs.readFileSync(arg)
    let fileBuffer = file.toString()
    Simply do:
  */

  let file = fs.readFileSync(arg, 'utf-8');




  for (let line of file) {
    if (line.split('\n').length > 1)
      console.log(line.split('\n') > 1)
  }

} else {
  console.log("You must pass a file as a parameter")
}

// console.log("Tracker: ", tracker)
console.log(tracker)

