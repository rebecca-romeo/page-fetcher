// Required modules
const request = require('request');
const fs = require('fs');

const fetchInfo = process.argv.slice(2);
// console.log(fetchInfo[0]);
const content = fetchInfo[0];
const userFilePath = fetchInfo[1]


request(content, userFilePath, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the homepage.
  // console.log(body)
  const content = body;
  console.log(body)

try {
  fs.writeFileSync(userFilePath, content);
// console.log(file)
  // file written successfully
  console.log(`Downloaded and saved to ${userFilePath}`)
} catch (err) {
  console.error(err);
}

});




// fetcher function
// take two command line arguments:
  // 1. url
  // 2. local file path



  // should download the resource at the URL
  // save it to the local path on your machine.
  // when finished: print message :
      // Downloaded and saved 1235 bytes to ./index.html.


// will need to make an http request for unknown time
// when request is complete, take the data and write it to local file system