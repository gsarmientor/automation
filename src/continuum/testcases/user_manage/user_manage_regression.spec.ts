/*====================================================================
 * No of Test cases	: 6
 * Purpose			: User Manage Page Test Cases
 * Create_Date		: 07/13/2018
 * Last Modified	: 08/2/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {UserModule} from '../../pageobjects/user_manage/user_module.po';
import { async } from 'q';
 
 describe('Continuum Regression - 6. User Manage page \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let continuumCommonPage: CommonPage;
     let userModule: UserModule;
     continuumCommonModule = new CommonModule();
     continuumLoginModule = new LoginModule();
     continuumCommonPage = new CommonPage();
     userModule = new UserModule();


     beforeAll( async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Users');

     });

     it("6.1 validate elements at admin user page", async() => {
        await userModule.validateAdminUserPage();
     });

     it("6.2 validate elements at modify user page", async() => {
        await userModule.validateTabsModifyUser('Administrator');
     });

     it("6.3 create new administrator user", async() => {
        await userModule.createNewUser('QATester', 'admin@collab.net', 'Enabled', 'Administrator', 'Default', 'Team Administrator');
     });

     it("6.4 delete new administrator user", async() => {
        await userModule.deleteUser('QATester');
     });

     it("6.5 copy Administrator user", async() => {
         await userModule.copyUser('Administrator', 'administrator1', 'admin@collab.net');
     });

     it("6.6 filter by username", async() => {
         await userModule.filterByUser('administrator1');
     })
     

     afterAll(async () =>  {
        await browser.sleep(3000);
        await continuumLoginModule.logout();
    });

 });