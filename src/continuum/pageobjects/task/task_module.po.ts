/*====================================================================
 * No of Functions	: 13
 * Purpose			: Task Page functions
 * Create_Date		: 04/19/2018
 * Last Modified	: 07/03/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
 import {browser, element, by, ExpectedConditions} from 'protractor';

 import {CommonPage} from '../common/common_page.po';
 import {CommonModule} from '../common/common_module.po';
 import {TaskPage} from '../task/task_page.po';
 
 export class TaskModule {
    public continuumCommonPage= new CommonPage();
    public continuumCommonModule= new CommonModule();
    public taskPage = new TaskPage();

    //validates elements at the task admin page
    async validateTaskAdminPage() {
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.addNewTaskButton), 2000);
        await expect(this.taskPage.addNewTaskButton.isDisplayed()).toBeTruthy();
        await expect(this.taskPage.copyTaskButton.isDisplayed()).toBeTruthy();
        await expect(this.taskPage.deleteTaskButton.isDisplayed()).toBeTruthy();
        await expect(this.taskPage.exportTaskButton.isDisplayed()).toBeTruthy();
        await expect(this.taskPage.importTaskButton.isDisplayed()).toBeTruthy();
        await expect(this.taskPage.filterTaskField.isDisplayed()).toBeTruthy();
        await expect(this.taskPage.checkAllTasksBox.isDisplayed()).toBeTruthy();
    }

    //function to test winrm connection
    async setWinrmConnection(taskName: string){
        let toAssetInfo = this.continuumCommonPage.winRMAssetInfo;
        await this.createTask(taskName, 'winrm');
        await this.addCommand('Connect', this.taskPage.newConnectionButton);
        await this.setNewConnCommand('winrm', 'CONN1', toAssetInfo);
        await this.addCommand('Variable', this.taskPage.setVariableButton);
        await this.setVariablesCommandData();
        await browser.sleep(1000);
        await browser.element(by.cssContainingText(this.taskPage.taskTabs, 'Details')).click();
        await this.debugRunTask();
        await this.checkRunResult();
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Tasks');
    }

    // funtion to test ssh connection
    async setSSHConnection(taskName: string) {
        let toAssetInfo = this.continuumCommonPage.sshAssetInfo;
        await this.createTask(taskName, 'shh');
        await this.addCommand('Connect', this.taskPage.newConnectionButton);
        await this.setNewConnCommand('ssh', 'SERV1', toAssetInfo);
        await browser.sleep(1000);
        await browser.element(by.cssContainingText(this.taskPage.taskTabs, 'Details')).click();
        await this.debugRunTask();
        //waiting for process to run and finish
        await this.checkRunResult();
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Tasks');
    }

    //function to test http command - TODO add options to request types such as POST
    async makeHTTPCall(taskName: string, requestType: string, urlInfo: string) {
        await this.createTask(taskName, 'http');
        await this.addCommand('Interact', this.taskPage.httpCommand);
        switch (requestType) {
            case 'get':
                await this.taskPage.requestHttpType.sendKeys('g');
                break;
            case 'post':
                await this.taskPage.requestHttpType.sendKeys('p');
                break;
            case 'delete':
                await this.taskPage.requestHttpType.sendKeys('t');
                break;
            case 'put':
                await this.taskPage.requestHttpType.sendKeys('m');
                break;
            case 'patch':
                await this.taskPage.requestHttpType.sendKeys('o');
                break;
            case 'options':
                await this.taskPage.requestHttpType.sendKeys('q');
                break;
            case 'head':
                await this.taskPage.requestHttpType.sendKeys('q');
                break;
        };
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.urlHttpField), 4000);
        await this.taskPage.urlHttpField.clear();
        await this.taskPage.urlHttpField.sendKeys(urlInfo);
        await browser.sleep(1000);
        await browser.element(by.cssContainingText(this.taskPage.taskTabs, 'Details')).click();
        await this.debugRunTask();
        //waiting for process to run and finish
        await this.checkRunResult();
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Tasks');
    }

    //create a new task
    async createTask(taskName: string, typeOftask: string) {
        let taskCode = 'qa ' + this.continuumCommonModule.generateRandomNumber();
        let taskNameNew = taskName + this.continuumCommonModule.generateRandomNumber();
        let taskDesc = typeOftask + ' test';
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.addNewTaskButton),5000);
        await this.taskPage.addNewTaskButton.click();
        await browser.sleep(1000);
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.saveTaskButton), 5000);
        await this.taskPage.taskCodeField.sendKeys(taskCode);
        await this.taskPage.taskNameField.sendKeys(taskNameNew);
        await this.taskPage.taskDescriptionField.sendKeys(taskDesc);
        await this.taskPage.saveTaskButton.click();
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.debugStopButton), 5000);
    }

    //copies the first task in the task list into a new one
    async copyTask(taskName: string) {
        let newCode = 'QA-' + this.continuumCommonModule.generateRandomNumber();
        let newName = 'Task Copied - ' + this.continuumCommonModule.generateRandomNumber();
        await console.log(newName);
        await browser.sleep(2000);
        await this.selectTaskbyName(taskName);
        await this.taskPage.copyTaskButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.newTaskCode), 4000);
        await this.taskPage.newTaskCode.sendKeys(newCode);
        await this.taskPage.newTaskName.sendKeys(newName);
        await this.taskPage.copyTaskSaveButton.click();
        await browser.sleep(2000);
        await browser.wait(ExpectedConditions.invisibilityOf(this.taskPage.messageDialog),4000)
    }

    //exports and imports a task 
    async exportandImportTask(taskName: string) {
        await console.log(taskName);
        let lin2xml = '';
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.taskCheckBox), 4000);
        await this.selectTaskbyName(taskName);
        await this.taskPage.exportTaskButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.exportTaskDialogBtn), 4000);
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.includeAllCheckBox)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.exportTaskDialogBtn)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.closeBtnExportTaskDialog)).toBeTruthy();
        await this.taskPage.exportTaskDialogBtn.click();
        await browser.sleep(2000);
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.linkToExportedTask)).toBeTruthy();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.closeExportLinkDialog), 4000);
        await this.taskPage.linkToExportedTask.getAttribute('href').then(async (fileLink) => {
            await this.taskPage.closeExportLinkDialog.click();
            await browser.sleep(2000);
            await this.importTask(fileLink);
        });
    }

    //imports a task using the url created at the export task
    async importTask(link2xml) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.importTaskButton), 4000);
        await this.taskPage.importTaskButton.click();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.uploadButton)).toBeTruthy();
        await expect(ExpectedConditions.presenceOf(this.taskPage.importTextArea)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.importButton)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.conflicrResolutionOptions)).toBeTruthy();
        await this.taskPage.conflicrResolutionOptions.click();
        await expect(ExpectedConditions.presenceOf(this.taskPage.listOfConflictResolOptions)).toBeTruthy();
        await this.taskPage.conflicrResolutionOptions.click();
        await this.taskPage.uploadButton.click();
        await expect(ExpectedConditions.presenceOf(this.taskPage.chooseFileButton)).toBeTruthy();
        await expect(ExpectedConditions.presenceOf(this.taskPage.fileNameInputField)).toBeTruthy();
        await expect(ExpectedConditions.presenceOf(this.taskPage.fromURLField)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.continueButton)).toBeTruthy();
        await this.taskPage.fromURLField.sendKeys(link2xml);
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.continueButton)).toBeTruthy();
        await this.taskPage.continueButton.click();
        await browser.sleep(2000);
        await expect(this.taskPage.importTextArea.getText()).toContain('<tasks>');
        await this.taskPage.importButton.click();
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.successMessage), 4000);
        await expect(this.taskPage.messageDialog.getText()).toContain('Success');
        await browser.wait(ExpectedConditions.invisibilityOf(this.taskPage.successMessage), 4000);
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Tasks');
    }

    //deletes the first task in the task list
    async deleteTask(taskName: string) {
        await this.continuumCommonModule.clickAdminButton();
        await this.continuumCommonModule.selectItemfromAdminMenu('Tasks');
        await this.selectTaskbyName(taskName);
        await this.taskPage.deleteTaskButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.taskPage.dialogTaskDeleteButton), 4000);
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.deleteTaskwithHistoryBox)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.dialogTaskDeleteButton)).toBeTruthy();
        await expect(ExpectedConditions.elementToBeClickable(this.taskPage.closeBtnDeleteTaskDialog)).toBeTruthy();
        await this.taskPage.deleteTaskwithHistoryBox.click();
        await this.taskPage.dialogTaskDeleteButton.click();
        await expect(ExpectedConditions.presenceOf(this.taskPage.messageDialog)).toBeTruthy();
        await browser.sleep(1000);
    }
    //Used to add a command from the command list to the Code area at the task edit page
    //two parameters: 
    //   - category name as listed at the command tab page 
    //   - command name inside the command category
    async addCommand(cmdCategory: string, cmdName) {
        let commandCategoryButton = 'div[class="category"]>div[class="category_header"]>span'
        await browser.element(by.cssContainingText(this.taskPage.taskTabs, 'Commands')).click();
        await browser.sleep(3000);
        await browser.element(by.cssContainingText(commandCategoryButton, cmdCategory)).click();
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.newConnectionButton), 4000);
        await this.dragAndDropItem(cmdName, this.taskPage.stepsSection);
    }

    // specific funtion to set a new Connection, listing current types of connection available
    async setNewConnCommand(connType, connName, toAsset) {
        await browser.sleep(2000);
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.connNameField), 4000);
        switch (connType) {
            case 'ssh':
                await this.taskPage.connSelector.sendKeys('S\n');
                break;
            case 'winrm':
                await this.taskPage.connSelector.sendKeys('w\n');
                break;
            case 'telnet':
                await this.taskPage.connSelector.sendKeys('t\n');                
                break;
            case 'mysql':
                await this.taskPage.connSelector.sendKeys('m\n');               
                break;
            case 'oracle':
            await this.taskPage.connSelector.sendKeys('o\n');             
                break;
            case 'sqlserver':
                await this.taskPage.connSelector.sendKeys('q\n');             
                break;
        };
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.connNameField), 4000);
        if (connName) {
            await this.taskPage.connNameField.clear();
            await this.taskPage.connNameField.sendKeys(connName);
        };
        await browser.sleep(2000); //just for FireFox
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.toAssetField), 4000);
        if (toAsset) {
            await this.taskPage.toAssetField.clear();
            await this.taskPage.toAssetField.sendKeys(toAsset);
        };
    }

    // Set variables funtion specific to winrm
    //TODO: set this function to be more generic to create n variables
    async setVariablesCommandData() {
        await browser.sleep(2000);
        let varUser = 'user';
        let valUser = 'dev\\continuum-windows';
        let varServer = 'server';
        let valServer = 'lchost-20.dev.corp.versionone.net';
        let varPassword = 'password'
        let valPassword = 'PcfDu7d2El3jaZJYtuQ3'
        await this.taskPage.variableField1.sendKeys(varUser);
        await this.taskPage.variableValue1.clear();
        await this.taskPage.variableValue1.sendKeys(valUser);
        await this.taskPage.addVariableButton.click();
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.variableField2), 2000);
        await this.taskPage.variableField2.sendKeys(varPassword);
        await this.taskPage.variableValue2.clear();
        await this.taskPage.variableValue2.sendKeys(valPassword);
        await browser.sleep(1000);
        await this.taskPage.addVariableButton.click();
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.variableField3), 2000);
        await this.taskPage.variableField3.sendKeys(varServer);
        await this.taskPage.variableValue3.clear();
        await this.taskPage.variableValue3.sendKeys(valServer);
    }

    //Selects first task - TODO find a way to select it by name
    async selectTaskbyName(taskName: string) {
        let taskChkBox = this.taskPage.taskList;
        await browser.wait(ExpectedConditions.presenceOf(taskChkBox), 2000);
        await taskChkBox.all(by.className('selectable')).getText().then(async (name) => {
            if (name = taskName) {
                await taskChkBox.getAttribute('task_id').then(async (taskId) => {
                    let checkBoxCSS = 'input[id="chk_' + taskId + '"]';
                    let checkBox2Click = element(by.css(checkBoxCSS));
                    await checkBox2Click.click(); 
                });
            };
        });
    }

    //Drag and drop fucntion
    //TODO - maybe moving it to the commonModule
    async dragAndDropItem(item2Drag, dropHere) {
        await browser.actions().mouseMove(item2Drag).perform();
        await browser.actions().mouseDown(item2Drag).perform();
        await browser.actions().mouseMove(dropHere).perform();
        await browser.actions().mouseUp().perform();
    }

    //function to trigger a debug task run
    async debugRunTask() {
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.debugRunTaskButton), 4000)
        await this.taskPage.debugRunTaskButton.click();
        await browser.wait(this.taskPage.runNowButton.isDisplayed, 4000);
        await this.taskPage.runNowButton.click();
        await browser.wait(ExpectedConditions.presenceOf(this.taskPage.statusField), 4000);
    }

    async checkRunResult() {
        let EC = browser.ExpectedConditions;
        await browser.sleep(40000);
        await expect(this.taskPage.statusField.getText()).toContain('Completed');
    }
}