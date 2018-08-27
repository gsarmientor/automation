"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 9
 * Purpose			: Login Page Locators
 * Create_Date		: 11/02/2017
 * Last Modified	: 05/08/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.btnUsername = protractor_1.element(protractor_1.by.css('input[id="username"]'));
        this.btnPassword = protractor_1.element(protractor_1.by.css('input[id="password"]'));
        this.btnLogin = protractor_1.element(protractor_1.by.css('span[id="attempt_login_btn"]'));
        this.btnPreferences = protractor_1.element(protractor_1.by.css('button[qa-name="preferences"]'));
        this.btnInitial = protractor_1.element(protractor_1.by.css('span.initials'));
        this.btnUserMenu = protractor_1.element(protractor_1.by.css('button[qa-name="profileMenuTrigger"]'));
        this.boxLoginAlert = protractor_1.element(protractor_1.by.css('div[class="errors hidden"]'));
        this.btnAccount = protractor_1.element(protractor_1.by.xpath("//span[contains(@class,'icon-button')]/span[contains(@class,'icon-member')]"));
        this.btnLogout = protractor_1.element(protractor_1.by.css('a[href="/login"]'));
        this.listValueStreamHeader = protractor_1.element(protractor_1.by.className('value-stream-list-container'));
        this.licenseAgreeButton = protractor_1.element(protractor_1.by.id("license_agree_btn"));
    }
    return LoginPage;
}());
exports.LoginPage = LoginPage;
;
