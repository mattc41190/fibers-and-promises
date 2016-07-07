describe('HomeAway Search', function () {
	it('clicks the search button', function () {
		browser.url("/");
		browser.pause(5000);
		var searchBox = browser.element('#searchKeywords');
		searchBox.setValue('Austin, TX');
		console.log(searchBox.isVisible());
		browser.pause(1000000);
	});
});
