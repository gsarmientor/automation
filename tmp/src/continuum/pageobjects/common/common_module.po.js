"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Functions	: 1
 * Purpose			: Common functions
 * Create_Date		: 01/25/2018
 * Last Modified	: 06/26/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Nithya Pattabiraman
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var CommonModule = /** @class */ (function () {
    function CommonModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
    }
    CommonModule.prototype.validateAdminMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adminPages, _i, adminPages_1, pageInfo, menuLabel, pageTitle, pageLink;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adminPages = [["Settings", "Manage Settings", "settings"], ["System", "Administration", "admin"],
                            ["Users", "Manage Users", "userEdit"], ["Tags", "Manage Tags", "tagEdit"], ["Security Log", "Security Log", "security_log"],
                            ["Change  Log", "Change Log", "change_log"], ["Projects", "Manage Projects", "project_manage"],
                            ["Progressions", "Manage Progressions", "progression_manage"], ["Packages", "Manage Packages", "package_manage"],
                            ["Pipelines", "Manage Pipelines", "pipeline_builder"], ["Plugins", "Manage Plugins", "plugin_manage"],
                            ["Global Registry", "Manage Registry", "registry_manage"], ["Tasks", "Manage Tasks", "taskManage"],
                            ["Assets", "Manage Assets", "assetEdit"], ["Shared Credentials", "Manage Credentials", "credentialEdit"],
                            ["Clouds", "Manage Clouds", "cloudEdit"], ["Cloud Accounts", "Manage Cloud Accounts", "cloudAccountEdit"],
                            ["Webhooks", "Manage Webhooks", "webhooks"]];
                        _i = 0, adminPages_1 = adminPages;
                        _a.label = 1;
                    case 1:
                        if (!(_i < adminPages_1.length)) return [3 /*break*/, 7];
                        pageInfo = adminPages_1[_i];
                        menuLabel = pageInfo[0];
                        pageTitle = pageInfo[1];
                        pageLink = pageInfo[2];
                        return [4 /*yield*/, this.clickAdminButton()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.selectItemfromAdminMenu(menuLabel)];
                    case 3:
                        _a.sent();
                        // Verify the browser title (in its tab)
                        return [4 /*yield*/, expect(protractor_1.browser.getTitle()).toEqual(pageTitle)];
                    case 4:
                        // Verify the browser title (in its tab)
                        _a.sent();
                        // Verify the last part of the url (the page file name)
                        return [4 /*yield*/, expect(protractor_1.browser.getCurrentUrl()).toContain('/' + pageLink)];
                    case 5:
                        // Verify the last part of the url (the page file name)
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    //Click admin button
    CommonModule.prototype.clickAdminButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.continuumCommonPage.btnAdminIcon), 1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonPage.btnAdminIcon.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Select an item from the Admin menu
    CommonModule.prototype.selectItemfromAdminMenu = function (menuOption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption))), 2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption)).click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //select an item from the Navigation Menu
    CommonModule.prototype.selectItemfromNavMenu = function (navOption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(this.continuumCommonPage.navItemSelector, navOption))), 2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.continuumCommonPage.navItemSelector, navOption)).click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonModule.prototype.clickTab = function (tabName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(this.continuumCommonPage.tabSelector, tabName))), 2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.continuumCommonPage.tabSelector, tabName)).click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Validate element visibility
    CommonModule.prototype.validateElementVisibility = function (elementInPage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(elementInPage.isDisplayed()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Wait for element to be clickable
    CommonModule.prototype.waitForElementCickable = function (elem) {
        return __awaiter(this, void 0, void 0, function () {
            var EC, itemToValidate, isClickable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EC = protractor_1.protractor.ExpectedConditions;
                        itemToValidate = elem;
                        isClickable = EC.elementToBeClickable(itemToValidate);
                        return [4 /*yield*/, protractor_1.browser.wait(isClickable, 2000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Wait for the HTML element to be invisible
    CommonModule.prototype.waitForElementToBeInvisible = function (elem) {
        return __awaiter(this, void 0, void 0, function () {
            var EC, itemToValidate, isInvisible;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EC = protractor_1.protractor.ExpectedConditions;
                        itemToValidate = elem;
                        isInvisible = EC.invisibilityOf(itemToValidate);
                        return [4 /*yield*/, protractor_1.browser.wait(isInvisible, 2000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Wait for the HTML element to be present
    CommonModule.prototype.waitForElementToBePresent = function (elem) {
        return __awaiter(this, void 0, void 0, function () {
            var EC, itemToValidate, isPresent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EC = protractor_1.protractor.ExpectedConditions;
                        itemToValidate = elem;
                        isPresent = EC.presenceOf(itemToValidate);
                        return [4 /*yield*/, protractor_1.browser.wait(isPresent, 2000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Validate element to be visible
    CommonModule.prototype.waitForElementToBeVisible = function (elem) {
        return __awaiter(this, void 0, void 0, function () {
            var EC, itemToValidate, isVisible;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EC = protractor_1.protractor.ExpectedConditions;
                        itemToValidate = elem;
                        isVisible = EC.visibilityOf(itemToValidate);
                        return [4 /*yield*/, protractor_1.browser.wait(isVisible, 2000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This function will click on an option in a standard HTML option list (dropdown)
    // Requires a css locator for the dropdown, and the text of the option to select
    CommonModule.prototype.selectFromDropdown = function (locDropdown, optionText) {
        return __awaiter(this, void 0, void 0, function () {
            var dropdown;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dropdown = protractor_1.browser.element(protractor_1.by.css(locDropdown));
                        return [4 /*yield*/, dropdown.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 2:
                        _a.sent();
                        // Concatenate dropdown and option css locators, inserting option text
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(locDropdown + ">option", optionText))))];
                    case 3:
                        // Concatenate dropdown and option css locators, inserting option text
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(locDropdown + ">option", optionText)).click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to generate the random number
    CommonModule.prototype.generateRandomNumber = function () {
        var number = Math.floor(1 + Math.random() * 1000);
        return number;
    };
    //This function is used to generate the random characters
    CommonModule.prototype.generateRandomChar = function () {
        var min = 65;
        var max = 90;
        var a1 = Math.floor(Math.random() * (max - min + 1) + min);
        var a2 = Math.floor(Math.random() * (max - min + 1) + min);
        var a3 = Math.floor(Math.random() * (max - min + 1) + min);
        var a4 = Math.floor(Math.random() * (max - min + 1) + min);
        return String.fromCharCode(a1, a2, a3, a4);
    };
    // async navigateToMenuItem(menuOption: string) {
    //     await browser.wait(ExpectedConditions.elementToBeClickable(this.continuumCommonPage.btnAdminIcon), 1000);
    //     await this.continuumCommonPage.btnAdminIcon.click();               
    //     await browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption))), 2000);
    //     await browser.element(by.cssContainingText(this.continuumCommonPage.adminItemSelector, menuOption)).click();        
    // }
    CommonModule.prototype.filterTeam = function (teamName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonPage.teamCoreSelector.sendKeys(teamName)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-2--option-0']")).click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonModule.prototype.pageScrollDown = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.executeScript('window.scrollTo(' + x + ',' + y + ')')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommonModule;
}());
exports.CommonModule = CommonModule;
