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
 * No of Functions	: 8
 * Purpose			: Package Page functions
 * Create_Date		: 02/02/2018
 * Last Modified	: 06/26/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var package_page_po_1 = require("../package/package_page.po");
var progression_module_po_1 = require("../progression/progression_module.po");
var PackageModule = /** @class */ (function () {
    function PackageModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.packagePage = new package_page_po_1.PackagePage();
        this.progressionModule = new progression_module_po_1.ProgressionModule();
        this.buttonName = "Add Package";
    }
    // This verifies the dialog that enables creation of new Packages
    PackageModule.prototype.validateAddNewDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait for the 'Add New' button to be present, then click it
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(this.packagePage.addNewButton, this.buttonName))), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.packagePage.addNewButton, this.buttonName)).click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // Wait for the 'Add New' button to be present, then click it
                        _a.sent();
                        //Validate elements at new package dialog
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementCickable(this.packagePage.newName)];
                    case 2:
                        //Validate elements at new package dialog
                        _a.sent();
                        return [4 /*yield*/, expect(this.packagePage.newName.isPresent()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.packagePage.newDescription.isPresent()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.packagePage.packageDialogClose.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This verifies the Detials tab
    PackageModule.prototype.validatePackageDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validatePackageTabs()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PackageModule.prototype.validatePackageTabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabNames, _a, _b, _i, tabIndex, tab;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tabNames = ['Details', 'Progressions', 'Globals', 'Actions'];
                        _a = [];
                        for (_b in tabNames)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        tabIndex = _a[_i];
                        tab = protractor_1.browser.element(protractor_1.by.cssContainingText(this.packagePage.packageTabs, tabNames[tabIndex]));
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(tab), 2000)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, expect(tab.isDisplayed()).toBeTruthy()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, tab.click()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.validateElementinTab(tabNames[tabIndex])];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    PackageModule.prototype.validateElementinTab = function (tabName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = tabName;
                        switch (_a) {
                            case 'Details': return [3 /*break*/, 1];
                            case 'Progressions': return [3 /*break*/, 5];
                            case 'Globals': return [3 /*break*/, 7];
                            case 'Actions': return [3 /*break*/, 10];
                        }
                        return [3 /*break*/, 12];
                    case 1: return [4 /*yield*/, expect(this.packagePage.detailsName.isDisplayed()).toBeTruthy()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, expect(this.packagePage.detailsDescription.isDisplayed()).toBeTruthy()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, expect(this.packagePage.detailsArtifactButton.isDisplayed()).toBeTruthy()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 5: return [4 /*yield*/, expect(this.packagePage.progressionSelector.isDisplayed()).toBeTruthy()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 7: return [4 /*yield*/, expect(this.packagePage.globalsJsonEditor.isDisplayed()).toBeTruthy()];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, expect(this.packagePage.globalsJsonEditor.isDisplayed()).toBeTruthy()];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 10: return [4 /*yield*/, expect(this.packagePage.addActionBtn.isDisplayed()).toBeTruthy()];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 12: return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    // This method enables creation of a new Package
    PackageModule.prototype.addPackage = function (teamName, pckgNewName, pckgNewDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait for, then click on the 'Add Package' button
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(this.packagePage.addNewButton, this.buttonName))), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.packagePage.addNewButton, this.buttonName)).click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // Wait for, then click on the 'Add Package' button
                        _a.sent();
                        //await this.packagePage.packageTeamSelector.element(by.cssContainingText('option',teamName)).click();
                        //await this.continuumCommonModule.selectFromDropdown("#new_dialog select#new_team",teamName);
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementCickable(this.packagePage.newName)];
                    case 2:
                        //await this.packagePage.packageTeamSelector.element(by.cssContainingText('option',teamName)).click();
                        //await this.continuumCommonModule.selectFromDropdown("#new_dialog select#new_team",teamName);
                        _a.sent();
                        return [4 /*yield*/, this.packagePage.newName.sendKeys(pckgNewName)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.packagePage.newDescription.sendKeys(pckgNewDescription)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.packagePage.createButton.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This selects a package from the list on the main Package page
    PackageModule.prototype.selectPackage = function (projectName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.waitForElementCickable(this.packagePage.packageSelector)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.packagePage.packageSelector.sendKeys(projectName).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This selects a Progression from the dropdown on the 'Progression' tab
    PackageModule.prototype.associateProgression = function (prgName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // wait for the tabs to display, then...
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 1:
                        // wait for the tabs to display, then...
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.packagePage.progressionTab), 5000).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        // ... click on second tab ('Progression')
                                        return [4 /*yield*/, this.packagePage.progressionTab.click()];
                                        case 1:
                                            // ... click on second tab ('Progression')
                                            _a.sent();
                                            return [4 /*yield*/, this.packagePage.progressionSelector.click()];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                                        case 3:
                                            _a.sent();
                                            // Select the appropriate Progression
                                            return [4 /*yield*/, this.packagePage.progressionSelector.element(protractor_1.by.cssContainingText('option', prgName)).click()];
                                        case 4:
                                            // Select the appropriate Progression
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                                        case 5:
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.element(protractor_1.by.css('button#save_btn')).click()];
                                        case 6:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This associates an artifact to the Progression 
    PackageModule.prototype.associateArtifact = function (projectName, artifactName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Select Details tab
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText(this.packagePage.packageTabs, 'Details'))), 5000)];
                    case 1:
                        // Select Details tab
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.packagePage.packageTabs, 'Details')).click()];
                    case 2:
                        _a.sent();
                        // Click the Artifact button
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.packagePage.detailsArtifactButton), 5000)];
                    case 3:
                        // Click the Artifact button
                        _a.sent();
                        return [4 /*yield*/, this.packagePage.detailsArtifactButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.css(this.packagePage.newArtifactProject))), 5000)
                            // Select the Project from the dropdown
                        ];
                    case 5:
                        _a.sent();
                        // Select the Project from the dropdown
                        return [4 /*yield*/, this.continuumCommonModule.selectFromDropdown(this.packagePage.newArtifactProject, projectName)];
                    case 6:
                        // Select the Project from the dropdown
                        _a.sent();
                        // Select the Artifact from the dropdown
                        return [4 /*yield*/, this.continuumCommonModule.selectFromDropdown(this.packagePage.newArtifact, artifactName)
                            //Click the 'Add' button
                        ];
                    case 7:
                        // Select the Artifact from the dropdown
                        _a.sent();
                        //Click the 'Add' button
                        return [4 /*yield*/, this.packagePage.newArtifactAddButton.click()];
                    case 8:
                        //Click the 'Add' button
                        _a.sent();
                        // Close the dialog by clicking the 'Done' button
                        return [4 /*yield*/, this.packagePage.newArtifactDialogCloseButton.click()];
                    case 9:
                        // Close the dialog by clicking the 'Done' button
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Add an activity to the Phase (on the Progression tab)
    PackageModule.prototype.addActivity = function (phaseName, activityName, activityType, activityProject) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // wait for the tabs to display, then...
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.packagePage.progressionTab), 5000)
                        // ... click on second tab ('Progression')
                        //console.log("clicking Progression tab")
                    ];
                    case 1:
                        // wait for the tabs to display, then...
                        _a.sent();
                        // ... click on second tab ('Progression')
                        //console.log("clicking Progression tab")
                        return [4 /*yield*/, this.packagePage.progressionTab.click()];
                    case 2:
                        // ... click on second tab ('Progression')
                        //console.log("clicking Progression tab")
                        _a.sent();
                        // Click on the '+Activity' button for the correct Phase
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.xpath(this.packagePage.addActivityButton.replace('^^^^', phaseName))).click()];
                    case 3:
                        // Click on the '+Activity' button for the correct Phase
                        _a.sent();
                        // Verify the popup is visible...
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.packagePage.addActivityDialog), 5000)];
                    case 4:
                        // Verify the popup is visible...
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PackageModule;
}());
exports.PackageModule = PackageModule;
