/*====================================================================
 * No of Locators	: 0
 * Purpose			: Team Page Locators
 * Create_Date		: 06/08/2018
 * Last Modified	: 06/08/2018
 * Author			: Swatik
 * Developed By		: Swatik
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class TeamPage {
    //Main Team page web elements
    ddViewTeam = element(by.css(".Select-placeholder"));
    ddTopTeam = element(by.css("div[class='Select-value']"));
    addTeam = element(by.css('button[class="create-button"]'));
    teamName = element(by.css('input[id="addTeamName"]'));
    teamDesc = element(by.css('textarea[id="description"]'));
    teamSave = element(by.css('button[class="save button tiny radius"]'));
    teamEditSave = element(by.css(".important-button"));
    teamDetails = element(by.linkText('Details'));
    teamUsers = element(by.linkText('Users'));
    teamProjects = element(by.css('li.divider.tab-title:nth-child(3)'));
    teamPipelines = element(by.css('li.divider.tab-title:nth-child(4)'));
    teamPackages = element(by.css('li.divider.tab-title:nth-child(5)'));
    teamTasks = element(by.linkText('Tasks'));

    gearIcon = element(by.css("span.svg-icon.icon-config-gear.undefined"));
    createTeam = element(by.css("a.menu-item[href='/team_manage']"));

 //   this.selectTeam = function(optValue)
 //   {
 //     this.ddViewTeam.element(by.cssContainingText('span',optValue)).click();
 //   };
 }
