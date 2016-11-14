/*
Promises are objects that encapsulate an asynchronous process providing standardized callback assignment and processing.
Promises work within the standard Node.js event loop thread(s).
*/

var Promise = require('bluebird');
var req = require('request');

var promiseApiCall = function (url, callback) {
    return new Promise(function (resolve, reject) {
        req.get({url:url, json: true}, function(error, response, body){
            if(error){
                return reject(error);
            }
            resolve(body);
        });
    });
}

console.log("Before Promises Call!");

promiseApiCall('http://httpbin.org/status/418')
.then(function(body){
    console.log(body);
    return promiseApiCall('http://httpbin.org/deny')
})
.then(function(body){
    console.log(body);
})
.catch(function(error) {
    console.log('Error -> ', error);
})

console.log("After Promise Call");
