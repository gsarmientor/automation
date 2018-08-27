/*====================================================================
 * No of Functions	: 22
 * Purpose			: Project Page functions
 * Create_Date		: 01/31/2018
 * Last Modified	: 07/05/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento, Rino van Dam, Nithya Pattabiraman
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 import {CommonPage} from '../common/common_page.po';
 import {CommonModule} from '../common/common_module.po';
 import {ProjectPage} from '../project/project_page.po';
 
 export class ProjectModule {
     public continuumCommonPage= new CommonPage();
     public continuumCommonModule= new CommonModule();
     public projectPage = new ProjectPage();

    async validateProjectPageItems(){
        let button = this.projectPage.newProjectButton;
        await this.continuumCommonModule.waitForElementToBePresent(button);
        await expect(button.isDisplayed).toBeTruthy();
        await expect(this.projectPage.projectSelector.isDisplayed).toBeTruthy();
     }

     async validateDetailsTab() {
         await this.continuumCommonModule.clickTab('Details');
         await browser.wait(ExpectedConditions.presenceOf(this.projectPage.projectDescriptionField), 2000);
         await expect(this.projectPage.projectDescriptionField).toBeTruthy();
     }

     async createNewProject(createMethod:string, projectName:string, teamName:string,almSystem: string) {
         await browser.refresh();
         await browser.wait(ExpectedConditions.presenceOf(this.projectPage.newProjectButton), 10000, "Add project button is not loaded");
         await this.projectPage.newProjectButton.click();
         await expect(this.projectPage.nextButton.isDisplayed()).toBeTruthy();
         switch (createMethod) {
            case 'Wizard':
                if(almSystem){
                    await this.createprojectUsingWizard(projectName, almSystem);
                }
                else { console.log("No value for AlmSystem");
                }
                break;

            case 'Manually':
                if(projectName) {
                    await this.createProjectManually(projectName,teamName);
                }
                else{ console.log("No value for Project Name");
                }
            break;
            };
     }

     async createprojectUsingWizard(projectName, almSystem) {
        await browser.sleep(2000);
        let nextButtonWizzard = this.projectPage.nextButton;
        let vcsSelected = element(by.cssContainingText(this.projectPage.vcsIconSelector,'Github'));
        await browser.element(by.cssContainingText(this.projectPage.createProjectwithWizzard, 'Wizard')).click();
        await browser.sleep(3000);
        await browser.wait(ExpectedConditions.elementToBeClickable(nextButtonWizzard), 5000);
        await nextButtonWizzard.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.projectPage.skipLink), 2000);
        await expect(this.projectPage.skipLink.isDisplayed()).toBeTruthy();
        switch (almSystem) {
            case 'VersionOne':
                await browser.wait(ExpectedConditions.elementToBeClickable(nextButtonWizzard), 2000);
                await nextButtonWizzard.click();
                await browser.sleep(2000);
                await expect(this.projectPage.almUrl.isDisplayed()).toBeTruthy();
                await nextButtonWizzard.click();
                break;

            case 'Jira':
                await browser.element(by.cssContainingText(this.projectPage.vcsIconSelector, 'Jira')).click();
                await nextButtonWizzard.click();
                await nextButtonWizzard.click();
                break;

            default:
                break;

        };
        await browser.wait(ExpectedConditions.presenceOf(vcsSelected), 2000);
        await this.validateIconsVCS();
        await vcsSelected.click();
        await nextButtonWizzard.click();
        await expect(this.projectPage.almUrl.isPresent()).toBeTruthy();
        await this.isRepoInfoDisplayed();
        await nextButtonWizzard.click();
        await this.validateRepoListPresent('Github');
        await browser.sleep(5000);
        await this.selectRepofromList('continuumautotests', projectName);
        await browser.wait(ExpectedConditions.elementToBeClickable(nextButtonWizzard), 2000);
        await nextButtonWizzard.click();
        await browser.wait(ExpectedConditions.presenceOf(this.projectPage.newProjectLink), 2000);
        await expect(this.projectPage.congratMessage.isPresent()).toBeTruthy();
        await expect(this.projectPage.newProjectLink.isPresent()).toBeTruthy();
     }

     async validateIconsVCS() {
        let vcsOptions = ['Github', 'GitLab', 'BitBucket Cloud', 'TFS'];
        for (let vcsIndex in vcsOptions) {
            await expect(ExpectedConditions.presenceOf(element(by.cssContainingText(this.projectPage.vcsIconSelector,vcsOptions[vcsIndex])))).toBeTruthy();
        } 
     }

     async validateRepoListPresent(vcsName) {
         await browser.wait(ExpectedConditions.presenceOf(this.projectPage.repoListHeaders), 5000);
         await expect(ExpectedConditions.presenceOf(this.projectPage.repoListHeaders)).toBeTruthy();
         await expect(ExpectedConditions.presenceOf(this.projectPage.repoList)).toBeTruthy();
     }

     async selectRepofromList(repoName, projectName) {
        await browser.element(by.cssContainingText(this.projectPage.repoListRow, repoName)).click();
        await this.projectPage.repoProjectName.clear();
        await this.projectPage.repoProjectName.sendKeys(projectName);
     }

     async isRepoInfoDisplayed() {
        // Validate if plugin credentials are displayed or not, if not enters them
        let nextButtonWizzard = this.projectPage.nextButton;
        let reposelector = this.projectPage.repoSelector;
        await reposelector.isPresent().then(async (value) => {
            if (value) {
                await nextButtonWizzard.click();
            } else {
                await this.enterGithubInfo();
            };
        });
     }

     async enterGithubInfo() {
         await this.projectPage.githubName.sendKeys(this.continuumCommonPage.githubName);
         await this.projectPage.githubOwner.sendKeys(this.continuumCommonPage.githubOwner);
         await this.projectPage.githubToken.sendKeys(this.continuumCommonPage.githubToken);
     }

     async createProjectManually(projectName,teamName) {
        let projectDescription = 'Description for a manually created project';
        await browser.sleep(1000);
        await browser.element(by.cssContainingText(this.projectPage.createProjectwithWizzard, 'Manually')).click();
        // this.projectPage.createProjectManually.click();
	    await this.projectPage.nextButton.click();
        await browser.sleep(10000);
        await this.projectPage.nextButton.click();
        await this.continuumCommonModule.waitForElementToBePresent(this.projectPage.projectNameFieldatCreate)
        await expect(this.projectPage.nextButton.isEnabled()).toEqual(false);
        await this.selectTeam(teamName);
        await this.projectPage.projectNameFieldatCreate.sendKeys(projectName);
        await expect(this.projectPage.nextButton.isEnabled()).toEqual(true);
        await this.projectPage.projectDescriptionatCreate.sendKeys(projectDescription);
        await this.projectPage.nextButton.click();
        await this.continuumCommonModule.waitForElementToBePresent(this.projectPage.projectCreateSuccessMessage)
        await expect(this.projectPage.projectCreateSuccessMessage.isDisplayed()).toBeTruthy();
        await expect(this.projectPage.nextButton.isEnabled()).toEqual(true);
        await expect(this.projectPage.closeModalButton.isPresent()).toBeTruthy();
        await this.projectPage.closeModalButton.click();
   
     }

     async setSourceTypetoNewProject(projectName:string, type: string) {
        await browser.refresh();
        await this.selectProject(projectName);
        await this.continuumCommonModule.selectFromDropdown(this.projectPage.projectType, type);
        await browser.wait(ExpectedConditions.presenceOf(this.projectPage.projectSaveBtn), 2000);
        await this.projectPage.projectSaveBtn.click();
     }

     // This method sets the source type on the Source tab
     async setSourceType(typeName: string){
        // Click on the 'Source' tab
        await browser.element(by.cssContainingText(this.projectPage.projectTabs, "Source")).click();
        // Select the Source from the dropdown
        await this.continuumCommonModule.selectFromDropdown(this.projectPage.sourceType, this.continuumCommonPage.projectSource);
     }

    // This adds an Artifact to the Project 
    async addArtifact(artifactName: string){
        // Navigate to the 'Artifacts' tab
        await browser.element(by.cssContainingText(this.projectPage.projectTabs, "Artifacts")).click();
        await browser.wait(ExpectedConditions.presenceOf(this.projectPage.addNewArtifactButton), 5000)
        // Click the Artifact button...
        await this.projectPage.addNewArtifactButton.click();
        // ..wait for the dialog to be open...
        await browser.wait(ExpectedConditions.presenceOf(this.projectPage.newArtifactName), 5000)
        // ..enter a name
        await this.projectPage.newArtifactName.sendKeys(this.continuumCommonPage.projectArtifact);
        // ..click the 'Add Artifact' button
        await browser.wait(ExpectedConditions.presenceOf(this.projectPage.addArtifactButton), 5000)
        await this.projectPage.addArtifactButton.click();
        await browser.sleep(4000);
        await this.projectPage.projectSaveBtn.click();
        await browser.sleep(3000);

           
    }

     async validateTabsforNewProject(projectName:string, type: string) {
        let tabsGen = ['Details', 'Globals', 'Notifications', 'Versions', 'Actions', 'Data Flow'];
        let tabsAdded = ['Artifacts', 'Source', 'Submissions'];
        for (let tabIndex in tabsGen)  {
            let tab = browser.element(by.cssContainingText(this.projectPage.projectTabs, tabsGen[tabIndex]))
            await expect(tab.isDisplayed()).toBeTruthy();
            await tab.click();
            await this.validateElementinTab(tabsGen[tabIndex]);

        };
        if (type == 'General' || type == 'Integration')  {
            for (let tabIndex in tabsAdded) {
                await expect(browser.element(by.cssContainingText(this.projectPage.projectTabs, tabsAdded[tabIndex])).isPresent()).toBeFalsy();     
            };
        }
        else if (type == 'Source') {
            for (let tabIndex in tabsAdded)  {
                let tabSource = browser.element(by.cssContainingText(this.projectPage.projectTabs, tabsAdded[tabIndex]));
                await expect(tabSource.isDisplayed()).toBeTruthy();
                await tabSource.click();
            };
        };
    }

    //This validates elements in a project tab
    async validateElementinTab(tabName: string){
        switch (tabName) {
            case 'Details':
                await expect(this.projectPage.projectDescriptionField.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.projectTypeSelector.isDisplayed()).toBeTruthy();
                break;

            case 'Globals':
                await expect(this.projectPage.globalsJsonEditor.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.globalsJsonEditor.isDisplayed()).toBeTruthy();
                break;

            case 'Notifications':
                await expect(this.projectPage.enableNotificationsCheckBox.isDisplayed()).toBeTruthy();
                await this.validateNotificationElements();
                break;

            case 'Versions':
                await expect(this.projectPage.currentVersionInputField.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.updateVersionBtn.isDisplayed()).toBeTruthy();
                break;

            case 'Actions':
                await expect(this.projectPage.addActionBtn.isDisplayed()).toBeTruthy();
                break;

            case 'Data Flow':
                await expect(this.projectPage.addNewDataFlowBtn.isDisplayed()).toBeTruthy();
                break;

            case 'Artifacts':
                await expect(this.projectPage.addNewArtifactBtn.isDisplayed()).toBeTruthy();
                break;

            case 'Source':
                await expect(this.projectPage.sourceTypeSelect.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.sourceBranchRadioBtn.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.webhookEndPoint.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.lookupRadioRadioBtn.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.notifyOnUnmanagedCheckBox.isDisplayed()).toBeTruthy();
                await expect(this.projectPage.addtnlRecipientsField.isDisplayed()).toBeTruthy();
                break;

            case 'Submissions':
                break;
            
            default:
                break;
        }
        
    } 

    //Boxes to be present in Notifications Tabs
    async expectedCheckBoxesEmail(){
        await expect(this.projectPage.enableFailureCheckBoxEmail.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableNotificationsCheckBox.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableStartCheckBoxEmail.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableSuccessCheckBoxEmail.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableWaitMailCheckboxEmail.isPresent()).toBeTruthy();
    }

    async expectedCheckBoxesSlack(){
        await expect(this.projectPage.enableFailureCheckBoxSlack.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableStartCheckBoxSlack.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableSuccessCheckBoxSlack.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableWaitMailCheckboxSlack.isPresent()).toBeTruthy();
    }

    async expectedCheckBoxesHTTP(){
        await expect(this.projectPage.enableFailureCheckBoxHTTP.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableStartCheckBoxHTTP.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableSuccessCheckBoxHTTP.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableWaitMailCheckboxHTTP.isPresent()).toBeTruthy();
    }

    async expectedCheckBoxesHipChat(){
        await expect(this.projectPage.enableFailureCheckBoxHchat.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableStartCheckBoxHchat.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableSuccessCheckBoxHchat.isPresent()).toBeTruthy();
        await expect(this.projectPage.enableWaitMailCheckboxHchat.isPresent()).toBeTruthy();
    }

    //Validate elements in Notification Tab
    async validateNotificationElements() {
        await expect(this.projectPage.emailAddrsArea.isPresent()).toBeTruthy();
        await this.expectedCheckBoxesEmail();
        await expect(this.projectPage.hipChatRoomField.isPresent()).toBeTruthy();
        await this.expectedCheckBoxesHipChat();
        await expect(this.projectPage.slackChannelArea.isPresent()).toBeTruthy();
        await this.expectedCheckBoxesSlack();
        await expect(this.projectPage.urlArea.isPresent()).toBeTruthy();
        await expect(this.projectPage.dataforUrlArea.isPresent()).toBeTruthy();
        await this.expectedCheckBoxesHTTP();
    }

    async selectProject(projectName: string) {
        await this.continuumCommonModule.waitForElementCickable(this.projectPage.projectSelector);
        await this.projectPage.projectSelector.sendKeys(projectName).then(async () => {
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });
    }
    async selectTeam(teamName: string) {
        await this.continuumCommonModule.waitForElementCickable(this.projectPage.teamSelector);
        await this.projectPage.teamSelector.sendKeys(teamName).then(async () => {
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });
    }

    async copyProject(projectNameFrom: string, projectNameNew: string) {
        await browser.refresh();
        await this.selectProject(projectNameFrom);
        await this.continuumCommonModule.waitForElementToBePresent(this.projectPage.copyProjectBtn);
        await this.projectPage.copyProjectBtn.click();
        await this.continuumCommonModule.waitForElementToBeVisible(this.projectPage.copyProjectName);
        await expect(this.projectPage.copyProjectBtnatModal.isDisplayed).toBeTruthy();
        await expect(this.projectPage.closeModalButton.isPresent).toBeTruthy();
        await this.projectPage.copyProjectName.sendKeys(projectNameNew);
        await this.continuumCommonModule.waitForElementToBeVisible(this.projectPage.copyProjectBtnatModal);
        await this.projectPage.copyProjectBtnatModal.click();
        await browser.refresh();
        await this.selectProject(projectNameNew);
        await browser.wait(ExpectedConditions.presenceOf(this.projectPage.projectDisplayedAtSelector), 2000);
        await expect(this.projectPage.projectDisplayedAtSelector.getText()).toContain(projectNameNew);
    }

   
 }
