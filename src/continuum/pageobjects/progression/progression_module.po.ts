/*====================================================================
 * No of Functions	: 1
 * Purpose			: Project Page functions
 * Create_Date		: 02/02/2018
 * Last Modified	: 07/03/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 import {CommonPage} from '../common/common_page.po';
 import {CommonModule} from '../common/common_module.po';
 import {ProgressionPage} from '../progression/progression_page.po';
 //import {Locator} from 'protractor/built/locators';
 
 export class ProgressionModule {
     public continuumCommonPage = new CommonPage();
     public continuumCommonModule = new CommonModule();
     public progressionPage = new ProgressionPage();

     // This verifies the dialog that enables creation of new Progressions
    async validateAddNewDialog(){
        // Wait for the 'Add New' button to be present, then click it
        //browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.progressionPage.addNewButton, "Add New"))),5000).then(() =>{
            await browser.wait(ExpectedConditions.elementToBeClickable(this.progressionPage.addNewButton),5000).then(async () =>{    
            //browser.element(by.cssContainingText(this.progressionPage.addNewButton, "Add New")).click();
            await this.progressionPage.addNewButton.click();
        });
                
        // Wait for the dialog, then... 
        await browser.wait(ExpectedConditions.presenceOf(this.progressionPage.newName), 5000).then(async () =>{
            // ..check Name and Description fields
            await expect(this.progressionPage.newName).toBeTruthy();
            await expect(this.progressionPage.newDescription).toBeTruthy();
            await this.progressionPage.progressionDialogClose.click();
        });

    }

    // This verifies the Details tab
     async validateProgressionDetails(){
         // wait for the list to become available, then...
         await browser.wait(ExpectedConditions.presenceOf(this.progressionPage.secondProgressionInList), 8000).then(async () =>{
            // ...click on the first listed Project
            //console.log("clicking package in list")
            await this.progressionPage.secondProgressionInList.click();
         });
         
         // wait for the tabs to display, then...
         await browser.wait(ExpectedConditions.presenceOf(this.progressionPage.detailsTab), 5000).then(async () =>{
            // ... click on first tab ('Details')
            //console.log("clicking Details tab")
            //this.progressionPage.detailsTab.click();

             // verify Name and Description fields
            await expect(this.progressionPage.detailsName).toBeTruthy();
            await expect(this.progressionPage.detailsDescription).toBeTruthy();
         });
    }

    // This method enables creation of a new Package
     async addProgression(newName: string, newDesc: string ){
        // Wait for, then click on the 'Add New' button
        /*browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.progressionPage.addNewButton, "Add New"))),5000).then(() =>{
            browser.element(by.cssContainingText(this.progressionPage.addNewButton, "Add New")).click();
        });*/
        await browser.refresh();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.progressionPage.addNewButton),5000).then(async () =>{
           await this.progressionPage.addNewButton.click();
        });
                
        // Wait for the dialog, then... 
        await browser.wait(ExpectedConditions.presenceOf(this.progressionPage.newName), 5000).then(async () =>{
            // ..enter Name and Description
            await this.progressionPage.newName.sendKeys(newName);
            await this.progressionPage.newDescription.sendKeys(newDesc);
            // ..click the 'Create' button
            await this.progressionPage.createButton.click();
        });

        // Wait for dialog to be completely closed
        await browser.wait(ExpectedConditions.stalenessOf(this.progressionPage.newName), 5000)
     }

     // This selects a Progression from the list on the main Progression page
     async selectProgression(prgName: string){
        // wait for the list to become available, then...
        await browser.wait(ExpectedConditions.presenceOf(this.progressionPage.firstInList), 5000).then(async () =>{
            // ...click on the Progression name
            //console.log("clicking progression (" + pckgName + ") in list")
            await browser.element(by.cssContainingText(this.progressionPage.listButton, prgName)).click();
        });
               
     }

     // This adds a Phase to this Progression
     async addPhase(phaseName: string, phaseDescription: string){
         // Wait for the 'Add Phase' button
         await browser.wait(ExpectedConditions.elementToBeClickable(this.progressionPage.addPhaseButton), 5000).then(async ()=>{
            // click the Add Phase button
            await this.progressionPage.addPhaseButton.click();
            // wait for the dialog to be visible
            await browser.wait(ExpectedConditions.elementToBeClickable(this.progressionPage.newPhaseName), 5000).then(async () =>{
                // enter name and description
                await this.progressionPage.newPhaseName.sendKeys(phaseName);
                await this.progressionPage.newPhaseDescription.sendKeys(phaseDescription);
                // click the 'Add' button
                await this.progressionPage.newPhaseAddButton.click();
                // Close dialog
                await this.progressionPage.newPhaseDoneButton.click();
            
            });
         });
        
         // Wait for the dialog to be completely closed
         browser.sleep(5000);
         await browser.wait(ExpectedConditions.stalenessOf(this.progressionPage.newPhaseName), 8000)

     };

}

     
