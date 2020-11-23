"use strict";
// import { elementUtil } from './../util/elementUtil';
// import { elementUtil } from "./../util/elementUtil";
// // import { elementUtil } from "../util/elementUtil";
// import elementUtil = require("../util/elementUtil");
// import elementUtil
exports.__esModule = true;
exports.login = exports.LoginPage = void 0;
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        // Page Locators:
        this._username = "username_1375790631397";
        this._password = "password_1375790631397";
        this._loginBtn = "login-submit";
        // password = document.getElementById(
        //   "password_1375790631397"
        // )! as HTMLInputElement;
        // public get loginBtn() {
        //   return "#login-submit";
        // }
        this.loginBtn = document.getElementById("login-submit");
    
        // elementUtil.doSetValue(this.password, pwd);
        // elementUtil.doLogin(this.loginBtn);
        // elementUtil.doClick(this.loginBtn);
    }
    Object.defineProperty(LoginPage.prototype, "username", {
        // public get username(){
        //   return browser.
        // }
        // username = document.getElementById(
        //   "username_1375790631397"
        // )! as HTMLInputElement);
        get: function () {
            return "#username_1375790631397";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "password", {
        get: function () {
            return "#password_1375790631397";
        },
        enumerable: false,
        configurable: true
    });
    // Page Actions:
    // doGetPageTitle() {
    //   return elementUtil.doGetPageTitle();
    // }
    // return this.androidIDSelector(this.digitLocator + selector);
    // public doGetPageTitle = (selector: string): string => {
    //   return elementUtil.doGetPageTitle();
    // };
    // public async doLogin(emailId: string, pwd: string): Promise<void> {
    //   // elementUtil.doSetValue(this.username, emailId);
    //   browser.setValueImmediate(LoginPage.username, emailId);
    // browser.setValueImmediate(this.username, emailId);
    // browser.setValueImmediate(this.password, this.password);
    // browser.elementClick(this.loginBtn);
    LoginPage.prototype.login = function (username, password) {
        var user = $("username_1375790631397");
        var pass = $("password_1375790631397");
        user.setValue(username);
        pass.setValue(password);
        // this.username.setValue(username);
        // this.username.setValue(username);
        // this.password.setValue(password);
        // this.loginBtn.click();
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
// module.exports = new LoginPage();
exports.login = new LoginPage();
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
// ("use strict");
/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports GooglePageObject & AppiumPageObject classes
 */
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.AppiumPage = exports.GooglePage = void 0;
// class GooglePageObject {
//     get searchTextBox() { return browser.element('input[type="search"]'); }
//     get searchButton() { return browser.element('button[aria-label="Google Search"]'); }
//     get results() { return browser.waitForVisible('#ires #rso', 5000); }
//     get firstLink() { return browser.element('#rso > div:nth-child(1) > div > div > div > div:nth-child(1) > div > a'); }
// }
// class AppiumPageObject {
//     get linkButton() { return browser.element('body > nav.navbar.navbar-inverse.navbar-static-top button'); }
//     get tutorialLink() { return browser.element('#bs-example-navbar-collapse-1 > ul > li:nth-child(7) > a'); }
//     get firstBook() { return browser.element('#readmeMarkdown > div:nth-child(1) > a.resource-title'); }
//     get androidTutorialTitle() { return browser.element('#native-android-automation').getText(); }
// }
// /*
// Public Interface - export instances of classes
// **/
// exports.GooglePage = new GooglePageObject();
// exports.AppiumPage = new AppiumPageObject();
