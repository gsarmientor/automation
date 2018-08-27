/*====================================================================
 * No of Locators	: 24
 * Purpose			: Package Page Locators
 * Create_Date		: 02/02/2018
 * Last Modified	: 07/10/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class PackagePage {
    // Fields for adding a new package
    addNewButton = 'button[class="create-button"]';
    newName = element(by.css('input[id="new_name"]'));
    newDescription = element(by.css('textarea[id="new_desc"]'));
    createButton = element(by.css('button[id="new_btn"]'));
    packageDialogClose = element(by.css('div[id="new_dialog"]>a[class="close-reveal-modal"]'));


    // Fields to select and display Package details
    firstInList = element(by.css("ul#packages>li:nth-child(2)>span"));
    listButton = "ul#packages>li>span";
    detailsTab = element(by.xpath("//li[contains(@class,'tab-title')][a[contains(.,'Details')]]"));
    detailsName = element(by.css("input#package_name"));
    detailsDescription = element(by.css("textarea#package_desc"));

   // packageSelector = element(by.css('div[class="Select-input"]>input'));
    packageSelector =element(by.css("#packages .Select-input input"));
    packageDisplayedAtSelector = element(by.css('div>span[class="Select-value-label"]'));
    packageOptionFromMenu = 'div[class*="Select-option"]';

    //tab selector and its elements inside the tab
    packageTabs = "li[class*='divider tab-title']>a";
    
    // Fields to add an Artifact
    detailsArtifactButton = element(by.css('button[id="show_art_add_dialog_btn"]'));
    newArtifactProject = "div#artifact_picker_dialog[style*='display: block']>select#picker_project";
    newArtifact = "div#artifact_picker_dialog[style*='display: block']>select#picker_artifact";
    newArtifactAddButton = element(by.css("button#add_artifact"));
    newArtifactDialogCloseButton = element(by.css("div#artifact_picker_dialog>a.close-reveal-modal"));

 
    // Fields to select a Progression
    progressionTab = element(by.xpath("//li[contains(@class,'tab-title')][a[contains(.,'Progression')]]"));
    progressionSelector = element(by.css("select#progression"));

    //Globals Tab Elements
    globalsSaveButton = element(by.css('a[id="globals_save_btn"]'));
    globalsJsonEditor = element(by.css('div[class="jsoneditor jsoneditor-mode-tree"]'));

    //Actions Tab Elements
    addActionBtn = element(by.css('button[class="create-button"]'));

    // Fields to add an Activity to a Progression Phase
    addActivityButton = "//ul[@id='progression_phases']/li/div[span[contains(.,'^^^^')]]/span[contains(@class,'button')]";
    addActivityDialog = element(by.css("div#base_dialog[style*='display: block']"));
    activityName = element(by.xpath("//div[b[contains(.,'Activity Name:')]]/following-sibling::div/input"));
    activityDescription = element(by.xpath("//div[b[contains(.,'Description:')]]/following-sibling::div/textarea"));
    activityType = element(by.xpath("//div[b[contains(.,'Type:')]]/following-sibling::div/select"));
    activityProject = element(by.xpath("//div[b[contains(.,'Project:')]]/following-sibling::div/input"));
    saveActivityButton = element(by.xpath("//span[contains(@class,'button')][text()='Save']"));
    packageTeamSelector = element(by.css('#new_dialog select#new_team'));
    

 }