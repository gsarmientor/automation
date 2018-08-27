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
 * No of Functions	: 13
 * Purpose			: Task Page functions
 * Create_Date		: 04/19/2018
 * Last Modified	: 07/03/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var task_page_po_1 = require("../task/task_page.po");
var TaskModule = /** @class */ (function () {
    function TaskModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.taskPage = new task_page_po_1.TaskPage();
    }
    //validates elements at the task admin page
    TaskModule.prototype.validateTaskAdminPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.addNewTaskButton), 2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.addNewTaskButton.isDisplayed()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.copyTaskButton.isDisplayed()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.deleteTaskButton.isDisplayed()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.exportTaskButton.isDisplayed()).toBeTruthy()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.importTaskButton.isDisplayed()).toBeTruthy()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.filterTaskField.isDisplayed()).toBeTruthy()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.checkAllTasksBox.isDisplayed()).toBeTruthy()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //function to test winrm connection
    TaskModule.prototype.setWinrmConnection = function (taskName) {
        return __awaiter(this, void 0, void 0, function () {
            var toAssetInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toAssetInfo = this.continuumCommonPage.winRMAssetInfo;
                        return [4 /*yield*/, this.createTask(taskName, 'winrm')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addCommand('Connect', this.taskPage.newConnectionButton)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setNewConnCommand('winrm', 'CONN1', toAssetInfo)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.addCommand('Variable', this.taskPage.setVariableButton)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.setVariablesCommandData()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.taskPage.taskTabs, 'Details')).click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.debugRunTask()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.checkRunResult()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Tasks')];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // funtion to test ssh connection
    TaskModule.prototype.setSSHConnection = function (taskName) {
        return __awaiter(this, void 0, void 0, function () {
            var toAssetInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toAssetInfo = this.continuumCommonPage.sshAssetInfo;
                        return [4 /*yield*/, this.createTask(taskName, 'shh')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addCommand('Connect', this.taskPage.newConnectionButton)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setNewConnCommand('ssh', 'SERV1', toAssetInfo)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.taskPage.taskTabs, 'Details')).click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.debugRunTask()];
                    case 6:
                        _a.sent();
                        //waiting for process to run and finish
                        return [4 /*yield*/, this.checkRunResult()];
                    case 7:
                        //waiting for process to run and finish
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Tasks')];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //function to test http command - TODO add options to request types such as POST
    TaskModule.prototype.makeHTTPCall = function (taskName, requestType, urlInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.createTask(taskName, 'http')];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addCommand('Interact', this.taskPage.httpCommand)];
                    case 2:
                        _b.sent();
                        _a = requestType;
                        switch (_a) {
                            case 'get': return [3 /*break*/, 3];
                            case 'post': return [3 /*break*/, 5];
                            case 'delete': return [3 /*break*/, 7];
                            case 'put': return [3 /*break*/, 9];
                            case 'patch': return [3 /*break*/, 11];
                            case 'options': return [3 /*break*/, 13];
                            case 'head': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 17];
                    case 3: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('g')];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 5: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('p')];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 7: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('t')];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 9: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('m')];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 11: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('o')];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 13: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('q')];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 15: return [4 /*yield*/, this.taskPage.requestHttpType.sendKeys('q')];
                    case 16:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 17:
                        ;
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.urlHttpField), 4000)];
                    case 18:
                        _b.sent();
                        return [4 /*yield*/, this.taskPage.urlHttpField.clear()];
                    case 19:
                        _b.sent();
                        return [4 /*yield*/, this.taskPage.urlHttpField.sendKeys(urlInfo)];
                    case 20:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 21:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.taskPage.taskTabs, 'Details')).click()];
                    case 22:
                        _b.sent();
                        return [4 /*yield*/, this.debugRunTask()];
                    case 23:
                        _b.sent();
                        //waiting for process to run and finish
                        return [4 /*yield*/, this.checkRunResult()];
                    case 24:
                        //waiting for process to run and finish
                        _b.sent();
                        return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 25:
                        _b.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Tasks')];
                    case 26:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //create a new task
    TaskModule.prototype.createTask = function (taskName, typeOftask) {
        return __awaiter(this, void 0, void 0, function () {
            var taskCode, taskNameNew, taskDesc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskCode = 'qa ' + this.continuumCommonModule.generateRandomNumber();
                        taskNameNew = taskName + this.continuumCommonModule.generateRandomNumber();
                        taskDesc = typeOftask + ' test';
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.addNewTaskButton), 5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.addNewTaskButton.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.saveTaskButton), 5000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.taskCodeField.sendKeys(taskCode)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.taskNameField.sendKeys(taskNameNew)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.taskDescriptionField.sendKeys(taskDesc)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.saveTaskButton.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.debugStopButton), 5000)];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //copies the first task in the task list into a new one
    TaskModule.prototype.copyTask = function (taskName) {
        return __awaiter(this, void 0, void 0, function () {
            var newCode, newName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCode = 'QA-' + this.continuumCommonModule.generateRandomNumber();
                        newName = 'Task Copied - ' + this.continuumCommonModule.generateRandomNumber();
                        return [4 /*yield*/, console.log(newName)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.selectTaskbyName(taskName)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.copyTaskButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.newTaskCode), 4000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.newTaskCode.sendKeys(newCode)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.newTaskName.sendKeys(newName)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.copyTaskSaveButton.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.invisibilityOf(this.taskPage.messageDialog), 4000)];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //exports and imports a task 
    TaskModule.prototype.exportandImportTask = function (taskName) {
        return __awaiter(this, void 0, void 0, function () {
            var lin2xml;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, console.log(taskName)];
                    case 1:
                        _a.sent();
                        lin2xml = '';
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.taskCheckBox), 4000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.selectTaskbyName(taskName)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.exportTaskButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.exportTaskDialogBtn), 4000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.includeAllCheckBox)).toBeTruthy()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.exportTaskDialogBtn)).toBeTruthy()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.closeBtnExportTaskDialog)).toBeTruthy()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.exportTaskDialogBtn.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.linkToExportedTask)).toBeTruthy()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.closeExportLinkDialog), 4000)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.linkToExportedTask.getAttribute('href').then(function (fileLink) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.taskPage.closeExportLinkDialog.click()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, this.importTask(fileLink)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //imports a task using the url created at the export task
    TaskModule.prototype.importTask = function (link2xml) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.importTaskButton), 4000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.importTaskButton.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.uploadButton)).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.taskPage.importTextArea)).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.importButton)).toBeTruthy()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.conflicrResolutionOptions)).toBeTruthy()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.conflicrResolutionOptions.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.taskPage.listOfConflictResolOptions)).toBeTruthy()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.conflicrResolutionOptions.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.uploadButton.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.taskPage.chooseFileButton)).toBeTruthy()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.taskPage.fileNameInputField)).toBeTruthy()];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.taskPage.fromURLField)).toBeTruthy()];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.continueButton)).toBeTruthy()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.fromURLField.sendKeys(link2xml)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.continueButton)).toBeTruthy()];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.continueButton.click()];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.importTextArea.getText()).toContain('<tasks>')];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.importButton.click()];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.successMessage), 4000)];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.messageDialog.getText()).toContain('Success')];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.invisibilityOf(this.taskPage.successMessage), 4000)];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Tasks')];
                    case 25:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //deletes the first task in the task list
    TaskModule.prototype.deleteTask = function (taskName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Tasks')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.selectTaskbyName(taskName)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.deleteTaskButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.dialogTaskDeleteButton), 4000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.deleteTaskwithHistoryBox)).toBeTruthy()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.dialogTaskDeleteButton)).toBeTruthy()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.elementToBeClickable(this.taskPage.closeBtnDeleteTaskDialog)).toBeTruthy()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.deleteTaskwithHistoryBox.click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.dialogTaskDeleteButton.click()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, expect(protractor_1.ExpectedConditions.presenceOf(this.taskPage.messageDialog)).toBeTruthy()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Used to add a command from the command list to the Code area at the task edit page
    //two parameters: 
    //   - category name as listed at the command tab page 
    //   - command name inside the command category
    TaskModule.prototype.addCommand = function (cmdCategory, cmdName) {
        return __awaiter(this, void 0, void 0, function () {
            var commandCategoryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        commandCategoryButton = 'div[class="category"]>div[class="category_header"]>span';
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.taskPage.taskTabs, 'Commands')).click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(commandCategoryButton, cmdCategory)).click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.newConnectionButton), 4000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.dragAndDropItem(cmdName, this.taskPage.stepsSection)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // specific funtion to set a new Connection, listing current types of connection available
    TaskModule.prototype.setNewConnCommand = function (connType, connName, toAsset) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.connNameField), 4000)];
                    case 2:
                        _b.sent();
                        _a = connType;
                        switch (_a) {
                            case 'ssh': return [3 /*break*/, 3];
                            case 'winrm': return [3 /*break*/, 5];
                            case 'telnet': return [3 /*break*/, 7];
                            case 'mysql': return [3 /*break*/, 9];
                            case 'oracle': return [3 /*break*/, 11];
                            case 'sqlserver': return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 3: return [4 /*yield*/, this.taskPage.connSelector.sendKeys('S\n')];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 5: return [4 /*yield*/, this.taskPage.connSelector.sendKeys('w\n')];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 7: return [4 /*yield*/, this.taskPage.connSelector.sendKeys('t\n')];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 9: return [4 /*yield*/, this.taskPage.connSelector.sendKeys('m\n')];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 11: return [4 /*yield*/, this.taskPage.connSelector.sendKeys('o\n')];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, this.taskPage.connSelector.sendKeys('q\n')];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 15:
                        ;
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.connNameField), 4000)];
                    case 16:
                        _b.sent();
                        if (!connName) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.taskPage.connNameField.clear()];
                    case 17:
                        _b.sent();
                        return [4 /*yield*/, this.taskPage.connNameField.sendKeys(connName)];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19:
                        ;
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 20:
                        _b.sent(); //just for FireFox
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.toAssetField), 4000)];
                    case 21:
                        _b.sent();
                        if (!toAsset) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.taskPage.toAssetField.clear()];
                    case 22:
                        _b.sent();
                        return [4 /*yield*/, this.taskPage.toAssetField.sendKeys(toAsset)];
                    case 23:
                        _b.sent();
                        _b.label = 24;
                    case 24:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    // Set variables funtion specific to winrm
    //TODO: set this function to be more generic to create n variables
    TaskModule.prototype.setVariablesCommandData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var varUser, valUser, varServer, valServer, varPassword, valPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _a.sent();
                        varUser = 'user';
                        valUser = 'dev\\continuum-windows';
                        varServer = 'server';
                        valServer = 'lchost-20.dev.corp.versionone.net';
                        varPassword = 'password';
                        valPassword = 'PcfDu7d2El3jaZJYtuQ3';
                        return [4 /*yield*/, this.taskPage.variableField1.sendKeys(varUser)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableValue1.clear()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableValue1.sendKeys(valUser)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.addVariableButton.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.variableField2), 2000)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableField2.sendKeys(varPassword)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableValue2.clear()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableValue2.sendKeys(valPassword)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.addVariableButton.click()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.variableField3), 2000)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableField3.sendKeys(varServer)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableValue3.clear()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.variableValue3.sendKeys(valServer)];
                    case 15:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Selects first task - TODO find a way to select it by name
    TaskModule.prototype.selectTaskbyName = function (taskName) {
        return __awaiter(this, void 0, void 0, function () {
            var taskChkBox;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskChkBox = this.taskPage.taskList;
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(taskChkBox), 2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, taskChkBox.all(protractor_1.by.className('selectable')).getText().then(function (name) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(name = taskName)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, taskChkBox.getAttribute('task_id').then(function (taskId) { return __awaiter(_this, void 0, void 0, function () {
                                                    var checkBoxCSS, checkBox2Click;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                checkBoxCSS = 'input[id="chk_' + taskId + '"]';
                                                                checkBox2Click = protractor_1.element(protractor_1.by.css(checkBoxCSS));
                                                                return [4 /*yield*/, checkBox2Click.click()];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            ;
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
    //Drag and drop fucntion
    //TODO - maybe moving it to the commonModule
    TaskModule.prototype.dragAndDropItem = function (item2Drag, dropHere) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(item2Drag).perform()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.actions().mouseDown(item2Drag).perform()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.actions().mouseMove(dropHere).perform()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.actions().mouseUp().perform()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //function to trigger a debug task run
    TaskModule.prototype.debugRunTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.debugRunTaskButton), 4000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.debugRunTaskButton.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(this.taskPage.runNowButton.isDisplayed, 4000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.taskPage.runNowButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.taskPage.statusField), 4000)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskModule.prototype.checkRunResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var EC;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EC = protractor_1.browser.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.sleep(40000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.taskPage.statusField.getText()).toContain('Completed')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TaskModule;
}());
exports.TaskModule = TaskModule;
