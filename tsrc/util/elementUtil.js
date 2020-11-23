"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementUtil = void 0;
class elementUtil {
    doClick(element) {
        element.waitForDisplayed();
        element.click(element);
    }
    doSetValue(element, value) {
        element.waitForDisplayed();
        element.setValue(value);
    }
    doGetText(element) {
        element.waitForDisplayed();
        return element.getText();
    }
    doIsDisplayed(element) {
        elementUtil.waitForDisplayed();
        return element.isDisplayed();
    }
    static waitForDisplayed() {
        throw new Error("Method not implemented.");
    }
}
exports.elementUtil = elementUtil;
