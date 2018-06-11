const [,, url] = process.argv
const http = require('http')

let results = []

http.get(url, (response) => {

  response.setEncoding('utf8');

  response.on('data', (data) => {
    // console.log(data)
    results.push(data)
  }).on('error', (err) => {
    console.log('something went wrong');
  }).on('end', () => {
    console.log(results[0]);
    // console.log(JSON.stringify(results))
  })


})

