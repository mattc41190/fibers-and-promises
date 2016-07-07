var Future = require('fibers/future');
var req = require('request');

function getData(url, callback){
    req.get({url:url,
        json: true}, function(err, res, body){
        return callback(null, body);
    });
}

var getDataWithFuture = Future.wrap(getData);

var doFutureWork = function(url1, url2){
    var results1 = getDataWithFuture(url1).wait();
    var results2 = getDataWithFuture(url2).wait();

    console.log(results1, results2); // Typically this would render undefined right?
    console.log('\nI am just a regular console log!'); // Typically you would expect this to run well before results were ready!

}.future();

doFutureWork('http://httpbin.org/status/418', 'https://httpbin.org/deny');
console.log('\nI am a regular console log outside of the fiber!'); // This line is not hindered by the Fiber/Future.
