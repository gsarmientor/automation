/*====================================================================
 * No of Test cases	: 5
 * Purpose			: Team Page Test Cases
 * Create_Date		: 08/07/2018
 * Last Modified	: 08/07/2018
 * Author			: Swatik
 * Developed By		: Swatik
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, ElementFinder, protractor} from 'protractor';
 const path = require('path');
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {TeamModule} from '../../pageobjects/team/team_module.po';
import { async } from '../../../../node_modules/@types/q';
import { URLSearchParams } from 'url';
import {config} from '../../../../conf';

 
 describe('Continuum Regression - 4. Team page \n', function () {
     let continuumCommonModule: CommonModule;
     let continuumLoginModule: LoginModule;
     let continuumCommonPage: CommonPage;
     let teamModule: TeamModule;
     continuumCommonModule = new CommonModule();
     continuumLoginModule = new LoginModule();
     continuumCommonPage = new CommonPage();
     teamModule = new TeamModule();
     let teamName = 'Team' + continuumCommonModule.generateRandomNumber();
     let teamName_new = 'Team' + continuumCommonModule.generateRandomNumber();  
     let teamName1,teamDesc1,teamName2,teamDesc2;

     beforeAll( async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Teams');
       
     });

     it("1. Validate elements at Team admin page Create Team", async() => {
        await teamModule.validateTeamAdminPage();
     });

     it("2. Create Team", async() => {
        await teamModule.createTeam(teamName,teamName);
     });

     it("3. Validate tabs after Team is created", async() => {
        await teamModule.validateTeamTabs();
     });
     
     it("4. Edit & Update Team1 Data", async() => {
        teamName1 = "Team" + continuumCommonModule.generateRandomNumber();
        teamDesc1 = "Desc" + continuumCommonModule.generateRandomNumber();
        await teamModule.editTeam(teamName1,teamDesc1);
     });

     it("5. Create Team2", async() => {
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Teams');
        await teamModule.createTeam(teamName_new,teamName_new);
     });

     it("6. Edit & Update Team2 Data", async() => {
        teamName2 = "Team" + continuumCommonModule.generateRandomNumber();
        teamDesc2 = "Desc" + continuumCommonModule.generateRandomNumber();
        await teamModule.editTeam(teamName2,teamDesc2);
     });

     afterAll(async () =>  {
        await continuumLoginModule.logout();
    });
 });
