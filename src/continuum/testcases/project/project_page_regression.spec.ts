/*====================================================================
 * No of Test cases	: 6
 * Purpose			: Project Page Test Cases
 * Create_Date		: 01/31/2018
 * Last Modified	: 07/05/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {ProjectModule} from '../../pageobjects/project/project_module.po';
 
 describe('Continuum Regression - 3. Project page \n', () => {
     let continuumCommonModule: CommonModule;
     let continuumCommonPage: CommonPage;
     let continuumLoginModule: LoginModule;
     let projectModule: ProjectModule;
     let projectNameAuto: string;
     let projectNamePartI = 'E2E ';
     let projectNameManualSource : string;
     let projectTypeSource = 'Source';
     let projectNameManualInteg: string;
     let projectTypeInteg = 'Integration';
     let projectNameManualGen: string;
     let projectTypeGen = 'General';

     beforeAll( async () => {
        continuumCommonModule = new CommonModule();
        continuumCommonPage = new CommonPage();
        continuumLoginModule = new LoginModule();
        projectModule = new ProjectModule();
         
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Projects'); 

        projectNameAuto = 'Test Project Wizard ' + continuumCommonModule.generateRandomNumber();
        projectNameManualSource = projectNamePartI + continuumCommonModule.generateRandomNumber();
        projectNameManualInteg = projectNamePartI + continuumCommonModule.generateRandomNumber();
        projectNameManualGen = projectNamePartI + continuumCommonModule.generateRandomNumber();

     });
 
     it('3.1 validate items at Project Page', async () => {
         await projectModule.validateProjectPageItems();
     });

     it('3.2 create new project Manually with Source type',  async () => {
         await projectModule.createNewProject("Manually", projectNameManualSource, "DEFAULT","Manual");
         await projectModule.setSourceTypetoNewProject(projectNameManualSource, projectTypeSource);
     });

     it('3.2.1 tabs are present for new project Source type',  async () => {
         await projectModule.validateTabsforNewProject(projectNameManualSource, projectTypeSource);         
     });

     it('3.3 create new project Manually with Integration type',  async () => {
         await projectModule.createNewProject("Manually", projectNameManualInteg,"DEFAULT", "Manual");
         await projectModule.setSourceTypetoNewProject(projectNameManualInteg, projectTypeInteg);
    });

    it('3.3.1 tabs are present for new Integration project type',  async () => {
         await projectModule.validateTabsforNewProject(projectNameManualInteg, projectTypeInteg);         
     });

    it('3.4 create new project Manually with General type',  async () => {
         await projectModule.createNewProject("Manually", projectNameManualGen,"DEFAULT","Manual");
         await projectModule.setSourceTypetoNewProject(projectNameManualGen, projectTypeGen);
    });

    it('3.4.1 tabs are present for new Integration project type',  async () => {
         await projectModule.validateTabsforNewProject(projectNameManualGen, projectTypeGen);         
     });

    xit('3.5 create a new project using the wizzard',  async () => {
         await projectModule.createNewProject("Wizard", projectNameAuto,"DEFAULT", 'VersionOne');
     });

    it('3.6 Copy project to a new one',  async () => {
        let projectNameNew = "Copy from project " + projectNameManualSource;
         await projectModule.copyProject(projectNameManualSource, projectNameNew);

    });

    afterAll( async () => {
        await browser.sleep(3000);
        await continuumLoginModule.logout();
    });
 });