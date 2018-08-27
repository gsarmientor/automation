/*====================================================================
 * No of Locators	: 9
 * Purpose			: Login Page Locators
 * Create_Date		: 11/02/2017
 * Last Modified	: 07/26/2017
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 
 export class CommonPage {
 
     // Locators
     btnAdminIcon = element(by.xpath("//span[contains(@class,'icon-button')]/span[contains(@class,'icon-config-gear')]"));
     adminItemSelector = "span[class='title']";
     navItemSelector = "a[class='title']";
     tabSelector = "li[class='tab-title active']";
     
     // Variables...
     testUser= 'administrator';
     testPwd = 'administrator';
     // ...for Project page
     randomNumber = Math.floor(1 + Math.random()*1000);
     projectNameManual = "E2E " + this.randomNumber;
     projectType= 'Source';
     projectSource = "GitHub Webhook";
     projectArtifact = "Project Art";
     // ...for Package page
     pckgName = "Pckg for " + this.projectNameManual;
     pckgDesc = "Desc for " + this.pckgName;
     // ...for Progression page
     progName = "Prog for " + this.projectNameManual;
     progDesc = "Desc " + this.progName;
     phaseName1 = "E2E Ph01";
     phaseDescr1 = "E2E Desc01";
     phaseName2 = "E2E Ph02";
     phaseDescr2 = "E2E Desc02";
     phaseName3 = "E2E Ph03";
     phaseDescr3 = "E2E Desc03";
     phaseName4 = "E2E Ph04";
     phaseDescr4 = "E2E Desc04";
     //...for Github
     githubName = 'versionone';
     githubOwner = 'versionone';
     githubToken = '56345a4a2daaa1aad5269ff8c75a18aedb443e5f';
     //...for task commands
     sshAssetInfo = 'vmserver'
     winRMAssetInfo = 'address=[$ server $] user=[$ user $] password=[$ password $] winrm_transport=credssp';
     httpRequestURLInfo = 'http://10.200.73.238:8080/automate/uiMethods/wmGetServerTime'

     //..messages
     messageDialog = element(by.css('div[id="toasts-container"]'));
     successMessage = element(by.css('div[id="toasts-container"]>div[class="toast success"]>div[class="content"]>div[class="title"]'));
 

     //Newly Added Objects for the User Logged in Page
     projectsTab = element(by.css('a[href*="/flow/projects"]'));
     progressionTab = element(by.css('a[href*="/flow/progressions"]'));
     pipelineTab = element(by.xpath("//span[contains(text(),'pipeline')]"));
     tasksTab = element(by.xpath("//span[contains(text(),'tasks')]"));
     perspectivesTab = element(by.xpath("//span[contains(text(),'perspectives')]"));
     teamCoreSelector = element(by.xpath(".//*[@id='react-select-2--value']/div[2]/input"));



 };
