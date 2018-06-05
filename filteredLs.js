const fs = require('fs')
const arg = process.argv

const [,,dir, ext] = arg

fs.readdir(dir, 'utf-8', (err, data) => {
  if (err)
    throw err

  for (let fileName of data) {
    if (fileName.split('.')[1] === `${ext}`) {
      console.log(fileName)
    }
  }

})

