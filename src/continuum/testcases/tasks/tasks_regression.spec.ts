/*====================================================================
 * No of Test cases	: 5
 * Purpose			: Task Page Test Cases
 * Create_Date		: 04/19/2018
 * Last Modified	: 07/05/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {TaskModule} from '../../pageobjects/task/task_module.po';
 
 describe('Continuum Regression - 4. Task page \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let continuumCommonPage: CommonPage;
     let taskModule: TaskModule;
     continuumCommonModule = new CommonModule();
     continuumLoginModule = new LoginModule();
     continuumCommonPage = new CommonPage();
     taskModule = new TaskModule();
     let taskName = 'QA Test' + continuumCommonModule.generateRandomNumber();  


     beforeAll( async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Tasks');

     });

     it("4.1 validate elements at task admin page", async() => {
        await taskModule.validateTaskAdminPage();
     });
 
     it("4.2 validate a task can make a winrm connection", async() => {
        await taskModule.setWinrmConnection(taskName); 
     });

     it("4.3 validate copy task", async() => {
        await taskModule.copyTask(taskName);
     });

     it("4.4 export and import a task", async() => {
        await taskModule.exportandImportTask(taskName);
     });

     it("4.5 delete a task", async() => {
        await taskModule.deleteTask(taskName);
     });

     xit("4.6 make an SSH connection", async() => {
         await taskModule.setSSHConnection(taskName);
     });

     it("4.7 make an HTTP request", async() => {
         await taskModule.makeHTTPCall(taskName, 'Get', continuumCommonPage.httpRequestURLInfo);
     });

     afterAll(async () =>  {
        await browser.sleep(3000);
        await continuumLoginModule.logout();
    });

 });