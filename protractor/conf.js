exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts: {
      defaultTimeoutInterval: 1000000,
  },
  specs: ['test/specs/search.js']
};
