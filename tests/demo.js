
//const client  = require('nightwatch-api');
//const selector = require('../pageObjects/demoObjects.js');

module.exports = {
  'Testing': function(browser)
  {
    var page = browser.page.demoObjects();
    page.navigate().waitForElementVisible('body').assert.elementPresent('@header');
    page.click('@startHere').pause(10000).assert.elementPresent('@headingText');
    page.end(); //to close the browser session at the end
  }
}
