// import { Given, When } from "cucumber";
import { Given, When, Then, BeforeAll } from "cucumber";
import { SignInPageObject } from "../pages/sign-in-Page";

export = function () {
  let login: SignInPageObject = new SignInPageObject();

  Given("I am on the login page", async () => {
    const title = browser.getTitle();
    const expectTitle =
      "For fast broadband and the best mobile phones - Vodafone NZ";
    console.log(title);
    return true;
    // assert.equal(title, expectTitle, "== Title verified successfully");
  });

  When(
    "I Login in with My Vodafone {string} and {string}",
    async (uName: string, password: string) => {
      console.log(uName, password);
      return login.doLogin(uName, password);
    }
  );
};
