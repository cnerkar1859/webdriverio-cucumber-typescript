"use strict";
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
exports.GooglePage = new GooglePageObject();
exports.AppiumPage = new AppiumPageObject();
