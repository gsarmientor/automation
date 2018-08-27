/*====================================================================
 * No of Test cases	: 1
 * Purpose			: Package Page Test Cases
 * Create_Date		: 02/02/2018
 * Last Modified	: 04/05/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {PackageModule} from '../../pageobjects/package/package_module.po';
 
 describe('Continuum Regression - 4. Package page \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let continuumCommonPage: CommonPage;
     let packageModule: PackageModule;
     continuumCommonModule = new CommonModule();
     continuumLoginModule = new LoginModule();
     continuumCommonPage = new CommonPage();
     packageModule = new PackageModule();

     beforeAll( async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Packages');  
     });
 
     it("4.1 validate items on the 'Add New' dialog", async () => {
        await packageModule.validateAddNewDialog();
     });

     it("4.2 add new Package",  async () => {
        await packageModule.addPackage("DEFAULT",continuumCommonPage.pckgName, continuumCommonPage.pckgDesc);
     });
     
     it("4.3 validate Package Details",  async () => {
        await packageModule.validatePackageDetails();
     });
     
     it("4.4 select a Package",  async () => {
        await packageModule.selectPackage(continuumCommonPage.pckgName);
     });

     it("4.5 associate a Progression",  async () => {
        await packageModule.associateProgression(continuumCommonPage.progName);
     });

     it("4.6 associate an Artifact",  async () => {
        await packageModule.associateArtifact("","");
     });

     afterAll( async () => {
        browser.sleep(3000);
        await continuumLoginModule.logout();
    });

 });