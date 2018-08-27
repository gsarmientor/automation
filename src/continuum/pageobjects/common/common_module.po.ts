/*====================================================================
 * No of Functions	: 1
 * Purpose			: Common functions
 * Create_Date		: 01/25/2018
 * Last Modified	: 06/26/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Nithya Pattabiraman
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

import {CommonPage} from '../common/common_page.po';
import { ElementFinder } from 'protractor/built/element';

export class CommonModule {
    public continuumCommonPage = new CommonPage();

    async validateAdminMenu(){

        // This array of arrays contains data about each menu item in the Admin menu
        let adminPages = [["Settings", "Manage Settings", "settings"], ["System", "Administration", "admin"],
            ["Users", "Manage Users", "userEdit"], ["Tags", "Manage Tags", "tagEdit"], ["Security Log", "Security Log", "security_log"],
            ["Change  Log", "Change Log", "change_log"], ["Projects", "Manage Projects", "project_manage"],
            ["Progressions", "Manage Progressions", "progression_manage"], ["Packages", "Manage Packages", "package_manage"],
            ["Pipelines", "Manage Pipelines", "pipeline_builder"], ["Plugins", "Manage Plugins", "plugin_manage"],
            ["Global Registry", "Manage Registry", "registry_manage"], ["Tasks", "Manage Tasks", "taskManage"],
            ["Assets", "Manage Assets", "assetEdit"], ["Shared Credentials", "Manage Credentials", "credentialEdit"],
            ["Clouds", "Manage Clouds", "cloudEdit"], ["Cloud Accounts", "Manage Cloud Accounts", "cloudAccountEdit"],
            ["Webhooks", "Manage Webhooks", "webhooks"]];

        // Looping through all elements in the outer array
        for (let pageInfo of adminPages) {
            // reading the three elements in the inner array
            let menuLabel = pageInfo[0];
            let pageTitle = pageInfo[1];
            let pageLink = pageInfo[2];
            await this.clickAdminButton();
            await this.selectItemfromAdminMenu(menuLabel);

            // Verify the browser title (in its tab)
            await expect(browser.getTitle()).toEqual(pageTitle);

            // Verify the last part of the url (the page file name)
            await expect(browser.getCurrentUrl()).toContain('/' + pageLink);

        }
    }

    //Click admin button
    async clickAdminButton(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.continuumCommonPage.btnAdminIcon), 1000);
        await this.continuumCommonPage.btnAdminIcon.click();   
    }
    //Select an item from the Admin menu
    async selectItemfromAdminMenu(menuOption: string) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption))), 2000);
        await browser.element(by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption)).click();        
    }

    //select an item from the Navigation Menu
    async selectItemfromNavMenu(navOption: string) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.continuumCommonPage.navItemSelector, navOption))), 2000);
        await browser.element(by.cssContainingText(this.continuumCommonPage.navItemSelector, navOption)).click();    
    }

    async clickTab(tabName: string) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.continuumCommonPage.tabSelector, tabName))), 2000);
        await browser.element(by.cssContainingText(this.continuumCommonPage.tabSelector, tabName)).click();       
    }

    //Validate element visibility
    async validateElementVisibility(elementInPage: ElementFinder) {
        await expect(elementInPage.isDisplayed()).toBeTruthy();
    }
    //Wait for element to be clickable
    async waitForElementCickable(elem) {
        let EC = protractor.ExpectedConditions;
        let itemToValidate = elem;
        let isClickable = EC.elementToBeClickable(itemToValidate);
        await browser.wait(isClickable, 2000);
    }

    //Wait for the HTML element to be invisible
    async waitForElementToBeInvisible(elem) {
        let EC = protractor.ExpectedConditions;
        let itemToValidate = elem;
        let isInvisible = EC.invisibilityOf(itemToValidate);
        await browser.wait(isInvisible, 2000);
    }

    //Wait for the HTML element to be present
    async waitForElementToBePresent(elem) {
        let EC = protractor.ExpectedConditions;
        let itemToValidate = elem;
        let isPresent = EC.presenceOf(itemToValidate);
        await browser.wait(isPresent, 2000);
    }

    //Validate element to be visible
    async waitForElementToBeVisible(elem) {
        let EC = protractor.ExpectedConditions;
        let itemToValidate = elem;
        let isVisible = EC.visibilityOf(itemToValidate);
        await browser.wait(isVisible, 2000);
    }

    // This function will click on an option in a standard HTML option list (dropdown)
    // Requires a css locator for the dropdown, and the text of the option to select
    async selectFromDropdown(locDropdown: string, optionText: string){
        // Define the dropdown and click it (so list drops down)
        let dropdown = browser.element(by.css(locDropdown));
        await dropdown.click();
        await browser.sleep(1000);
        // Concatenate dropdown and option css locators, inserting option text
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(locDropdown + ">option", optionText))));
        await browser.element(by.cssContainingText(locDropdown + ">option", optionText)).click();
     }

    //This function is used to generate the random number
    generateRandomNumber() {
        var number = Math.floor(1 + Math.random()*1000);
        return number;
    }
     //This function is used to generate the random characters
     generateRandomChar() {
            var min = 65;
            var max = 90;
            var a1 = Math.floor(Math.random()*(max-min+1)+min);
            var a2 = Math.floor(Math.random()*(max-min+1)+min);
            var a3 = Math.floor(Math.random()*(max-min+1)+min);
            var a4 = Math.floor(Math.random()*(max-min+1)+min);
            return String.fromCharCode(a1,a2,a3,a4);
        }

        // async navigateToMenuItem(menuOption: string) {
        //     await browser.wait(ExpectedConditions.elementToBeClickable(this.continuumCommonPage.btnAdminIcon), 1000);
        //     await this.continuumCommonPage.btnAdminIcon.click();               
        //     await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption))), 2000);
        //     await browser.element(by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption)).click();        
        // }

        async filterTeam(teamName){
            await this.continuumCommonPage.teamCoreSelector.sendKeys(teamName);
            await browser.sleep(5000);
            await element(by.xpath(".//*[@id='react-select-2--option-0']")).click();
        }

        
        async pageScrollDown(x,y)
        {
        await browser.executeScript('window.scrollTo('+x+','+y+')');
        }
}
