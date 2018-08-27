/*====================================================================
 * No of Test cases	: 1
 * Purpose			: End-to-End Test Case
 * Create_Date		: 02/18/2018
 * Last Modified	: 07/06/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {ProjectModule} from '../../pageobjects/project/project_module.po';
 import {PackageModule} from '../../pageobjects/package/package_module.po';
 import {ProgressionModule} from '../../pageobjects/progression/progression_module.po';
 import {ProgressionPage} from '../../pageobjects/progression/progression_page.po';
import { async } from 'q';
 import { ProjectPage } from '../../pageobjects/project/project_page.po';
 
 describe('Continuum End-to-End: Set up Configuration \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let projectModule: ProjectModule;
     let progressionModule: ProgressionModule;
     let progressionPage: ProgressionPage;
     let packageModule: PackageModule;
     let continuumCommonPage: CommonPage;
     let projectPage: ProjectPage;

     browser.manage().window().maximize();
     browser.waitForAngularEnabled(false);
     
     continuumCommonModule = new CommonModule();
     continuumCommonPage = new CommonPage();
     continuumLoginModule = new LoginModule();
     projectModule = new ProjectModule();
     progressionModule = new ProgressionModule();
     progressionPage = new ProgressionPage();
     packageModule = new PackageModule();
     projectPage = new ProjectPage();

     let testCounter = Math.floor(1 + Math.random()*1000);
          
     // Log in
     it("E2E: 1. Log in to the application", async () => {
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
     })
        
     // Create a Progression
     it("E2E: 2. Add new Progression", async () => {
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Progressions');
        await console.log("Progression Name: " + continuumCommonPage.progName)
        await progressionModule.addProgression(continuumCommonPage.progName, continuumCommonPage.progDesc);
        await browser.wait(ExpectedConditions.textToBePresentInElement(progressionPage.progressionName, continuumCommonPage.progName), 3000);
        await expect(progressionPage.progressionName.getText()).toContain(continuumCommonPage.progName);
     });

    //  Add Phases
     it("E2E: 3. Add Phases to Progression", async () => {
        await progressionModule.selectProgression(continuumCommonPage.progName);
        await progressionModule.addPhase(continuumCommonPage.phaseName1, continuumCommonPage.phaseDescr1);
        await progressionModule.addPhase(continuumCommonPage.phaseName2, continuumCommonPage.phaseDescr2);
        let addedPhases = await element.all(by.css('tr>td[class="nowrap"]')).getText();
        await expect(addedPhases).toContain(continuumCommonPage.phaseName2);
     });

     // Create Project (manually)
     it('E2E: 4. Create New project with Source type', async () => {
        await console.log("Project Name: " + continuumCommonPage.projectNameManual)
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Projects');
        await projectModule.createNewProject("Manually", continuumCommonPage.projectNameManual,"DEFAULT", "Manual");
        await projectModule.setSourceTypetoNewProject(continuumCommonPage.projectNameManual, continuumCommonPage.projectType);
        await projectModule.setSourceType(continuumCommonPage.projectSource);
    });

     // Create Artifact on Project
     it('E2E: 5. Create Artifact on Project', async () => {
        await console.log("Artifact Name: " + continuumCommonPage.projectArtifact)
        await projectModule.addArtifact(continuumCommonPage.projectArtifact);
     });

     // Create a Package
     it("E2E: 6. Create Package", async () => {
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Packages');
        await console.log("Package Name: " + continuumCommonPage.pckgName)
        await packageModule.addPackage("DEFAULT",continuumCommonPage.pckgName, continuumCommonPage.pckgDesc);
     });

     // Associate an Artifact with the Package
     it("E2E: 7. Associate the Artifact with the Package", async () => {
        await packageModule.associateArtifact(continuumCommonPage.projectNameManual, continuumCommonPage.projectArtifact);
     });

     // Associate a Progression with the Package
     it("E2E: 8. Associate the Progression with the Package", async () => {
        await packageModule.associateProgression(continuumCommonPage.progName);
     });

 });