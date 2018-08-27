"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 9
 * Purpose			: Login Page Locators
 * Create_Date		: 11/02/2017
 * Last Modified	: 07/26/2017
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var CommonPage = /** @class */ (function () {
    function CommonPage() {
        // Locators
        this.btnAdminIcon = protractor_1.element(protractor_1.by.xpath("//span[contains(@class,'icon-button')]/span[contains(@class,'icon-config-gear')]"));
        this.adminItemSelector = "span[class='title']";
        this.navItemSelector = "a[class='title']";
        this.tabSelector = "li[class='tab-title active']";
        // Variables...
        this.testUser = 'administrator';
        this.testPwd = 'administrator';
        // ...for Project page
        this.randomNumber = Math.floor(1 + Math.random() * 1000);
        this.projectNameManual = "E2E " + this.randomNumber;
        this.projectType = 'Source';
        this.projectSource = "GitHub Webhook";
        this.projectArtifact = "Project Art";
        // ...for Package page
        this.pckgName = "Pckg for " + this.projectNameManual;
        this.pckgDesc = "Desc for " + this.pckgName;
        // ...for Progression page
        this.progName = "Prog for " + this.projectNameManual;
        this.progDesc = "Desc " + this.progName;
        this.phaseName1 = "E2E Ph01";
        this.phaseDescr1 = "E2E Desc01";
        this.phaseName2 = "E2E Ph02";
        this.phaseDescr2 = "E2E Desc02";
        this.phaseName3 = "E2E Ph03";
        this.phaseDescr3 = "E2E Desc03";
        this.phaseName4 = "E2E Ph04";
        this.phaseDescr4 = "E2E Desc04";
        //...for Github
        this.githubName = 'versionone';
        this.githubOwner = 'versionone';
        this.githubToken = '56345a4a2daaa1aad5269ff8c75a18aedb443e5f';
        //...for task commands
        this.sshAssetInfo = 'vmserver';
        this.winRMAssetInfo = 'address=[$ server $] user=[$ user $] password=[$ password $] winrm_transport=credssp';
        this.httpRequestURLInfo = 'http://10.200.73.238:8080/automate/uiMethods/wmGetServerTime';
        //..messages
        this.messageDialog = protractor_1.element(protractor_1.by.css('div[id="toasts-container"]'));
        this.successMessage = protractor_1.element(protractor_1.by.css('div[id="toasts-container"]>div[class="toast success"]>div[class="content"]>div[class="title"]'));
        //Newly Added Objects for the User Logged in Page
        this.projectsTab = protractor_1.element(protractor_1.by.css('a[href*="/flow/projects"]'));
        this.progressionTab = protractor_1.element(protractor_1.by.css('a[href*="/flow/progressions"]'));
        this.pipelineTab = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'pipeline')]"));
        this.tasksTab = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'tasks')]"));
        this.perspectivesTab = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'perspectives')]"));
        this.teamCoreSelector = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-2--value']/div[2]/input"));
    }
    return CommonPage;
}());
exports.CommonPage = CommonPage;
;
