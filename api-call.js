const https = require('https');
const prompt = require('prompt-sync')();


postId = prompt();
authKey = '9b525023668444deb97211507232006';
const options = {
    hostname: 'https://api.weatherapi.com',
    path: `/v1/current.json?key=${authKey}&q=${postId}`,
    method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
};

console.log(options.hostname)
console.log(options.path)
const getPosts = () => {
    let data = '';

    const request = https.request(options, (response) => {
        // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
        response.setEncoding('utf8');

        // As data starts streaming in, add each chunk to "data"
        response.on('data', (chunk) => {
            console.log('MadeItHere')
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        response.on('end', () => {
            console.log(data);
        });
    });

    // Log errors if any occurs
    request.on('error', (error) => {
        console.error(error);
    });

    // End the request
    request.end();
};

getPosts();