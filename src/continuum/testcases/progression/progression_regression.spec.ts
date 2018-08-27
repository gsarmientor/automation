/*====================================================================
 * No of Test cases	: 1
 * Purpose			: Progression Page Test Cases
 * Create_Date		: 02/12/2018
 * Last Modified	: 07/03/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {ProgressionModule} from '../../pageobjects/progression/progression_module.po';
import { ProgressionPage } from '../../pageobjects/progression/progression_page.po';
 
 describe('Continuum Regression - 5. Progression page \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let progressionModule: ProgressionModule;
     let progressionPage: ProgressionPage;
     let continuumCommonPage: CommonPage;
     
     continuumCommonModule = new CommonModule();
     continuumCommonPage = new CommonPage();
     continuumLoginModule = new LoginModule();
     progressionModule = new ProgressionModule();
     progressionPage = new ProgressionPage();

     beforeAll( async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Progressions'); 
     });
     
     it("5.1 validate items on the 'Add New' dialog", async () => {
        await progressionModule.validateAddNewDialog();
     });
     
     it("5.2 Add new Progression", async () => {
        await progressionModule.addProgression(continuumCommonPage.progName, continuumCommonPage.progDesc);
     });

     it("5.3 open and validate items on the Progression Details tab", async () => {
        await progressionModule.validateProgressionDetails();
     });

     it("5.4 add Phases to Progression", async () => {
        await progressionModule.addPhase(continuumCommonPage.phaseName1, continuumCommonPage.phaseDescr1);
        await progressionModule.addPhase(continuumCommonPage.phaseName2, continuumCommonPage.phaseDescr2);
        // await progressionModule.addPhase(continuumCommonPage.phaseName3, continuumCommonPage.phaseDescr3);
        // await progressionModule.addPhase(continuumCommonPage.phaseName4, continuumCommonPage.phaseDescr4);
        await browser.refresh();
        // await progressionPage.newPhaseDoneButton.click();
     });

     afterAll( async () => {
        await continuumLoginModule.logout();
    });
      
 });