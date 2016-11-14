exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
       'test/spec/search.spec.js',
   ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox'
    }],
    sync: true,
    logLevel: 'verbose',// Level of logging verbosity: silent | verbose | command | data | result | error
    coloredLogs: true,
    screenshotPath: 'ErrorShots',
    baseUrl: 'https://www.homeaway.com/',
    waitforTimeout: 100000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['dot'],
    services: ['selenium-standalone'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
    },
}
