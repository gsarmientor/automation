/*====================================================================
 * No of Functions	: 1
 * Purpose			: Team Page functions
 * Create_Date		: 08/06/2018
 * Last Modified	: 08/06/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 import {CommonPage} from '../common/common_page.po';
 import {CommonModule} from '../common/common_module.po';
 import {TeamPage} from '../team/team_page.po';
 
 export class TeamModule {
    public continuumCommonPage= new CommonPage();
    public continuumCommonModule= new CommonModule();
    public teamPage = new TeamPage();

    //validates elements at the task admin page
    async validateTeamAdminPage() {
        await expect(this.teamPage.addTeam.isDisplayed()).toBeTruthy();
        await expect(this.teamPage.ddViewTeam.isDisplayed()).toBeTruthy();
        await expect(this.teamPage.ddTopTeam.isDisplayed()).toBeTruthy();
    }
    async createTeam(teamName: string, teamDesc: string) {
        let teamName1 = teamName + this.continuumCommonModule.generateRandomNumber();
        let teamDesc1 = teamDesc + this.continuumCommonModule.generateRandomNumber();
        await this.teamPage.addTeam.click();
        await browser.sleep(3000);
        await browser.wait(ExpectedConditions.presenceOf(this.teamPage.teamSave), 3000);
        await this.teamPage.teamName.sendKeys(teamName1);
        await this.teamPage.teamDesc.sendKeys(teamDesc1);
        await this.teamPage.teamSave.click();
        await browser.sleep(2000);
        await browser.wait(ExpectedConditions.presenceOf(this.teamPage.teamDetails), 3000);
    }

    async validateTeamTabs()
    {
        await expect(this.teamPage.teamDetails.isDisplayed()).toBeTruthy();
        await expect(this.teamPage.teamUsers.isDisplayed()).toBeTruthy();
        await expect(this.teamPage.teamProjects.isDisplayed()).toBeTruthy();
        await expect(this.teamPage.teamPipelines.isDisplayed()).toBeTruthy();
        await this.teamPage.teamUsers.click();
        await this.teamPage.teamProjects.click();
        await this.teamPage.teamPackages.click();
        await this.teamPage.teamPipelines.click();
        await this.teamPage.teamDetails.click();
    }
    async editTeam(teamName: string, teamDesc: string) {
        //    let temp = 'qa ' + this.continuumCommonModule.generateRandomNumber();
            await this.teamPage.teamName.clear();
            await this.teamPage.teamName.sendKeys(teamName);
            await this.teamPage.teamDesc.clear();
            await this.teamPage.teamDesc.sendKeys(teamDesc);
            await browser.wait(ExpectedConditions.presenceOf(this.teamPage.teamEditSave), 3000);
            await this.teamPage.teamEditSave.click();
            await browser.sleep(2000);
            await browser.wait(ExpectedConditions.presenceOf(this.teamPage.teamDetails), 3000);
            
        }
 }
