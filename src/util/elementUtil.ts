export class elementUtil {
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

  // doGetPageTitle() {
  //   return document.ele;
  // }

  doIsDisplayed(element) {
    elementUtil.waitForDisplayed();
    return element.isDisplayed();
  }
  static waitForDisplayed() {
    throw new Error("Method not implemented.");
  }
}

// module.exports = new elementUtil();
// export const elementUtil = new elementUtil();
