/*====================================================================
 * No of Test cases	: 5
 * Purpose			: D-13121 Pipeline Setup: Project field in Debug tab saves the search, not the full project name
 * Create_Date		: 12/04/2018
 * Last Modified	: 05/07/2018
 * Author			: Nithya Pattabiraman
 * Developed By		: Nithya Pattabiraman, Gustavo Sarmiento
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
import {browser, element, by, ExpectedConditions, protractor} from 'protractor';
import {LoginModule} from '../../pageobjects/login/login_module.po';
import {CommonModule} from '../../pageobjects/common/common_module.po';
import {CommonPage } from '../../pageobjects/common/common_page.po';
import {PipelinePage} from '../../pageobjects/pipeline/pipeline_page.po';
import {ProjectModule} from '../../pageobjects/project/project_module.po';
import {PipelineModule} from "../../pageobjects/pipeline/pipeline_module.po";

describe('Continuum Regression - Pipeline page \n', () => {

    let continuumCommonModule: CommonModule;
    let continuumLoginModule: LoginModule;
    let continuumPipelinePage: PipelinePage;
    let continuumCommonPage: CommonPage;
    let projectModule: ProjectModule;
    let continuumPipelineModule: PipelineModule;
    continuumCommonModule = new CommonModule();
    continuumCommonPage = new CommonPage();
    continuumLoginModule = new LoginModule();
    continuumPipelinePage = new PipelinePage();
    projectModule = new ProjectModule();
    continuumPipelineModule = new PipelineModule();
    let until = protractor.ExpectedConditions;
    let project = continuumCommonModule.generateRandomChar();
    let pipelineName = continuumCommonModule.generateRandomChar(); 

    beforeAll( async () => {
        
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await continuumLoginModule.get();
        await continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd);

     });
       
    //Create a Manual Project
    it("create project", async () => {
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Projects');
        await projectModule.createNewProject("Manually",project ,"DEFAULT", "");
    });
    //Add a New Pipeline
    it("Add a New Pipeline", async () => {
        await continuumCommonModule.clickAdminButton();
        await continuumCommonModule.selectItemfromAdminMenu('Pipelines');
        await continuumPipelineModule.addPipeline(pipelineName, "Adding a New Pipeline");
    });
    //Link a Project to the pipeline through debug tab
    it("Link a Project to the pipeline through debug tab", async () => {
     //Spit the project name by the length of 2
            let splitproject = project.substr(0, 2);
            await continuumPipelineModule.linkProject(splitproject);
    });
    it("Verify the linked project value is retained after the Page refresh", async () => {
     //Refresh the page
        await browser.sleep(5000);
        await browser.navigate().refresh();
    //Select the created Pipeline
        await browser.wait(until.elementToBeClickable(continuumPipelinePage.ddPipeline), 15000, "Dropdown is not loaded");
        await continuumPipelinePage.ddPipeline.click();
    	await continuumPipelinePage.cobPipelineName.sendKeys(pipelineName);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
     //Assert the pipelineName is selected	
 	let assertion2 = element(by.tagName("html")).getText();
        await expect(assertion2).toContain(pipelineName);
     //Select the tab Debug in the Pipeline1 Pipeline
        await browser.wait(until.elementToBeClickable(continuumPipelinePage.tabDebug), 15000, "Link Debug is not loaded");
        await continuumPipelinePage.tabDebug.click();
        await browser.wait(until.elementToBeClickable(continuumPipelinePage.sProject), 15000, "sProject element is not loaded");
        await browser.sleep(5000);
     //Assert if the saved project value is retained after the page refresh
        let value2 = continuumPipelinePage.sProject.getAttribute("value");
        await value2.then(async (value) => {
           await console.log("Need to validate as  = ", value);
           await expect(value).toContain(project);
        });
    });

    afterAll( async () => {
        await browser.sleep(3000);
        await continuumLoginModule.logout();
    });
});
