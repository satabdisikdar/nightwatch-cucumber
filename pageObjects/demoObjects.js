module.exports = {
    url: 'https://www.simplesite.com/',
    elements: {
      subpageTitle: "span.subpage-hero-title-strong",
      languageButton: "div.currentlanguagemobile",
      langMenu: "div.lang-menu div.mobile-menu",
      startHere: {
          selector: "(//a[text()='Start here'])[1]",
            locateStrategy: 'xpath'},
      header: {
          selector: "//a[text()='SimpleSite.com']",
          locateStrategy: 'xpath'},
      headingText: {
          selector:`//h1[contains(text(),'Create')]`,
            locateStrategy: 'xpath'}
    }
    
    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }
    
}
