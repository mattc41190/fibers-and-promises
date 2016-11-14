// WDIO
// Uses Fibers/Futures
describe('HomeAway Search', function () {
	xit('clicks the search button', function () {
		browser.url("/");
		browser.pause(5000);
		var searchBox = browser.element('#searchKeywords');
		searchBox.setValue('Austin, TX');
		// console.log(searchBox);
		// console.log(searchBox.isVisible());
		browser.pause(10000);
	});
});
