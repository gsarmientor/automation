/*====================================================================
 * No of Locators	: 9
 * Purpose			: Login Page Locators
 * Create_Date		: 11/02/2017
 * Last Modified	: 05/08/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

export class LoginPage {
    btnUsername = element(by.css('input[id="username"]'));
    btnPassword = element(by.css('input[id="password"]'));
    btnLogin = element(by.css('span[id="attempt_login_btn"]'));
    btnPreferences = element(by.css('button[qa-name="preferences"]'));
    btnInitial = element(by.css('span.initials'));
    btnUserMenu = element(by.css('button[qa-name="profileMenuTrigger"]'));
    boxLoginAlert = element(by.css('div[class="errors hidden"]'));
    btnAccount = element(by.xpath("//span[contains(@class,'icon-button')]/span[contains(@class,'icon-member')]"));
    btnLogout = element(by.css('a[href="/login"]'));
    listValueStreamHeader = element(by.className('value-stream-list-container'));
    licenseAgreeButton = element(by.id("license_agree_btn"));
};