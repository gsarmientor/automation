/*====================================================================
 * No of Test cases	: 1
 * Purpose			: Login Page Test Cases
 * Create_Date		: 01/21/2018
 * Last Modified	: 01/21/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino van Dam
 ======================================================================*/
import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
const path = require('path');
import {LoginModule} from '../../pageobjects/login/login_module.po';
import {CommonModule} from '../../pageobjects/common/common_module.po';
import { CommonPage } from '../../pageobjects/common/common_page.po';
var params = browser.params;

describe('Continuum Regression - 1. Login Test suite', function () {
    let continuumCommonPage: CommonPage;
    let continuumLoginModule: LoginModule;
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    continuumLoginModule = new LoginModule();
    continuumCommonPage = new CommonPage();

    beforeAll(async () => {
        await continuumLoginModule.get();
     });

    it('1. should validate elements at Login Page', async () => {
        await expect(continuumLoginModule.continuumLoginPage.btnUsername.isPresent()).toEqual(true);
        await expect(continuumLoginModule.continuumLoginPage.btnPassword.isPresent()).toEqual(true);
        await expect(continuumLoginModule.continuumLoginPage.btnLogin.isEnabled()).toEqual(true);
        await continuumLoginModule.login('abc123', 'qatest');
        await continuumLoginModule.validateWrongUsernameandPasswordFields();
    });

    it('2. should validate user can access with correct credentials', async () => {
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);        
    }); 
    
    afterAll(async () => {
        await continuumLoginModule.logout();
    });
});