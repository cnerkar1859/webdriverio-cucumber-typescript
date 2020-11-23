"use strict";
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
exports.SignInPageObject = void 0;
class SignInPageObject {
    constructor() {
        this.userName = $("username_1375790631397");
        this.password = $("password_1375790631397");
        this.loginBtn = $("login-submit");
    }
    doLogin(field, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userName.setValue(field, value);
            this.password.setValue(field, value);
            this.loginBtn.click();
        });
    }
}
exports.SignInPageObject = SignInPageObject;
