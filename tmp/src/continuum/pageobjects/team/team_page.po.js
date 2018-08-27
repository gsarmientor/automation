"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 0
 * Purpose			: Team Page Locators
 * Create_Date		: 06/08/2018
 * Last Modified	: 06/08/2018
 * Author			: Swatik
 * Developed By		: Swatik
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var TeamPage = /** @class */ (function () {
    function TeamPage() {
        //Main Team page web elements
        this.ddViewTeam = protractor_1.element(protractor_1.by.css(".Select-placeholder"));
        this.ddTopTeam = protractor_1.element(protractor_1.by.css("div[class='Select-value']"));
        this.addTeam = protractor_1.element(protractor_1.by.css('button[class="create-button"]'));
        this.teamName = protractor_1.element(protractor_1.by.css('input[id="addTeamName"]'));
        this.teamDesc = protractor_1.element(protractor_1.by.css('textarea[id="description"]'));
        this.teamSave = protractor_1.element(protractor_1.by.css('button[class="save button tiny radius"]'));
        this.teamEditSave = protractor_1.element(protractor_1.by.css(".important-button"));
        this.teamDetails = protractor_1.element(protractor_1.by.linkText('Details'));
        this.teamUsers = protractor_1.element(protractor_1.by.linkText('Users'));
        this.teamProjects = protractor_1.element(protractor_1.by.css('li.divider.tab-title:nth-child(3)'));
        this.teamPipelines = protractor_1.element(protractor_1.by.css('li.divider.tab-title:nth-child(4)'));
        this.teamPackages = protractor_1.element(protractor_1.by.css('li.divider.tab-title:nth-child(5)'));
        this.teamTasks = protractor_1.element(protractor_1.by.linkText('Tasks'));
        this.gearIcon = protractor_1.element(protractor_1.by.css("span.svg-icon.icon-config-gear.undefined"));
        this.createTeam = protractor_1.element(protractor_1.by.css("a.menu-item[href='/team_manage']"));
        //   this.selectTeam = function(optValue)
        //   {
        //     this.ddViewTeam.element(by.cssContainingText('span',optValue)).click();
        //   };
    }
    return TeamPage;
}());
exports.TeamPage = TeamPage;
