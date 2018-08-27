/*====================================================================
 * No of Locators	: 
 * Purpose			: Progression Page Locators
 * Create_Date		: 02/12/2018
 * Last Modified	: 02/12/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class ProgressionPage {
    // Fields for adding a new progression
    //addNewButton = "li[class='panel pointer libitem addbtn']";
    addNewButton = element(by.xpath("//li[@class='panel pointer libitem addbtn']/span[contains(.,'Add New')]"));
    newName = element(by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]//input[@id='new_name']"));
    //newName = by.css("div#new_dialog[style*='display: block']>input#new_name");
    newDescription = element(by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]//textarea[@id='new_desc']"));
    //newDescription = By.css("div#new_dialog[style*='display: block']>textarea#new_desc")
    createButton = element(by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]/div[@id='new_btn']"));
    //createButton = by.css("div#new_dialog[style*='display: block']>div#new_btn");
    progressionDialogClose = element(by.xpath("//div[@id='new_dialog'][contains(@style,'display: block')]/a[@class='close-reveal-modal']"));
    //packageDialogClose = by.css("div#new_dialog[style*='display: block']>a.close-reveal-modal")


    // Fields to select and display Progression details
    progressionName = element(by.css("div>h3[id='progression_name_label']"));
    firstInList = element(by.css("ul#progressions>li>span"));
    secondProgressionInList = element(by.css("ul#progressions>li[class='panel pointer libitem']:nth-child(2)"));
    listButton = "ul#progressions>li>span";
    detailsTab = element(by.xpath("//div[@class='medium-9 columns detailbox']//li[contains(@class,'tab-title')][a[contains(.,'Details')]]"));
    detailsName = element(by.css("input#progression_name"));
    detailsDescription = element(by.css("input#progression_desc"));
    
    // Fields to add a Phase
    addPhaseButton = element(by.css("a#show_phase_add_dialog_btn"));
    newPhaseName = element(by.css("div[style*='display: block']>input#new_phase_name"));
    newPhaseDescription = element(by.css("div[style*='display: block']>textarea#new_phase_desc"));
    newPhaseAddButton = element(by.css("div#add_phase"));
    newPhaseDoneButton = element(by.xpath("//div[@class='button tiny right secondary'][contains(.,'Done')]"));
     
    // Fields to select a Phase
   
 }