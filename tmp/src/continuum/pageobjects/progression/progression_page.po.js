"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	:
 * Purpose			: Progression Page Locators
 * Create_Date		: 02/12/2018
 * Last Modified	: 02/12/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var ProgressionPage = /** @class */ (function () {
    function ProgressionPage() {
        // Fields for adding a new progression
        //addNewButton = "li[class='panel pointer libitem addbtn']";
        this.addNewButton = protractor_1.element(protractor_1.by.xpath("//li[@class='panel pointer libitem addbtn']/span[contains(.,'Add New')]"));
        this.newName = protractor_1.element(protractor_1.by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]//input[@id='new_name']"));
        //newName = by.css("div#new_dialog[style*='display: block']>input#new_name");
        this.newDescription = protractor_1.element(protractor_1.by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]//textarea[@id='new_desc']"));
        //newDescription = By.css("div#new_dialog[style*='display: block']>textarea#new_desc")
        this.createButton = protractor_1.element(protractor_1.by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]/div[@id='new_btn']"));
        //createButton = by.css("div#new_dialog[style*='display: block']>div#new_btn");
        this.progressionDialogClose = protractor_1.element(protractor_1.by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]/a[@class='close-reveal-modal']"));
        //packageDialogClose = by.css("div#new_dialog[style*='display: block']>a.close-reveal-modal")
        // Fields to select and display Progression details
        this.progressionName = protractor_1.element(protractor_1.by.css("div>h3[id='progression_name_label']"));
        this.firstInList = protractor_1.element(protractor_1.by.css("ul#progressions>li>span"));
        this.secondProgressionInList = protractor_1.element(protractor_1.by.css("ul#progressions>li[class='panel pointer libitem']:nth-child(2)"));
        this.listButton = "ul#progressions>li>span";
        this.detailsTab = protractor_1.element(protractor_1.by.xpath("//div[@class='medium-9 columns detailbox']//li[contains(@class,'tab-title')][a[contains(.,'Details')]]"));
        this.detailsName = protractor_1.element(protractor_1.by.css("input#progression_name"));
        this.detailsDescription = protractor_1.element(protractor_1.by.css("input#progression_desc"));
        // Fields to add a Phase
        this.addPhaseButton = protractor_1.element(protractor_1.by.css("a#show_phase_add_dialog_btn"));
        this.newPhaseName = protractor_1.element(protractor_1.by.css("div[style*='display: block']>input#new_phase_name"));
        this.newPhaseDescription = protractor_1.element(protractor_1.by.css("div[style*='display: block']>textarea#new_phase_desc"));
        this.newPhaseAddButton = protractor_1.element(protractor_1.by.css("div#add_phase"));
        this.newPhaseDoneButton = protractor_1.element(protractor_1.by.xpath("//div[@class='button tiny right secondary'][contains(.,'Done')]"));
        // Fields to select a Phase
    }
    return ProgressionPage;
}());
exports.ProgressionPage = ProgressionPage;
