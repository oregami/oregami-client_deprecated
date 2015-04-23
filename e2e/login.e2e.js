'use strict';


describe('login functions', function () {

  it("should log in", function() {
    browser.manage().window().setSize(1300, 900);
    browser.get('/#/');
    element(by.model('user.username')).sendKeys('user1');
    element(by.model('user.password')).sendKeys('password1');
    element(by.id('button.login')).click();

    expect(element(by.id('username')).getText()).toEqual('user1');

    element(by.id('button.logout')).click();

  });

});


