/*====================================================================
 * No of Locators	: 9
 * Purpose			: Pipeline Page Locators
 * Create_Date		: 12/04/2018
 * Last Modified	: 17/04/2018
 * Author			: Nithya Pattabiraman
 * Developed By		: Nithya Pattabiraman
 * Reviewed By		:  Gustavo Sarmiento
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class PipelinePage {
     // Fields for adding a new package
     tabDebug = element(by.xpath("//li[contains(@class,'divider tab-title')][5]"));
     sProject = element(by.id("debug_project"));
     autoddSelection = element(by.xpath("//li/a[contains(@class,'ui-corner-all')]"));
     btAddPipeline = element(by.xpath('//div[contains(@class,\'toolbar-group\')]/button'));
     sPipelineName= element(by.id("new_name"));
     sPipelineDesc=element(by.id("new_desc"));
     btCreatePipeline=element(by.id("new_btn"));
     ddPipeline=element(by.id("react-select-2--value"));
     cobPipelineName=element(by.xpath("//input[contains(@role,'combobox')]"));
 };

