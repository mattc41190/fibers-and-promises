// PTOR
// Uses Promises/ManagedPromises
describe('Search', function() {
  it('should perform a search', function() {
    browser.ignoreSynchronization = true; //ignore that this isn't an angular app
    browser.get('https://www.homeaway.com/');
    var searchBox = element.all(by.css('#searchKeywords'));
    searchBox.sendKeys('Austin, TX');
    // console.log(searchBox);
    console.log(typeof searchBox.isDisplayed());
    browser.sleep(10000);
  });
});
