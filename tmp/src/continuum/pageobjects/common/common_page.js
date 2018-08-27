"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 9
 * Purpose			: Login Page Locators
 * Create_Date		: 11/02/2017
 * Last Modified	: 11/02/2017
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var CommonPage = (function () {
    function CommonPage() {
        this.btnAdminIcon = protractor_1.element(protractor_1.by.xpath("//span[contains(@class,'icon-button')]/span[contains(@class,'icon-config-gear')]"));
        this.adminItemSelector = "span[class='title']";
        this.navItemSelector = "a[class='title']";
        this.tabSelector = "li[class='tab-title active']";
        //btnAdminIcon = element(by.css('span[class="icon-button"]/span[class="svg-icon icon-config-gear undefined"]'));
        //settingsLink = "span:contains('****')";
        // settingsLink = "//span[@class='title'][contains(.,'****')]";
    }
    return CommonPage;
}());
exports.CommonPage = CommonPage;
;
