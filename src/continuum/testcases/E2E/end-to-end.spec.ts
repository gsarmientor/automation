/*====================================================================
 * No of Test cases	: 1
 * Purpose			: End-to-End Test Case
 * Create_Date		: 02/18/2018
 * Last Modified	: 02/18/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam
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
 
 describe('Continuum End-to-End: Set up Configuration \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let projectModule: ProjectModule;
     let progressionModule: ProgressionModule;
     let packageModule: PackageModule;
     let continuumCommonPage: CommonPage;

     browser.manage().window().maximize();
     browser.waitForAngularEnabled(false);
     
     continuumCommonModule = new CommonModule();
     continuumCommonPage = new CommonPage();
     continuumLoginModule = new LoginModule();
     projectModule = new ProjectModule();
     progressionModule = new ProgressionModule();
     packageModule = new PackageModule();
     
     // Log in
     continuumLoginModule.get();
     continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
     
     // Create a Progression
     it("E2E: 1. Add new Progression", () => {
        continuumCommonModule.clickAdminButton();
        continuumCommonModule.selectItemfromAdminMenu('Progressions');
        console.log("Progression Name: " + continuumCommonPage.progName)
        progressionModule.addProgression(continuumCommonPage.progName, continuumCommonPage.progDesc);
     });

     // Add Phases
     it("E2E: 2. Add Phases to Progression", () => {
        progressionModule.selectProgression(continuumCommonPage.progName);
        progressionModule.addPhase(continuumCommonPage.phaseName1, continuumCommonPage.phaseDescr1);
        progressionModule.addPhase(continuumCommonPage.phaseName2, continuumCommonPage.phaseDescr2);
        progressionModule.addPhase(continuumCommonPage.phaseName3, continuumCommonPage.phaseDescr3);
        progressionModule.addPhase(continuumCommonPage.phaseName4, continuumCommonPage.phaseDescr4);
     });

     // Create Project (manually)
     it('E2E: 3. Create New project with Source type', () => {
        console.log("Project Name: " + continuumCommonPage.projectNameManual)
        continuumCommonModule.clickAdminButton();
        continuumCommonModule.selectItemfromAdminMenu('Projects');
        projectModule.createNewProject(continuumCommonPage.projectNameManual, "Manually", "DEFAULT","Manual");
        projectModule.setSourceTypetoNewProject(continuumCommonPage.projectNameManual, continuumCommonPage.projectType);
        projectModule.setSourceType(continuumCommonPage.projectSource);
    });

     // Create Artifact on Project
     it('E2E: 4. Create Artifact on Project', () => {
        console.log("Artifact Name: " + continuumCommonPage.projectArtifact)
        projectModule.addArtifact(continuumCommonPage.projectArtifact);
     });

     // Create a Package
     it("E2E: 5. Create Package", () => {
        continuumCommonModule.clickAdminButton();
        continuumCommonModule.selectItemfromAdminMenu('Packages');
        console.log("Package Name: " + continuumCommonPage.pckgName)
        packageModule.addPackage("DEFAULT",continuumCommonPage.pckgName, continuumCommonPage.pckgDesc);
     });

     // Associate an Artifact with the Package
     it("E2E: 6. Associate the Artifact with the Package", () => {
        packageModule.associateArtifact(continuumCommonPage.projectNameManual, continuumCommonPage.projectArtifact);
     });

     it("E2E: 7. Associate the Progression with the Package", () => {
        packageModule.associateProgression(continuumCommonPage.progName);
     });

 });