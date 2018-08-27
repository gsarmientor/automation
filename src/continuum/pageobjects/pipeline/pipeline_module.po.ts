/*====================================================================
 * No of Functions	: 2
 * Purpose			: Pipeline Page functions
 * Create_Date		: 12/04/2018
 * Last Modified	: 05/07/2018
 * Author			: Nithya Pattabiraman
 * Developed By		: Nithya Pattabiraman, Gustavo Sarmiento
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
import {browser, element, by, ExpectedConditions, protractor} from 'protractor';
import {CommonPage} from '../common/common_page.po';
import {CommonModule} from '../common/common_module.po';
import {PipelinePage} from '../pipeline/pipeline_page.po';
import { Locator } from 'protractor/built/locators';

let until = protractor.ExpectedConditions;

export class PipelineModule {
    public continuumCommonPage = new CommonPage();
    public continuumCommonModule = new CommonModule();
    public continuumPipelinePage = new PipelinePage();

    // This method enables creation of a new Package

    async addPipeline(pipelineNewName: string, pipelineNewDescription: string) {
        await browser.wait(until.elementToBeClickable(this.continuumPipelinePage.btAddPipeline), 15000, "Add pipeline is not loaded");
        // Wait for, then click on the 'Add New' button
        await this.continuumPipelinePage.btAddPipeline.click();
        // Wait for the dialog, then...
        await browser.sleep(2000);
        // ..enter Name and Description
        await this.continuumPipelinePage.sPipelineName.sendKeys(pipelineNewName);
        await browser.sleep(2000);
        await this.continuumPipelinePage.sPipelineDesc.sendKeys(pipelineNewDescription);
        // ..click the 'Create' button
        await this.continuumPipelinePage.btCreatePipeline.click();
        //Wait for the page to load
        await browser.sleep(10000);
    }

    async linkProject(projectName: string) {
        await this.continuumPipelinePage.tabDebug.click();
        await browser.wait(until.elementToBeClickable(this.continuumPipelinePage.sProject), 5000, "sProject is not loaded");
        await this.continuumPipelinePage.sProject.sendKeys(projectName);
        await browser.wait(until.elementToBeClickable(this.continuumPipelinePage.autoddSelection), 5000, "autodd is not loaded");
        await this.continuumPipelinePage.autoddSelection.click();
        await browser.wait(until.elementToBeClickable(element(by.id("save_btn"))), 5000, "save is not loaded");
        await element(by.id("save_btn")).click();
        //Assert whether the linked testProject is saved
        let value1 = this.continuumPipelinePage.sProject.getAttribute("value");
        await value1.then(async (value) => {
            await console.log("Need to validate as  = ", value);
            await expect(value).toContain(projectName);
        });
    }


}
