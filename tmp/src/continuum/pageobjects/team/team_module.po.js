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
 * Purpose			: Team Page functions
 * Create_Date		: 08/06/2018
 * Last Modified	: 08/06/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var team_page_po_1 = require("../team/team_page.po");
var TeamModule = /** @class */ (function () {
    function TeamModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.teamPage = new team_page_po_1.TeamPage();
    }
    //validates elements at the task admin page
    TeamModule.prototype.validateTeamAdminPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.teamPage.addTeam.isDisplayed()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.teamPage.ddViewTeam.isDisplayed()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.teamPage.ddTopTeam.isDisplayed()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamModule.prototype.createTeam = function (teamName, teamDesc) {
        return __awaiter(this, void 0, void 0, function () {
            var teamName1, teamDesc1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamName1 = teamName + this.continuumCommonModule.generateRandomNumber();
                        teamDesc1 = teamDesc + this.continuumCommonModule.generateRandomNumber();
                        return [4 /*yield*/, this.teamPage.addTeam.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.teamPage.teamSave), 3000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamName.sendKeys(teamName1)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamDesc.sendKeys(teamDesc1)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamSave.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.teamPage.teamDetails), 3000)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamModule.prototype.validateTeamTabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.teamPage.teamDetails.isDisplayed()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.teamPage.teamUsers.isDisplayed()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.teamPage.teamProjects.isDisplayed()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.teamPage.teamPipelines.isDisplayed()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamUsers.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamProjects.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamPackages.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamPipelines.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamDetails.click()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamModule.prototype.editTeam = function (teamName, teamDesc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //    let temp = 'qa ' + this.continuumCommonModule.generateRandomNumber();
                    return [4 /*yield*/, this.teamPage.teamName.clear()];
                    case 1:
                        //    let temp = 'qa ' + this.continuumCommonModule.generateRandomNumber();
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamName.sendKeys(teamName)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamDesc.clear()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamDesc.sendKeys(teamDesc)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.teamPage.teamEditSave), 3000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.teamPage.teamEditSave.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.teamPage.teamDetails), 3000)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TeamModule;
}());
exports.TeamModule = TeamModule;
