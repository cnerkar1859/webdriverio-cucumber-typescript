// import { $ } from "webdriver";

export class SignInPageObject {
  public userName: any;
  public password: any;
  public loginBtn: any;

  constructor() {
    this.userName = $("username_1375790631397");
    this.password = $("password_1375790631397");
    this.loginBtn = $("login-submit");
  }
  async doLogin(field: string, value: string) {
    this.userName.setValue(field, value);
    this.password.setValue(field, value);
    this.loginBtn.click();
  }
}
