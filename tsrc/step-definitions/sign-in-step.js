"use strict";
const sign_in_Page_1 = require("../pages/sign-in-Page");
let browser = require("webdriverio").use(require("WebdriverIO.BrowserObject"));
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
module.exports = function () {
    let login = new sign_in_Page_1.SignInPageObject();
    this.Given(/^I am on the login page$/, () => {
        const title = browser.getTitle();
        const expectTitle = "For fast broadband and the best mobile phones - Vodafone NZ";
        console.log(title);
        expect(title).to.equal(expectTitle);
    });
    this.When(/^I Login in with My Vodafone "([^"]*)" and "([^"]*)"$/, (uName, password) => {
        console.log(uName, password);
        return login.doLogin(uName, password);
    });
};
