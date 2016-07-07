describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true; //ignore that this isn't an angular app
    browser.get('https://www.homeaway.com/');
    var search = element.all(by.css('#searchKeywords'));
    search.sendKeys('Austin, TX');
    console.log(search.isDisplayed();
    browser.sleep(10000);
  });
});
