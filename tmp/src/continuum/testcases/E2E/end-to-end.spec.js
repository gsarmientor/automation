"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Test cases	: 1
 * Purpose			: End-to-End Test Case
 * Create_Date		: 02/18/2018
 * Last Modified	: 02/18/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var path = require('path');
var login_module_po_1 = require("../../pageobjects/login/login_module.po");
var common_module_po_1 = require("../../pageobjects/common/common_module.po");
var common_page_po_1 = require("../../pageobjects/common/common_page.po");
var project_module_po_1 = require("../../pageobjects/project/project_module.po");
var package_module_po_1 = require("../../pageobjects/package/package_module.po");
var progression_module_po_1 = require("../../pageobjects/progression/progression_module.po");
describe('Continuum End-to-End: Set up Configuration \n', function () {
    var continuumCommonModule;
    var continuumLoginModule;
    var projectModule;
    var progressionModule;
    var packageModule;
    var continuumCommonPage;
    protractor_1.browser.manage().window().maximize();
    protractor_1.browser.waitForAngularEnabled(false);
    continuumCommonModule = new common_module_po_1.CommonModule();
    continuumCommonPage = new common_page_po_1.CommonPage();
    continuumLoginModule = new login_module_po_1.LoginModule();
    projectModule = new project_module_po_1.ProjectModule();
    progressionModule = new progression_module_po_1.ProgressionModule();
    packageModule = new package_module_po_1.PackageModule();
    // Log in
    continuumLoginModule.get();
    continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
    // Create a Progression
    it("E2E: 1. Add new Progression", function () {
        continuumCommonModule.clickAdminButton();
        continuumCommonModule.selectItemfromAdminMenu('Progressions');
        console.log("Progression Name: " + continuumCommonPage.progName);
        progressionModule.addProgression(continuumCommonPage.progName, continuumCommonPage.progDesc);
    });
    // Add Phases
    it("E2E: 2. Add Phases to Progression", function () {
        progressionModule.selectProgression(continuumCommonPage.progName);
        progressionModule.addPhase(continuumCommonPage.phaseName1, continuumCommonPage.phaseDescr1);
        progressionModule.addPhase(continuumCommonPage.phaseName2, continuumCommonPage.phaseDescr2);
        progressionModule.addPhase(continuumCommonPage.phaseName3, continuumCommonPage.phaseDescr3);
        progressionModule.addPhase(continuumCommonPage.phaseName4, continuumCommonPage.phaseDescr4);
    });
    // Create Project (manually)
    it('E2E: 3. Create New project with Source type', function () {
        console.log("Project Name: " + continuumCommonPage.projectNameManual);
        continuumCommonModule.clickAdminButton();
        continuumCommonModule.selectItemfromAdminMenu('Projects');
        projectModule.createNewProject(continuumCommonPage.projectNameManual, "Manually", "DEFAULT", "Manual");
        projectModule.setSourceTypetoNewProject(continuumCommonPage.projectNameManual, continuumCommonPage.projectType);
        projectModule.setSourceType(continuumCommonPage.projectSource);
    });
    // Create Artifact on Project
    it('E2E: 4. Create Artifact on Project', function () {
        console.log("Artifact Name: " + continuumCommonPage.projectArtifact);
        projectModule.addArtifact(continuumCommonPage.projectArtifact);
    });
    // Create a Package
    it("E2E: 5. Create Package", function () {
        continuumCommonModule.clickAdminButton();
        continuumCommonModule.selectItemfromAdminMenu('Packages');
        console.log("Package Name: " + continuumCommonPage.pckgName);
        packageModule.addPackage("DEFAULT", continuumCommonPage.pckgName, continuumCommonPage.pckgDesc);
    });
    // Associate an Artifact with the Package
    it("E2E: 6. Associate the Artifact with the Package", function () {
        packageModule.associateArtifact(continuumCommonPage.projectNameManual, continuumCommonPage.projectArtifact);
    });
    it("E2E: 7. Associate the Progression with the Package", function () {
        packageModule.associateProgression(continuumCommonPage.progName);
    });
});
