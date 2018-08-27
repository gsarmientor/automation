/*====================================================================
 * No of Functions	: 1
 * Purpose			: Package Object definitions 
 * Create_Date		: 01/25/2018
 * Last Modified	: 06/26/2018
 * Author			: Murali Yalamandala
 * Developed By		: Murali Yalamandala
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';
 import {LoginModule} from '../../pageobjects/login/login_module.po';
 import {LoginPage} from '../../pageobjects/login/login_page.po';
 import {CommonModule} from '../../pageobjects/common/common_module.po';
 import {CommonPage} from '../../pageobjects/common/common_page.po';
 import {PackagePage} from '../../pageobjects/package/package_page.po';
 import {PackageModule} from '../../pageobjects/package/package_module.po';
 import {PipelineModule} from '../../pageobjects/pipeline/pipeline_module.po';
 import {PipelinePage} from '../../pageobjects/pipeline/pipeline_page.po';
 import{ProgressionModule} from '../../pageobjects/progression/progression_module.po';
 import{ProgressionPage} from '../../pageobjects/progression/progression_page.po';
 import {ProjectModule} from '../../pageobjects/project/project_module.po';
 import {ProjectPage} from '../../pageobjects/project/project_page.po';
 import {TaskModule} from '../../pageobjects/task/task_module.po';
 import {TaskPage} from '../../pageobjects/task/task_page.po';
 import {TeamModule} from '../../pageobjects/team/team_module.po';
 import {TeamPage} from '../../pageobjects/team/team_page.po';

 export class objpackages {

    public continuumCommonPage:CommonPage;
    public continuumLoginModule:LoginModule;
    public continuumLoginPage:LoginPage;
    public cnCommonModule:CommonModule;
    public cnPackagePage:PackagePage;
    public cnPackageModule:PackageModule;
    public cnPipelineModule:PipelineModule;
    public cnPipelinePage:PipelinePage;
    public cnProgressionModule:ProgressionModule;
    public cnProgressionPage:ProgressionPage;
    public cnProjectModule:ProjectModule;
    public cnProjectPage:ProjectPage;
    public cnTaskModule:TaskModule;
    public cnTaskPage:TaskPage;
    public cnTeamModule:TeamModule;
    public cnTeamPage:TeamPage;

    constructor() {
        this.continuumCommonPage = new CommonPage();
        this.continuumLoginModule= new LoginModule();
        this.continuumLoginPage= new LoginPage();
        this.cnCommonModule= new CommonModule();   
        this.cnPackagePage= new PackagePage();    
        this.cnPackageModule= new PackageModule();    
        this.cnPipelinePage= new PipelinePage();    
        this.cnPipelineModule = new PipelineModule();
        this.cnProgressionModule= new ProgressionModule();
        this.cnProgressionPage = new ProgressionPage();
        this.cnProjectModule =new ProjectModule();
        this.cnProjectPage =new ProjectPage();
        this.cnTaskModule = new TaskModule();
        this.cnTaskPage =new TaskPage();
        this.cnTeamPage = new TeamPage();
        this.cnTeamModule = new TeamModule();
    }

 }