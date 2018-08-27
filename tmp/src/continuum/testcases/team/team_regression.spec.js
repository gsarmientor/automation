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
 * No of Test cases	: 5
 * Purpose			: Team Page Test Cases
 * Create_Date		: 08/07/2018
 * Last Modified	: 08/07/2018
 * Author			: Swatik
 * Developed By		: Swatik
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var path = require('path');
var login_module_po_1 = require("../../pageobjects/login/login_module.po");
var common_module_po_1 = require("../../pageobjects/common/common_module.po");
var common_page_po_1 = require("../../pageobjects/common/common_page.po");
var team_module_po_1 = require("../../pageobjects/team/team_module.po");
describe('Continuum Regression - 4. Team page \n', function () {
    var _this = this;
    var continuumCommonModule;
    var continuumLoginModule;
    var continuumCommonPage;
    var teamModule;
    continuumCommonModule = new common_module_po_1.CommonModule();
    continuumLoginModule = new login_module_po_1.LoginModule();
    continuumCommonPage = new common_page_po_1.CommonPage();
    teamModule = new team_module_po_1.TeamModule();
    var teamName = 'Team' + continuumCommonModule.generateRandomNumber();
    var teamName_new = 'Team' + continuumCommonModule.generateRandomNumber();
    var teamName1, teamDesc1, teamName2, teamDesc2;
    beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.manage().window().maximize()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumLoginModule.get()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Teams')];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("1. Validate elements at Team admin page Create Team", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, teamModule.validateTeamAdminPage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("2. Create Team", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, teamModule.createTeam(teamName, teamName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("3. Validate tabs after Team is created", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, teamModule.validateTeamTabs()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("4. Edit & Update Team1 Data", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    teamName1 = "Team" + continuumCommonModule.generateRandomNumber();
                    teamDesc1 = "Desc" + continuumCommonModule.generateRandomNumber();
                    return [4 /*yield*/, teamModule.editTeam(teamName1, teamDesc1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("5. Create Team2", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Teams')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, teamModule.createTeam(teamName_new, teamName_new)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("6. Edit & Update Team2 Data", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    teamName2 = "Team" + continuumCommonModule.generateRandomNumber();
                    teamDesc2 = "Desc" + continuumCommonModule.generateRandomNumber();
                    return [4 /*yield*/, teamModule.editTeam(teamName2, teamDesc2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumLoginModule.logout()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
