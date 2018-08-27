/*====================================================================
 * No of Functions	: 10
 * Purpose			: User Manage Page functions
 * Create_Date		: 07/13/2018
 * Last Modified	: 08/2/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor, Key} from 'protractor';

 import {CommonPage} from '../common/common_page.po';
 import {CommonModule} from '../common/common_module.po';
 import {UserPage} from '../user_manage/user_page.po';
import { TestObject } from 'protractor/built/driverProviders';
 
 export class UserModule {
     public continuumCommonPage= new CommonPage();
     public continuumCommonModule= new CommonModule();
     public userPage = new UserPage();


    //Validate elements at admin user page
     async validateAdminUserPage(){
        await expect(this.userPage.addNewUserButton.isDisplayed()).toBeTruthy();
        await expect(this.userPage.copyUserButton.isDisplayed()).toBeTruthy();
        await expect(this.userPage.deleteUserButton.isDisplayed()).toBeTruthy();
        await expect(this.userPage.userFilterField.isDisplayed()).toBeTruthy();
     }
    //Selects a user from the list at User Manage.
     async selectUserfromList(userName: string){
        await browser.sleep(2000);
        await browser.driver.findElement(by.id('users')).then(async (table) => {
            await table.findElements(by.tagName('tr')).then(async (rows) => {
                let i = 0;
                for(i=0; i<rows.length;i++)
                {
                    await rows[i].findElements(by.tagName('td')).then(async (cols) => {
                        await cols[2].getText().then(async (text) => {
                            if (text == userName) {
                                await cols[2].click();
                            };      
                        });
                    });
                };
            });
        });
     }

    //Selects a user from the list at User Manage.
    async markUserfromList(userName: string){
        await browser.sleep(2000);
        await browser.driver.findElement(by.id('users')).then(async (table) => {
            await table.findElements(by.tagName('tr')).then(async (rows) => {
                let i = 0;
                for(i=0; i<rows.length;i++)
                {
                    await rows[i].findElements(by.tagName('td')).then(async (cols) => {
                        await cols[2].getText().then(async (text) => {
                            if (text == userName) {
                                await cols[0].click();
                            };      
                        });
                    });
                };
            });
        });
     }




    //find user in list
    async findUserfromList(userName: string, present: string){
        await browser.sleep(2000);
        await browser.driver.findElement(by.id('users')).then(async (table) => {
            await table.findElements(by.tagName('tr')).then(async (rows) => {
                let i = 0;
                let foundUser = 'Not listed';
                for(i=0; i<rows.length;i++)
                {
                    await rows[i].findElements(by.tagName('td')).then(async (cols) => {
                        await cols[2].getText().then(async (text) => {
                            if (text == userName) {
                                foundUser = 'Listed';
                            };    
                        });
                    });
                };
                expect(foundUser).toEqual(present);      
            });
        });
     }     

    // validates tabs presence and their elements in Modify user dialog
     async validateTabsModifyUser(userName: string) {
        let modifyUserTabs = ['General', 'Groups (Tags)', 'Token', 'Contributor'];
        await this.selectUserfromList(userName);
        await browser.sleep(2000);
        for (let tabIndex in modifyUserTabs)  {
            let tab = browser.element(by.cssContainingText(this.userPage.userModifyTabs, modifyUserTabs[tabIndex]));
            await browser.wait(ExpectedConditions.presenceOf(tab), 2000);
            await expect(tab.isDisplayed()).toBeTruthy();
            await tab.click();
            await browser.sleep(3000);
            await this.validateElementinTab(modifyUserTabs[tabIndex]);

        };
    }

    //This validates elements in a Modify User tab
    async validateElementinTab(tabName: string){
        switch (tabName) {
            case 'General':
                await expect(this.userPage.loginIDfield.isDisplayed()).toBeTruthy();
                await expect(this.userPage.fullNamefield.isDisplayed()).toBeTruthy();
                await expect(this.userPage.emailfield.isDisplayed()).toBeTruthy();
                await expect(this.userPage.statusSelector.isDisplayed()).toBeTruthy();
                await expect(this.userPage.userRoleSelector.isDisplayed()).toBeTruthy();
                await expect(this.userPage.authenticationSelector.isDisplayed()).toBeTruthy();
                await expect(this.userPage.passwordField.isDisplayed()).toBeTruthy();
                await expect(this.userPage.confirmPasswordField.isDisplayed()).toBeTruthy();
                await expect(this.userPage.forcePasswordChange.isDisplayed()).toBeTruthy();
                await expect(this.userPage.expireOnField.isDisplayed()).toBeTruthy();
                await expect(this.userPage.failedLoginAttempts.isDisplayed()).toBeTruthy();
                await expect(this.userPage.failedAttempsButton.isDisplayed()).toBeTruthy();
                await expect(this.userPage.passwordResetButton.isDisplayed()).toBeTruthy();
                await expect(this.userPage.passwordResetInfo.isDisplayed()).toBeTruthy();
                await expect(this.userPage.changeLogButton.isDisplayed()).toBeTruthy();
                // await expect(this.userPage.xButton.isDisplayed()).toBeTruthy();
                await expect(this.userPage.saveButton.isDisplayed()).toBeTruthy();
                break;

            case 'Group (Tags)':
                await expect(this.userPage.saveButton.isDisplayed()).toBeTruthy();
                break;

            case 'Token':
                await expect(this.userPage.saveButton.isDisplayed()).toBeTruthy();
                await expect(this.userPage.token.isDisplayed()).toBeTruthy();
                await expect(this.userPage.revokeTokenButton.isDisplayed()).toBeTruthy();
                break;

            case 'Contributor':
                await expect(this.userPage.saveButton.isDisplayed()).toBeTruthy();
                await expect(this.userPage.contributorField.isDisplayed()).toBeTruthy();
                break;

            default:
                break;
        }
        
    } 

    async createNewUser(userName: string, email: string, status: string, userGlobalRole: string, team: string, teamRole: string) {
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Users');
        await this.userPage.addNewUserButton.click();
        await browser.sleep(2000);
        await browser.element(by.cssContainingText(this.userPage.userModifyTabs, 'General')).click();
        await this.userPage.loginIDfield.sendKeys(userName);
        await this.userPage.fullNamefield.sendKeys(userName);
        await this.userPage.emailfield.sendKeys(email);
        await this.setUserStatus(status);
        await this.setUserGlobalRole(userGlobalRole);
        await this.userPage.isSystemAdminChkBx.click();
        // await this.setUserTeam(team);
        await this.userPage.teamSelector.sendKeys(team + '\n');
        await this.userPage.teamRoleSelector.click().then(async () => {
                await this.selectUserTeamRole(teamRole);
            });
        await this.userPage.passwordField.sendKeys(userName);
        await this.userPage.confirmPasswordField.sendKeys(userName);
        await this.userPage.forcePasswordChange.click();
        await this.userPage.saveButton.click();
        // expect(this.continuumCommonPage.messageDialog.isPresent()).toBeFalsy();
        await this.findUserfromList(userName, 'Listed');

    }

    async setUserStatus(status) {
        switch (status) {
            case 'Enabled':
                await this.userPage.statusSelector.sendKeys('e');
                break;
            case 'Locked':
                await this.userPage.statusSelector.sendKeys('l');
                break;
            case 'Disabled':
                await this.userPage.statusSelector.sendKeys('d');
                break;
            default:
                break;
        };
    }

    async setUserGlobalRole(userGlobalRole) {
        switch (userGlobalRole) {
            case 'User':
                await this.userPage.userRoleSelector.sendKeys('u');
                break;
            case 'Developer':
                await this.userPage.userRoleSelector.sendKeys('d');
                break;
            case 'Administrator':
                await this.userPage.userRoleSelector.sendKeys('a');
                break;
            default:
                break;
        };
    }

    // async setUserTeam(team) {
    //     switch (team) {
    //         case 'Default':
    //             await this.userPage.teamSelector.sendKeys('def\n');
    //             break;
    //         case 'QATeam':
    //             await this.userPage.teamSelector.sendKeys('QAT\n');
    //             break;
    //         case 'DevTeam':
    //             await this.userPage.teamSelector.sendKeys('DevT\n');
    //             break;
    //     }
    // }

    async selectUserTeamRole(teamRole) {
        switch (teamRole) {
            case 'User':
                await browser.actions().sendKeys(Key.ENTER).perform();
                break;
            case 'Developer':
                await browser.actions().sendKeys(Key.ARROW_DOWN, Key.ENTER).perform();
                break;
            case 'Team Administrator':
                await browser.actions().sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER).perform();
                break;
        }
    }

    async deleteUser (userName: string) {
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Users');
        await this.markUserfromList(userName);
        await this.userPage.deleteUserButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.userPage.deleteUserConfirmButton), 3000);
        await this.userPage.deleteUserConfirmButton.click();
        await this.findUserfromList(userName, 'Not listed');
    }

    async copyUser (userNameFrom: string, newUserName: string, email: string) {
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Users');
        await this.markUserfromList(userNameFrom);
        await this.userPage.copyUserButton.click();
        await browser.sleep(2000);
        await browser.element(by.cssContainingText(this.userPage.userModifyTabs, 'General')).click();
        await browser.wait(ExpectedConditions.presenceOf(this.userPage.loginIDfield), 3000);
        await expect(this.userPage.dialogTitle.getText()).toContain('Create New User like');
        await this.userPage.loginIDfield.sendKeys(newUserName);
        await this.userPage.fullNamefield.sendKeys(newUserName);
        await this.userPage.emailfield.sendKeys(email);
        await this.userPage.passwordField.sendKeys(newUserName);
        await this.userPage.confirmPasswordField.sendKeys(newUserName);
        await this.userPage.saveButton.click();
        await this.findUserfromList(newUserName, 'Listed');
    }

    async filterByUser(filterBy: string) {
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Users');
        await browser.wait(ExpectedConditions.elementToBeClickable(this.userPage.userFilterField), 3000);
        await this.userPage.userFilterField.sendKeys(filterBy + '\n');
        await browser.sleep(2000);
        await browser.driver.findElement(by.id('users')).then(async (table) => {
            await table.findElements(by.tagName('tr')).then(async (rows) => {
                let i = 0;
                let timesFoundUser = 0;
                for(i=0; i<rows.length;i++)
                {
                    await rows[i].findElements(by.tagName('td')).then(async (cols) => {
                        await cols[2].getText().then(async (text) => {
                            if (text == filterBy) {
                                timesFoundUser++;
                            };    
                        });
                    });
                };
                expect(timesFoundUser).toEqual(1);
                expect(rows.length).toEqual(1);      
            });
        });
        await this.deleteUser(filterBy);

    }
 }
