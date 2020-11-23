"use strict";
/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const appiumPage_1 = require("../pages/appiumPage");
const { Given, When, Then, BeforeAll } = require('cucumber');
const chai_1 = require("chai");
Given(/^I am on google page$/, () => {
    chai_1.expect(browser.getTitle()).to.equal('Google');
});
When(/^I type "(.*?)"$/, (text) => {
    appiumPage_1.GooglePage.searchTextBox.setValue(text);
});
When(/^I click on first search link$/, () => {
    appiumPage_1.GooglePage.firstLink.click();
});
Then(/^I click on search button$/, () => {
    appiumPage_1.GooglePage.searchButton.click();
});
Then(/^appium links should be displayed$/, () => {
    chai_1.expect(appiumPage_1.GooglePage.results).to.equal(true);
});
Then(/^I should be navigated to appium's official site "(.*?)"$/, (expectedUrl) => {
    browser.waitUntil(() => __awaiter(void 0, void 0, void 0, function* () {
        const url = yield browser.getUrl();
        return url === expectedUrl;
    }), 5000, `expected url to be ${expectedUrl}`);
});
Then(/^I verify the title of the page to be "(.*?)"$/, (expectedTitle) => {
    browser.waitUntil(() => __awaiter(void 0, void 0, void 0, function* () {
        const title = yield browser.getTitle();
        return title === expectedTitle;
    }), 5000, `expected url to be ${expectedTitle}`);
});
When(/^I click on top menu button$/, () => {
    appiumPage_1.AppiumPage.linkButton.click();
});
When(/^I click on tutorial link$/, () => {
    appiumPage_1.AppiumPage.tutorialLink.click();
});
Then(/^I click on android tutorial link$/, () => {
    appiumPage_1.AppiumPage.firstBook.click();
});
Then(/^I verify the title of android tutorial page to be "(.*?)"$/, (expectedTitle) => {
    browser.waitUntil(() => __awaiter(void 0, void 0, void 0, function* () {
        const title = yield browser.getTitle();
        return title === expectedTitle;
    }), 5000, `expected url to be ${expectedTitle}`);
});
