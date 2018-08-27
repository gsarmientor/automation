"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 24
 * Purpose			: Package Page Locators
 * Create_Date		: 02/02/2018
 * Last Modified	: 07/10/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var PackagePage = /** @class */ (function () {
    function PackagePage() {
        // Fields for adding a new package
        this.addNewButton = 'button[class="create-button"]';
        this.newName = protractor_1.element(protractor_1.by.css('input[id="new_name"]'));
        this.newDescription = protractor_1.element(protractor_1.by.css('textarea[id="new_desc"]'));
        this.createButton = protractor_1.element(protractor_1.by.css('button[id="new_btn"]'));
        this.packageDialogClose = protractor_1.element(protractor_1.by.css('div[id="new_dialog"]>a[class="close-reveal-modal"]'));
        // Fields to select and display Package details
        this.firstInList = protractor_1.element(protractor_1.by.css("ul#packages>li:nth-child(2)>span"));
        this.listButton = "ul#packages>li>span";
        this.detailsTab = protractor_1.element(protractor_1.by.xpath("//li[contains(@class,'tab-title')][a[contains(.,'Details')]]"));
        this.detailsName = protractor_1.element(protractor_1.by.css("input#package_name"));
        this.detailsDescription = protractor_1.element(protractor_1.by.css("textarea#package_desc"));
        // packageSelector = element(by.css('div[class="Select-input"]>input'));
        this.packageSelector = protractor_1.element(protractor_1.by.css("#packages .Select-input input"));
        this.packageDisplayedAtSelector = protractor_1.element(protractor_1.by.css('div>span[class="Select-value-label"]'));
        this.packageOptionFromMenu = 'div[class*="Select-option"]';
        //tab selector and its elements inside the tab
        this.packageTabs = "li[class*='divider tab-title']>a";
        // Fields to add an Artifact
        this.detailsArtifactButton = protractor_1.element(protractor_1.by.css('button[id="show_art_add_dialog_btn"]'));
        this.newArtifactProject = "div#artifact_picker_dialog[style*='display: block']>select#picker_project";
        this.newArtifact = "div#artifact_picker_dialog[style*='display: block']>select#picker_artifact";
        this.newArtifactAddButton = protractor_1.element(protractor_1.by.css("button#add_artifact"));
        this.newArtifactDialogCloseButton = protractor_1.element(protractor_1.by.css("div#artifact_picker_dialog>a.close-reveal-modal"));
        // Fields to select a Progression
        this.progressionTab = protractor_1.element(protractor_1.by.xpath("//li[contains(@class,'tab-title')][a[contains(.,'Progression')]]"));
        this.progressionSelector = protractor_1.element(protractor_1.by.css("select#progression"));
        //Globals Tab Elements
        this.globalsSaveButton = protractor_1.element(protractor_1.by.css('a[id="globals_save_btn"]'));
        this.globalsJsonEditor = protractor_1.element(protractor_1.by.css('div[class="jsoneditor jsoneditor-mode-tree"]'));
        //Actions Tab Elements
        this.addActionBtn = protractor_1.element(protractor_1.by.css('button[class="create-button"]'));
        // Fields to add an Activity to a Progression Phase
        this.addActivityButton = "//ul[@id='progression_phases']/li/div[span[contains(.,'^^^^')]]/span[contains(@class,'button')]";
        this.addActivityDialog = protractor_1.element(protractor_1.by.css("div#base_dialog[style*='display: block']"));
        this.activityName = protractor_1.element(protractor_1.by.xpath("//div[b[contains(.,'Activity Name:')]]/following-sibling::div/input"));
        this.activityDescription = protractor_1.element(protractor_1.by.xpath("//div[b[contains(.,'Description:')]]/following-sibling::div/textarea"));
        this.activityType = protractor_1.element(protractor_1.by.xpath("//div[b[contains(.,'Type:')]]/following-sibling::div/select"));
        this.activityProject = protractor_1.element(protractor_1.by.xpath("//div[b[contains(.,'Project:')]]/following-sibling::div/input"));
        this.saveActivityButton = protractor_1.element(protractor_1.by.xpath("//span[contains(@class,'button')][text()='Save']"));
        this.packageTeamSelector = protractor_1.element(protractor_1.by.css('#new_dialog select#new_team'));
    }
    return PackagePage;
}());
exports.PackagePage = PackagePage;
