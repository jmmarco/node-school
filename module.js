const fs = require('fs')

module.exports = function filterFiles(directory, extension, callback) {
  fs.readdir(directory, 'utf-8', (err, data) => {

    if (err) {
      callback(err)
    } else {
      data.forEach((fileName) => {
        if (fileName.split('.')[1] === extension )
          callback(fileName)
      })
    }

  })
}