"use strict";
exports.__esModule = true;
exports.elementUtil = void 0;
var elementUtil = /** @class */ (function () {
    function elementUtil() {
    }
    elementUtil.prototype.doClick = function (element) {
        element.waitForDisplayed();
        element.click(element);
    };
    elementUtil.prototype.doSetValue = function (element, value) {
        element.waitForDisplayed();
        element.setValue(value);
    };
    elementUtil.prototype.doGetText = function (element) {
        element.waitForDisplayed();
        return element.getText();
    };
    // doGetPageTitle() {
    //   return document.ele;
    // }
    elementUtil.prototype.doIsDisplayed = function (element) {
        elementUtil.waitForDisplayed();
        return element.isDisplayed();
    };
    elementUtil.waitForDisplayed = function () {
        throw new Error("Method not implemented.");
    };
    return elementUtil;
}());
exports.elementUtil = elementUtil;
// module.exports = new elementUtil();
// export const elementUtil = new elementUtil();
