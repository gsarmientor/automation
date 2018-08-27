/*====================================================================
 * No of Functions	: 1
 * Purpose			: Login functions
 * Create_Date		: 01/21/2018
 * Last Modified	: 06/26/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino van Dam
 ======================================================================*/
import {browser, element, by, ExpectedConditions, protractor} from 'protractor';
import {CommonModule} from '../common/common_module.po';
import {LoginPage} from '../login/login_page.po';
import {config} from '../../../../conf';

export class LoginModule {
    public commonModule = new CommonModule();
    public continuumLoginPage = new LoginPage();
    
    //This function is used to validate the loginButton
   async validateLoginButton() {
       await browser.wait(ExpectedConditions.presenceOf(this.continuumLoginPage.btnLogin),2000);
       await expect(this.continuumLoginPage.btnLogin.isEnabled()).toBe(false, 'Oops, login button seems to be enabled.');
    }

    //This function is used to validate wrong username and password fields
   async validateWrongUsernameandPasswordFields() {
        var alert = this.continuumLoginPage.boxLoginAlert;
       await this.commonModule.waitForElementToBePresent(alert);
       await expect(alert.getText()).toContain("Invalid Username or Password");
    }

    //This function is used to navigate to project pages without logging in
   async tryNavigatingToOtherPages(pageNames = Array, loginurl = String) {
        for (var i = 0; i < pageNames.length; ++i) {
           await browser.get(pageNames[i]);
           await browser.getCurrentUrl().then( async function (url) {
                await expect(url).toEqual(loginurl, 'Oops... was able to navigate to "' + pageNames[i] + '" page before logging in.');
            });
        };
    }

    //This function is used to navigate to project pages after logging in
   async navigateToOtherPagesafterLoggingIn(pageNames = Array) {
        // -1 to not include the fake url from pages array
        for (var i = 0; i < pageNames.length - 1; ++i) {
            const targetURL = pageNames[i];
            await browser.get(pageNames[i]).then(async function (url1) {
                await browser.getCurrentUrl().then( async function (url) {
                    await expect(url).toEqual(targetURL, 'Oops... was not able to navigate to "' + targetURL + '" page after logging in.');
                });
            });
        };
    }

    //This function is used to get the DLM Host URL
    async get() {
        await browser.get(`${config.CTMHostUrl}`);
        browser.ignoreSynchronization = true;
    }

    //This function is used to set the user name
   async setUsername(username: string) {
       await this.continuumLoginPage.btnUsername.sendKeys(username);
    }

    //This function is used to set the password
   async setPassword(password: string) {
       await this.continuumLoginPage.btnPassword.sendKeys(password);
    }

    async login(username: string, password: string) {
        await this.get();
        await this.setUsername(username);
        await this.setPassword(password);
        await this.continuumLoginPage.btnLogin.click();
    }

    //This function is used to logout from the application
   async logout() {
       await browser.wait(ExpectedConditions.visibilityOf(this.continuumLoginPage.btnAccount), 5000);
       await this.continuumLoginPage.btnAccount.click();
       await expect(this.continuumLoginPage.btnLogout).toBeTruthy('Oops... Logout button not present.');
       await this.continuumLoginPage.btnLogout.click();
    }

    //This function is used to go to user preferences page
   async navigateToUserPrefernces() {
       await this.continuumLoginPage.btnPreferences.click();
    }
}