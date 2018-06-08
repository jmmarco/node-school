const [,, url] = process.argv
const http = require('http')


function makeRequest(url, callback) {
  http.get(url, callback)
}


function callback(response) {
  // console.log('got response', response.statusCode)

  response.setEncoding('utf8');
  response.on('data', (data) => {

    console.log(data)
  }).on('error', (err) => {
    console.log('something went wrong', err)
  })

}

makeRequest(url, callback)
