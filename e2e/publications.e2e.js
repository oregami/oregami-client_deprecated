'use strict';


describe('publications', function () {

  it('should show right title in correct language', function() {
    browser.manage().window().setSize(1300, 900);
    browser.get('/#/publications');

    var heading = null;
    heading = element(By.id('publications.header')).getText();
    expect(heading).toEqual('Publications');
    element(by.id('language_de')).click();
    expect(element(By.id('publications.header')).getText()).toEqual('Publikationen');
    element(by.id('language_en')).click();
    expect(element(By.id('publications.header')).getText()).toEqual('Publications');

  });

});


