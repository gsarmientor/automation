/*====================================================================
 * No of Functions	: 8
 * Purpose			: Package Page functions
 * Create_Date		: 02/02/2018
 * Last Modified	: 06/26/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

import {CommonPage} from '../common/common_page.po';
import {CommonModule} from '../common/common_module.po';
import {PackagePage} from '../package/package_page.po';
import { Locator } from 'protractor/built/locators';
import { ProgressionModule } from '../progression/progression_module.po';
 
 export class PackageModule {
    public continuumCommonPage = new CommonPage();
    public continuumCommonModule = new CommonModule();
    public packagePage = new PackagePage();
    public progressionModule = new ProgressionModule();
    buttonName = "Add Package"

     // This verifies the dialog that enables creation of new Packages
     async validateAddNewDialog(){
        // Wait for the 'Add New' button to be present, then click it
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.packagePage.addNewButton, this.buttonName))),5000).then(async () =>{
            await browser.element(by.cssContainingText(this.packagePage.addNewButton, this.buttonName)).click();
        });

        //Validate elements at new package dialog
        await this.continuumCommonModule.waitForElementCickable(this.packagePage.newName);
        await expect(this.packagePage.newName.isPresent()).toBeTruthy();
        await expect(this.packagePage.newDescription.isPresent()).toBeTruthy();
        await this.packagePage.packageDialogClose.click();
    }

    // This verifies the Detials tab
    async validatePackageDetails(){
        await this.validatePackageTabs();
    }

    async validatePackageTabs(){
        let tabNames = ['Details', 'Progressions', 'Globals', 'Actions'];
        for (let tabIndex in tabNames)  {
            let tab = browser.element(by.cssContainingText(this.packagePage.packageTabs, tabNames[tabIndex]));
            await browser.wait(ExpectedConditions.elementToBeClickable(tab), 2000);
            await expect(tab.isDisplayed()).toBeTruthy();
            await tab.click();
            await this.validateElementinTab(tabNames[tabIndex]);

        };
    }

    async validateElementinTab(tabName: string){
        switch (tabName) {
            case 'Details':
                await expect(this.packagePage.detailsName.isDisplayed()).toBeTruthy();
                await expect(this.packagePage.detailsDescription.isDisplayed()).toBeTruthy();
                await expect(this.packagePage.detailsArtifactButton.isDisplayed()).toBeTruthy();
                break;

            case 'Progressions':
                await expect(this.packagePage.progressionSelector.isDisplayed()).toBeTruthy();
                break;

            case 'Globals':
                await expect(this.packagePage.globalsJsonEditor.isDisplayed()).toBeTruthy();
                await expect(this.packagePage.globalsJsonEditor.isDisplayed()).toBeTruthy();
                break;

            case 'Actions':
                await expect(this.packagePage.addActionBtn.isDisplayed()).toBeTruthy();
                break;
            
            default:
                break;
        }
        
    } 

    // This method enables creation of a new Package
     async addPackage(teamName: string, pckgNewName: string, pckgNewDescription: string ){
        // Wait for, then click on the 'Add Package' button
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.packagePage.addNewButton, this.buttonName))),5000).then(async () =>{
            await browser.element(by.cssContainingText(this.packagePage.addNewButton, this.buttonName)).click();
        });
        //await this.packagePage.packageTeamSelector.element(by.cssContainingText('option',teamName)).click();
        //await this.continuumCommonModule.selectFromDropdown("#new_dialog select#new_team",teamName);
        await this.continuumCommonModule.waitForElementCickable(this.packagePage.newName);
        await this.packagePage.newName.sendKeys(pckgNewName);
        await this.packagePage.newDescription.sendKeys(pckgNewDescription);
        await this.packagePage.createButton.click();         
     }

     // This selects a package from the list on the main Package page
     async selectPackage(projectName: string) {
        await this.continuumCommonModule.waitForElementCickable(this.packagePage.packageSelector);
        await this.packagePage.packageSelector.sendKeys(projectName).then(async () => {
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
            await browser.sleep(2000);
        });
    }


     // This selects a Progression from the dropdown on the 'Progression' tab
     async associateProgression(prgName: string){
        // wait for the tabs to display, then...
        await browser.sleep(3000);
        await browser.wait(ExpectedConditions.presenceOf(this.packagePage.progressionTab), 5000).then(async () =>{
            // ... click on second tab ('Progression')
            await this.packagePage.progressionTab.click();
            await this.packagePage.progressionSelector.click();
            await browser.sleep(3000);
            // Select the appropriate Progression
            await this.packagePage.progressionSelector.element(by.cssContainingText('option', prgName)).click();
            await browser.sleep(2000);
            await element(by.css('button#save_btn')).click();
            
        });
     }

     // This associates an artifact to the Progression 
     async associateArtifact(projectName: string, artifactName: string){
        // Select Details tab
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.packagePage.packageTabs, 'Details'))), 5000);
        await browser.element(by.cssContainingText(this.packagePage.packageTabs, 'Details')).click();
        // Click the Artifact button
        await browser.wait(ExpectedConditions.presenceOf(this.packagePage.detailsArtifactButton), 5000)
        await this.packagePage.detailsArtifactButton.click();
        await browser.wait(ExpectedConditions.presenceOf(element(by.css(this.packagePage.newArtifactProject))), 5000)
        // Select the Project from the dropdown
        await this.continuumCommonModule.selectFromDropdown(this.packagePage.newArtifactProject, projectName);
        // Select the Artifact from the dropdown
        await this.continuumCommonModule.selectFromDropdown(this.packagePage.newArtifact, artifactName)
        //Click the 'Add' button
        await this.packagePage.newArtifactAddButton.click();
        // Close the dialog by clicking the 'Done' button
        await this.packagePage.newArtifactDialogCloseButton.click();
    }

     // Add an activity to the Phase (on the Progression tab)
     async addActivity(phaseName: string, activityName: string, activityType: string, activityProject: string){
        // wait for the tabs to display, then...
        await browser.wait(ExpectedConditions.presenceOf(this.packagePage.progressionTab), 5000)
        // ... click on second tab ('Progression')
        //console.log("clicking Progression tab")
        await this.packagePage.progressionTab.click();
        // Click on the '+Activity' button for the correct Phase
        await browser.element(by.xpath(this.packagePage.addActivityButton.replace('^^^^', phaseName))).click();
        // Verify the popup is visible...
        await browser.wait(ExpectedConditions.presenceOf(this.packagePage.addActivityDialog), 5000);
        // Enter Name, select Type, and enter Project name
        

        // Click the 'Save' button


     }

}

     
