/*====================================================================
 * No of Test cases	: 1
 * Purpose			: Login Page Test Cases
 * Create_Date		: 01/21/2018
 * Last Modified	: 06/26/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino van Dam
 ======================================================================*/
import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
const path = require('path');
import {LoginModule} from '../../pageobjects/login/login_module.po';
import {CommonModule} from '../../pageobjects/common/common_module.po';
import {CommonPage} from '../../pageobjects/common/common_page.po';
import { async } from 'q';

describe('Continuum Regression - 2. Admin pages \n', function () {
    let continuumCommonModule: CommonModule;
    let continuumLoginModule: LoginModule;
    let continuumCommonPage: CommonPage;
    browser.manage().window().maximize();
    continuumCommonModule = new CommonModule();
    continuumCommonPage = new CommonPage();
    browser.waitForAngularEnabled(false);
    continuumLoginModule = new LoginModule();

    beforeAll( async () => {
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
     });

    it('1. should validate pages in Admin menu', async () => {
        await continuumCommonModule.validateAdminMenu();
    });

    afterAll( async () => {
        await continuumLoginModule.logout();
    });

});