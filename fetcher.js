// Required modules
const request = require('request');
const fs = require('fs');

// Slice process.argv to only return the users input
const fetchInfo = process.argv.slice(2);

// Website link entered by the user:
const content = fetchInfo[0];

// File path entered by the user:
const userFilePath = fetchInfo[1];


//
request(content, userFilePath, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the homepage.

  // Save the content of the body received from the site to a variable
  const content = body;
  console.log(body);

  try {
    // write the body of the user's site, to the filepath the user entered
    fs.writeFileSync(userFilePath, content);
    // console.log(file)
    console.log(`Downloaded and saved to ${userFilePath}`);
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
// when finished, print message


// will need to make an http request for unknown time
// when request is complete, take the data and write it to local file system