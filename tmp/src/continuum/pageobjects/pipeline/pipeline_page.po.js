"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 9
 * Purpose			: Pipeline Page Locators
 * Create_Date		: 12/04/2018
 * Last Modified	: 17/04/2018
 * Author			: Nithya Pattabiraman
 * Developed By		: Nithya Pattabiraman
 * Reviewed By		:  Gustavo Sarmiento
 ======================================================================*/
var protractor_1 = require("protractor");
var PipelinePage = /** @class */ (function () {
    function PipelinePage() {
        // Fields for adding a new package
        this.tabDebug = protractor_1.element(protractor_1.by.xpath("//li[contains(@class,'divider tab-title')][5]"));
        this.sProject = protractor_1.element(protractor_1.by.id("debug_project"));
        this.autoddSelection = protractor_1.element(protractor_1.by.xpath("//li/a[contains(@class,'ui-corner-all')]"));
        this.btAddPipeline = protractor_1.element(protractor_1.by.xpath('//div[contains(@class,\'toolbar-group\')]/button'));
        this.sPipelineName = protractor_1.element(protractor_1.by.id("new_name"));
        this.sPipelineDesc = protractor_1.element(protractor_1.by.id("new_desc"));
        this.btCreatePipeline = protractor_1.element(protractor_1.by.id("new_btn"));
        this.ddPipeline = protractor_1.element(protractor_1.by.id("react-select-2--value"));
        this.cobPipelineName = protractor_1.element(protractor_1.by.xpath("//input[contains(@role,'combobox')]"));
    }
    return PipelinePage;
}());
exports.PipelinePage = PipelinePage;
;
