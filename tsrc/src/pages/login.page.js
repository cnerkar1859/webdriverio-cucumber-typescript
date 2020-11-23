// const elementUtil = require("../util/elementUtil");
// class LoginPage {
//     get username() { return ('#username_1375790631397'); }
//     get password() { return ('#password_1375790631397'); }
//     get loginBtn() { return ('#login-submit'); }
//     doGetPageTitle() {
//         return elementUtil.doGetPageTitle();
//     }
//     doLogin(emailId, pwd) {
//         elementUtil.doSetValue(this.username, emailId);
//         elementUtil.doSetValue(this.password, pwd);
//         elementUtil.doLogin(this.loginBtn);
//         elementUtil.doClick(this.loginBtn);
//     }
// }
// module.exports = new LoginPage();
"use strict";
/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports GooglePageObject & AppiumPageObject classes
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppiumPage = exports.GooglePage = void 0;
class GooglePageObject {
    get searchTextBox() { return browser.element('input[type="search"]'); }
    get searchButton() { return browser.element('button[aria-label="Google Search"]'); }
    get results() { return browser.waitForVisible('#ires #rso', 5000); }
    get firstLink() { return browser.element('#rso > div:nth-child(1) > div > div > div > div:nth-child(1) > div > a'); }
}
class AppiumPageObject {
    get linkButton() { return browser.element('body > nav.navbar.navbar-inverse.navbar-static-top button'); }
    get tutorialLink() { return browser.element('#bs-example-navbar-collapse-1 > ul > li:nth-child(7) > a'); }
    get firstBook() { return browser.element('#readmeMarkdown > div:nth-child(1) > a.resource-title'); }
    get androidTutorialTitle() { return browser.element('#native-android-automation').getText(); }
}
/*
Public Interface - export instances of classes
**/
exports.GooglePage = new GooglePageObject();
exports.AppiumPage = new AppiumPageObject();
