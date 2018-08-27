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
 * No of Functions	: 22
 * Purpose			: Project Page functions
 * Create_Date		: 01/31/2018
 * Last Modified	: 07/05/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento, Rino van Dam, Nithya Pattabiraman
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var project_page_po_1 = require("../project/project_page.po");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.projectPage = new project_page_po_1.ProjectPage();
    }
    ProjectModule.prototype.validateProjectPageItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = this.projectPage.newProjectButton;
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementToBePresent(button)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(button.isDisplayed).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.projectSelector.isDisplayed).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.validateDetailsTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.clickTab('Details')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.projectDescriptionField), 2000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.projectDescriptionField).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.createNewProject = function (createMethod, projectName, teamName, almSystem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.newProjectButton), 10000, "Add project button is not loaded")];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.projectPage.newProjectButton.click()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.nextButton.isDisplayed()).toBeTruthy()];
                    case 4:
                        _b.sent();
                        _a = createMethod;
                        switch (_a) {
                            case 'Wizard': return [3 /*break*/, 5];
                            case 'Manually': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 13];
                    case 5:
                        if (!almSystem) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.createprojectUsingWizard(projectName, almSystem)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        console.log("No value for AlmSystem");
                        _b.label = 8;
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        if (!projectName) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.createProjectManually(projectName, teamName)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        console.log("No value for Project Name");
                        _b.label = 12;
                    case 12: return [3 /*break*/, 13];
                    case 13:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.createprojectUsingWizard = function (projectName, almSystem) {
        return __awaiter(this, void 0, void 0, function () {
            var nextButtonWizzard, vcsSelected, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _b.sent();
                        nextButtonWizzard = this.projectPage.nextButton;
                        vcsSelected = protractor_1.element(protractor_1.by.cssContainingText(this.projectPage.vcsIconSelector, 'Github'));
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.createProjectwithWizzard, 'Wizard')).click()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(nextButtonWizzard), 5000)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.projectPage.skipLink), 2000)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.skipLink.isDisplayed()).toBeTruthy()];
                    case 7:
                        _b.sent();
                        _a = almSystem;
                        switch (_a) {
                            case 'VersionOne': return [3 /*break*/, 8];
                            case 'Jira': return [3 /*break*/, 14];
                        }
                        return [3 /*break*/, 18];
                    case 8: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(nextButtonWizzard), 2000)];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 10:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.almUrl.isDisplayed()).toBeTruthy()];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 13:
                        _b.sent();
                        return [3 /*break*/, 19];
                    case 14: return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.vcsIconSelector, 'Jira')).click()];
                    case 15:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 16:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 17:
                        _b.sent();
                        return [3 /*break*/, 19];
                    case 18: return [3 /*break*/, 19];
                    case 19:
                        ;
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(vcsSelected), 2000)];
                    case 20:
                        _b.sent();
                        return [4 /*yield*/, this.validateIconsVCS()];
                    case 21:
                        _b.sent();
                        return [4 /*yield*/, vcsSelected.click()];
                    case 22:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 23:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.almUrl.isPresent()).toBeTruthy()];
                    case 24:
                        _b.sent();
                        return [4 /*yield*/, this.isRepoInfoDisplayed()];
                    case 25:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 26:
                        _b.sent();
                        return [4 /*yield*/, this.validateRepoListPresent('Github')];
                    case 27:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 28:
                        _b.sent();
                        return [4 /*yield*/, this.selectRepofromList('continuumautotests', projectName)];
                    case 29:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(nextButtonWizzard), 2000)];
                    case 30:
                        _b.sent();
                        return [4 /*yield*/, nextButtonWizzard.click()];
                    case 31:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.newProjectLink), 2000)];
                    case 32:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.congratMessage.isPresent()).toBeTruthy()];
                    case 33:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.newProjectLink.isPresent()).toBeTruthy()];
                    case 34:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.validateIconsVCS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vcsOptions, _a, _b, _i, vcsIndex;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        vcsOptions = ['Github', 'GitLab', 'BitBucket Cloud', 'TFS'];
                        _a = [];
                        for (_b in vcsOptions)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        vcsIndex = _a[_i];
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.cssContainingText(this.projectPage.vcsIconSelector, vcsOptions[vcsIndex])))).toBeTruthy()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.validateRepoListPresent = function (vcsName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.repoListHeaders), 5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.projectPage.repoListHeaders)).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.projectPage.repoList)).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.selectRepofromList = function (repoName, projectName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.repoListRow, repoName)).click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.repoProjectName.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.repoProjectName.sendKeys(projectName)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.isRepoInfoDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextButtonWizzard, reposelector;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextButtonWizzard = this.projectPage.nextButton;
                        reposelector = this.projectPage.repoSelector;
                        return [4 /*yield*/, reposelector.isPresent().then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!value) return [3 /*break*/, 2];
                                            return [4 /*yield*/, nextButtonWizzard.click()];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, this.enterGithubInfo()];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            ;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.enterGithubInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.projectPage.githubName.sendKeys(this.continuumCommonPage.githubName)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.githubOwner.sendKeys(this.continuumCommonPage.githubOwner)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.githubToken.sendKeys(this.continuumCommonPage.githubToken)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.createProjectManually = function (projectName, teamName) {
        return __awaiter(this, void 0, void 0, function () {
            var projectDescription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projectDescription = 'Description for a manually created project';
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.createProjectwithWizzard, 'Manually')).click()];
                    case 2:
                        _a.sent();
                        // this.projectPage.createProjectManually.click();
                        return [4 /*yield*/, this.projectPage.nextButton.click()];
                    case 3:
                        // this.projectPage.createProjectManually.click();
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(10000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.nextButton.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementToBePresent(this.projectPage.projectNameFieldatCreate)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.nextButton.isEnabled()).toEqual(false)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.selectTeam(teamName)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.projectNameFieldatCreate.sendKeys(projectName)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.nextButton.isEnabled()).toEqual(true)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.projectDescriptionatCreate.sendKeys(projectDescription)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.nextButton.click()];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementToBePresent(this.projectPage.projectCreateSuccessMessage)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.projectCreateSuccessMessage.isDisplayed()).toBeTruthy()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.nextButton.isEnabled()).toEqual(true)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.closeModalButton.isPresent()).toBeTruthy()];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.closeModalButton.click()];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.setSourceTypetoNewProject = function (projectName, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectProject(projectName)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectFromDropdown(this.projectPage.projectType, type)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.projectSaveBtn), 2000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.projectSaveBtn.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This method sets the source type on the Source tab
    ProjectModule.prototype.setSourceType = function (typeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Click on the 'Source' tab
                    return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.projectTabs, "Source")).click()];
                    case 1:
                        // Click on the 'Source' tab
                        _a.sent();
                        // Select the Source from the dropdown
                        return [4 /*yield*/, this.continuumCommonModule.selectFromDropdown(this.projectPage.sourceType, this.continuumCommonPage.projectSource)];
                    case 2:
                        // Select the Source from the dropdown
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // This adds an Artifact to the Project 
    ProjectModule.prototype.addArtifact = function (artifactName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Navigate to the 'Artifacts' tab
                    return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.projectTabs, "Artifacts")).click()];
                    case 1:
                        // Navigate to the 'Artifacts' tab
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.addNewArtifactButton), 5000)
                            // Click the Artifact button...
                        ];
                    case 2:
                        _a.sent();
                        // Click the Artifact button...
                        return [4 /*yield*/, this.projectPage.addNewArtifactButton.click()];
                    case 3:
                        // Click the Artifact button...
                        _a.sent();
                        // ..wait for the dialog to be open...
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.newArtifactName), 5000)
                            // ..enter a name
                        ];
                    case 4:
                        // ..wait for the dialog to be open...
                        _a.sent();
                        // ..enter a name
                        return [4 /*yield*/, this.projectPage.newArtifactName.sendKeys(this.continuumCommonPage.projectArtifact)];
                    case 5:
                        // ..enter a name
                        _a.sent();
                        // ..click the 'Add Artifact' button
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.addArtifactButton), 5000)];
                    case 6:
                        // ..click the 'Add Artifact' button
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.addArtifactButton.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.projectSaveBtn.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.validateTabsforNewProject = function (projectName, type) {
        return __awaiter(this, void 0, void 0, function () {
            var tabsGen, tabsAdded, _a, _b, _i, tabIndex, tab, _c, _d, _e, tabIndex, _f, _g, _h, tabIndex, tabSource;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        tabsGen = ['Details', 'Globals', 'Notifications', 'Versions', 'Actions', 'Data Flow'];
                        tabsAdded = ['Artifacts', 'Source', 'Submissions'];
                        _a = [];
                        for (_b in tabsGen)
                            _a.push(_b);
                        _i = 0;
                        _j.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        tabIndex = _a[_i];
                        tab = protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.projectTabs, tabsGen[tabIndex]));
                        return [4 /*yield*/, expect(tab.isDisplayed()).toBeTruthy()];
                    case 2:
                        _j.sent();
                        return [4 /*yield*/, tab.click()];
                    case 3:
                        _j.sent();
                        return [4 /*yield*/, this.validateElementinTab(tabsGen[tabIndex])];
                    case 4:
                        _j.sent();
                        _j.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        ;
                        if (!(type == 'General' || type == 'Integration')) return [3 /*break*/, 11];
                        _c = [];
                        for (_d in tabsAdded)
                            _c.push(_d);
                        _e = 0;
                        _j.label = 7;
                    case 7:
                        if (!(_e < _c.length)) return [3 /*break*/, 10];
                        tabIndex = _c[_e];
                        return [4 /*yield*/, expect(protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.projectTabs, tabsAdded[tabIndex])).isPresent()).toBeFalsy()];
                    case 8:
                        _j.sent();
                        _j.label = 9;
                    case 9:
                        _e++;
                        return [3 /*break*/, 7];
                    case 10:
                        ;
                        return [3 /*break*/, 17];
                    case 11:
                        if (!(type == 'Source')) return [3 /*break*/, 17];
                        _f = [];
                        for (_g in tabsAdded)
                            _f.push(_g);
                        _h = 0;
                        _j.label = 12;
                    case 12:
                        if (!(_h < _f.length)) return [3 /*break*/, 16];
                        tabIndex = _f[_h];
                        tabSource = protractor_1.browser.element(protractor_1.by.cssContainingText(this.projectPage.projectTabs, tabsAdded[tabIndex]));
                        return [4 /*yield*/, expect(tabSource.isDisplayed()).toBeTruthy()];
                    case 13:
                        _j.sent();
                        return [4 /*yield*/, tabSource.click()];
                    case 14:
                        _j.sent();
                        _j.label = 15;
                    case 15:
                        _h++;
                        return [3 /*break*/, 12];
                    case 16:
                        ;
                        _j.label = 17;
                    case 17:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    //This validates elements in a project tab
    ProjectModule.prototype.validateElementinTab = function (tabName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = tabName;
                        switch (_a) {
                            case 'Details': return [3 /*break*/, 1];
                            case 'Globals': return [3 /*break*/, 4];
                            case 'Notifications': return [3 /*break*/, 7];
                            case 'Versions': return [3 /*break*/, 10];
                            case 'Actions': return [3 /*break*/, 13];
                            case 'Data Flow': return [3 /*break*/, 15];
                            case 'Artifacts': return [3 /*break*/, 17];
                            case 'Source': return [3 /*break*/, 19];
                            case 'Submissions': return [3 /*break*/, 26];
                        }
                        return [3 /*break*/, 27];
                    case 1: return [4 /*yield*/, expect(this.projectPage.projectDescriptionField.isDisplayed()).toBeTruthy()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.projectTypeSelector.isDisplayed()).toBeTruthy()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 4: return [4 /*yield*/, expect(this.projectPage.globalsJsonEditor.isDisplayed()).toBeTruthy()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.globalsJsonEditor.isDisplayed()).toBeTruthy()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 7: return [4 /*yield*/, expect(this.projectPage.enableNotificationsCheckBox.isDisplayed()).toBeTruthy()];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, this.validateNotificationElements()];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 10: return [4 /*yield*/, expect(this.projectPage.currentVersionInputField.isDisplayed()).toBeTruthy()];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.updateVersionBtn.isDisplayed()).toBeTruthy()];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 13: return [4 /*yield*/, expect(this.projectPage.addActionBtn.isDisplayed()).toBeTruthy()];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 15: return [4 /*yield*/, expect(this.projectPage.addNewDataFlowBtn.isDisplayed()).toBeTruthy()];
                    case 16:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 17: return [4 /*yield*/, expect(this.projectPage.addNewArtifactBtn.isDisplayed()).toBeTruthy()];
                    case 18:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 19: return [4 /*yield*/, expect(this.projectPage.sourceTypeSelect.isDisplayed()).toBeTruthy()];
                    case 20:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.sourceBranchRadioBtn.isDisplayed()).toBeTruthy()];
                    case 21:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.webhookEndPoint.isDisplayed()).toBeTruthy()];
                    case 22:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.lookupRadioRadioBtn.isDisplayed()).toBeTruthy()];
                    case 23:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.notifyOnUnmanagedCheckBox.isDisplayed()).toBeTruthy()];
                    case 24:
                        _b.sent();
                        return [4 /*yield*/, expect(this.projectPage.addtnlRecipientsField.isDisplayed()).toBeTruthy()];
                    case 25:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 26: return [3 /*break*/, 28];
                    case 27: return [3 /*break*/, 28];
                    case 28: return [2 /*return*/];
                }
            });
        });
    };
    //Boxes to be present in Notifications Tabs
    ProjectModule.prototype.expectedCheckBoxesEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.projectPage.enableFailureCheckBoxEmail.isPresent()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableNotificationsCheckBox.isPresent()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableStartCheckBoxEmail.isPresent()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableSuccessCheckBoxEmail.isPresent()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableWaitMailCheckboxEmail.isPresent()).toBeTruthy()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.expectedCheckBoxesSlack = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.projectPage.enableFailureCheckBoxSlack.isPresent()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableStartCheckBoxSlack.isPresent()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableSuccessCheckBoxSlack.isPresent()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableWaitMailCheckboxSlack.isPresent()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.expectedCheckBoxesHTTP = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.projectPage.enableFailureCheckBoxHTTP.isPresent()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableStartCheckBoxHTTP.isPresent()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableSuccessCheckBoxHTTP.isPresent()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableWaitMailCheckboxHTTP.isPresent()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.expectedCheckBoxesHipChat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.projectPage.enableFailureCheckBoxHchat.isPresent()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableStartCheckBoxHchat.isPresent()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableSuccessCheckBoxHchat.isPresent()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.enableWaitMailCheckboxHchat.isPresent()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Validate elements in Notification Tab
    ProjectModule.prototype.validateNotificationElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.projectPage.emailAddrsArea.isPresent()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.expectedCheckBoxesEmail()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.hipChatRoomField.isPresent()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.expectedCheckBoxesHipChat()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.slackChannelArea.isPresent()).toBeTruthy()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.expectedCheckBoxesSlack()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.urlArea.isPresent()).toBeTruthy()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.dataforUrlArea.isPresent()).toBeTruthy()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.expectedCheckBoxesHTTP()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectModule.prototype.selectProject = function (projectName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.waitForElementCickable(this.projectPage.projectSelector)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.projectSelector.sendKeys(projectName).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform()];
                                        case 1:
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
    ProjectModule.prototype.selectTeam = function (teamName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.waitForElementCickable(this.projectPage.teamSelector)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.teamSelector.sendKeys(teamName).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform()];
                                        case 1:
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
    ProjectModule.prototype.copyProject = function (projectNameFrom, projectNameNew) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectProject(projectNameFrom)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementToBePresent(this.projectPage.copyProjectBtn)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.copyProjectBtn.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementToBeVisible(this.projectPage.copyProjectName)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.copyProjectBtnatModal.isDisplayed).toBeTruthy()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.closeModalButton.isPresent).toBeTruthy()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.copyProjectName.sendKeys(projectNameNew)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.waitForElementToBeVisible(this.projectPage.copyProjectBtnatModal)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.projectPage.copyProjectBtnatModal.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.selectProject(projectNameNew)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.projectPage.projectDisplayedAtSelector), 2000)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, expect(this.projectPage.projectDisplayedAtSelector.getText()).toContain(projectNameNew)];
                    case 14:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
