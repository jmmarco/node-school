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
    // console.log('The end!')
    // console.log(results);
    // results.forEach((item) => console.log(typeof item))
    // for (var i = 0; i < 3; i++) {
    //   console.log('Item ' +  i  + ': ' + results[i]);
    // }
    console.log(results[0]);
    // console.log(JSON.stringify(results))
  })


})

