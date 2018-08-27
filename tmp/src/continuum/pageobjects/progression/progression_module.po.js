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
 * Purpose			: Project Page functions
 * Create_Date		: 02/02/2018
 * Last Modified	: 07/03/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var progression_page_po_1 = require("../progression/progression_page.po");
//import {Locator} from 'protractor/built/locators';
var ProgressionModule = /** @class */ (function () {
    function ProgressionModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.progressionPage = new progression_page_po_1.ProgressionPage();
    }
    // This verifies the dialog that enables creation of new Progressions
    ProgressionModule.prototype.validateAddNewDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait for the 'Add New' button to be present, then click it
                    //browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.progressionPage.addNewButton, "Add New"))),5000).then(() =>{
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.progressionPage.addNewButton), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    //browser.element(by.cssContainingText(this.progressionPage.addNewButton, "Add New")).click();
                                    return [4 /*yield*/, this.progressionPage.addNewButton.click()];
                                    case 1:
                                        //browser.element(by.cssContainingText(this.progressionPage.addNewButton, "Add New")).click();
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // Wait for the 'Add New' button to be present, then click it
                        //browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.progressionPage.addNewButton, "Add New"))),5000).then(() =>{
                        _a.sent();
                        // Wait for the dialog, then... 
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.progressionPage.newName), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        // ..check Name and Description fields
                                        return [4 /*yield*/, expect(this.progressionPage.newName).toBeTruthy()];
                                        case 1:
                                            // ..check Name and Description fields
                                            _a.sent();
                                            return [4 /*yield*/, expect(this.progressionPage.newDescription).toBeTruthy()];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, this.progressionPage.progressionDialogClose.click()];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        // Wait for the dialog, then... 
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This verifies the Details tab
    ProgressionModule.prototype.validateProgressionDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // wait for the list to become available, then...
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.progressionPage.secondProgressionInList), 8000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // ...click on the first listed Project
                                    //console.log("clicking package in list")
                                    return [4 /*yield*/, this.progressionPage.secondProgressionInList.click()];
                                    case 1:
                                        // ...click on the first listed Project
                                        //console.log("clicking package in list")
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // wait for the list to become available, then...
                        _a.sent();
                        // wait for the tabs to display, then...
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.progressionPage.detailsTab), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        // ... click on first tab ('Details')
                                        //console.log("clicking Details tab")
                                        //this.progressionPage.detailsTab.click();
                                        // verify Name and Description fields
                                        return [4 /*yield*/, expect(this.progressionPage.detailsName).toBeTruthy()];
                                        case 1:
                                            // ... click on first tab ('Details')
                                            //console.log("clicking Details tab")
                                            //this.progressionPage.detailsTab.click();
                                            // verify Name and Description fields
                                            _a.sent();
                                            return [4 /*yield*/, expect(this.progressionPage.detailsDescription).toBeTruthy()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        // wait for the tabs to display, then...
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This method enables creation of a new Package
    ProgressionModule.prototype.addProgression = function (newName, newDesc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait for, then click on the 'Add New' button
                    /*browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.progressionPage.addNewButton, "Add New"))),5000).then(() =>{
                        browser.element(by.cssContainingText(this.progressionPage.addNewButton, "Add New")).click();
                    });*/
                    return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 1:
                        // Wait for, then click on the 'Add New' button
                        /*browser.wait(ExpectedConditions.elementToBeClickable(element(by.cssContainingText(this.progressionPage.addNewButton, "Add New"))),5000).then(() =>{
                            browser.element(by.cssContainingText(this.progressionPage.addNewButton, "Add New")).click();
                        });*/
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.progressionPage.addNewButton), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.progressionPage.addNewButton.click()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        // Wait for the dialog, then... 
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.progressionPage.newName), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        // ..enter Name and Description
                                        return [4 /*yield*/, this.progressionPage.newName.sendKeys(newName)];
                                        case 1:
                                            // ..enter Name and Description
                                            _a.sent();
                                            return [4 /*yield*/, this.progressionPage.newDescription.sendKeys(newDesc)];
                                        case 2:
                                            _a.sent();
                                            // ..click the 'Create' button
                                            return [4 /*yield*/, this.progressionPage.createButton.click()];
                                        case 3:
                                            // ..click the 'Create' button
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        // Wait for the dialog, then... 
                        _a.sent();
                        // Wait for dialog to be completely closed
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(this.progressionPage.newName), 5000)];
                    case 4:
                        // Wait for dialog to be completely closed
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This selects a Progression from the list on the main Progression page
    ProgressionModule.prototype.selectProgression = function (prgName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // wait for the list to become available, then...
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.progressionPage.firstInList), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // ...click on the Progression name
                                    //console.log("clicking progression (" + pckgName + ") in list")
                                    return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.progressionPage.listButton, prgName)).click()];
                                    case 1:
                                        // ...click on the Progression name
                                        //console.log("clicking progression (" + pckgName + ") in list")
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // wait for the list to become available, then...
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This adds a Phase to this Progression
    ProgressionModule.prototype.addPhase = function (phaseName, phaseDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait for the 'Add Phase' button
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.progressionPage.addPhaseButton), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // click the Add Phase button
                                    return [4 /*yield*/, this.progressionPage.addPhaseButton.click()];
                                    case 1:
                                        // click the Add Phase button
                                        _a.sent();
                                        // wait for the dialog to be visible
                                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.progressionPage.newPhaseName), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: 
                                                        // enter name and description
                                                        return [4 /*yield*/, this.progressionPage.newPhaseName.sendKeys(phaseName)];
                                                        case 1:
                                                            // enter name and description
                                                            _a.sent();
                                                            return [4 /*yield*/, this.progressionPage.newPhaseDescription.sendKeys(phaseDescription)];
                                                        case 2:
                                                            _a.sent();
                                                            // click the 'Add' button
                                                            return [4 /*yield*/, this.progressionPage.newPhaseAddButton.click()];
                                                        case 3:
                                                            // click the 'Add' button
                                                            _a.sent();
                                                            // Close dialog
                                                            return [4 /*yield*/, this.progressionPage.newPhaseDoneButton.click()];
                                                        case 4:
                                                            // Close dialog
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 2:
                                        // wait for the dialog to be visible
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // Wait for the 'Add Phase' button
                        _a.sent();
                        // Wait for the dialog to be completely closed
                        protractor_1.browser.sleep(5000);
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(this.progressionPage.newPhaseName), 8000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return ProgressionModule;
}());
exports.ProgressionModule = ProgressionModule;
