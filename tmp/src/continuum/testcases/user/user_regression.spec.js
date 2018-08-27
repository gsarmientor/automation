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
 * No of Test cases	: 1
 * Purpose			: User Page Test Cases
 * Create_Date		: 08/06/2018
 * Last Modified	: 08/06/2018
 * Author			: Venkat Thandi Sivagangai
 * Developed By		: Venkat Thandi Sivagangai
 * Reviewed By		: Murali Yalamandala
 ======================================================================*/
var protractor_1 = require("protractor");
var path = require('path');
var package_1 = require("../../pageobjects/common/package");
var conf_1 = require("../../../../conf");
var params = protractor_1.browser.params;
describe('Continuum Regression - 1. Login Test suite', function () {
    var _this = this;
    var obj = new package_1.objpackages();
    var continuumCommonPage = obj.continuumCommonPage;
    var continuumCommonModule = obj.cnCommonModule;
    var continuumLoginModule = obj.continuumLoginModule;
    var continuumUserPage = obj.cnUserPage;
    var continuumUserModule = obj.cnUserModule;
    var projectModule = obj.cnProjectModule;
    var progressionModule = obj.cnProgressionModule;
    var packageModule = obj.cnPackageModule;
    //let continuumTeamPage=obj.cnTeamPage();
    var continuumTeamModule = obj.cnTeamModule;
    var ProjectPage = obj.cnProjectPage;
    protractor_1.browser.manage().window().maximize();
    protractor_1.browser.waitForAngularEnabled(false);
    var strUserID = "";
    var teamName, rndNum;
    var teamName_new;
    var teamName1, teamDesc1, teamName2, teamDesc2;
    var projectTypeGen = 'Source';
    var projectNameManualGen;
    var projectNamePartI = 'E2E ';
    var webhook, url;
    beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumLoginModule.get()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("1. Validate elements at Team admin page Create Team", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rndNum = continuumCommonModule.generateRandomChar();
                    teamName = 'Team' + rndNum;
                    teamName_new = 'Team' + rndNum;
                    projectNameManualGen = projectNamePartI + rndNum;
                    return [4 /*yield*/, continuumLoginModule.login(params.username, params.password)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Teams')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, continuumTeamModule.validateTeamAdminPage()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("2. Create Team", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumTeamModule.createTeam(teamName, teamName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("3. Validate tabs after Team is created", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumTeamModule.validateTeamTabs()];
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
                    teamName1 = "Team1" + rndNum;
                    teamDesc1 = "Desc" + rndNum;
                    return [4 /*yield*/, continuumTeamModule.editTeam(teamName1, teamDesc1)];
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
                    return [4 /*yield*/, continuumTeamModule.createTeam(teamName_new, teamName_new)];
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
                    teamName2 = "Team2" + rndNum;
                    teamDesc2 = "Desc" + rndNum;
                    return [4 /*yield*/, continuumTeamModule.editTeam(teamName2, teamDesc2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('7. should validate elements at User Edit Page', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu("Users")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumUserModule.validateUserEditPage()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('8. should validate admin can create user', function () { return __awaiter(_this, void 0, void 0, function () {
        var myRand;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumUserPage.btnAddUser.click()];
                case 1:
                    _a.sent();
                    myRand = continuumCommonModule.generateRandomChar();
                    strUserID = "AutoId" + myRand;
                    return [4 /*yield*/, protractor_1.browser.executeScript("window.scrollBy(0,1000)")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(continuumUserPage.txtUserLoginId), 1000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtUserLoginId.sendKeys(strUserID)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtUserFullName.sendKeys("AutoFullName" + myRand)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtUserEmail.sendKeys("email" + myRand + "@versionone.com")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.lstUserStatus.element(protractor_1.by.cssContainingText('option', 'Enabled')).click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.lstUserRole.element(protractor_1.by.cssContainingText('option', 'Administrator')).click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.chkBoxAdmin.click()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.dropDownUserAuth.element(protractor_1.by.cssContainingText('option', 'local')).click()];
                case 11:
                    _a.sent();
                    //await continuumUserPage.chkBoxGenPwd.click();
                    return [4 /*yield*/, continuumUserPage.ddTeamSelecter1.sendKeys(teamName1)];
                case 12:
                    //await continuumUserPage.chkBoxGenPwd.click();
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddTeamOption1.click()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddUserRole1.click()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddUserRoleTeamAdministratorOption1.click()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.linkAddTeam.click()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddTeamSelecter2.sendKeys(teamName2)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddTeamOption2.click()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddUserRole2.click()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.ddUserRoleDeveloperOption2.click()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(continuumUserPage.txtUserPwd, { x: 0, y: 0 }).perform()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtUserPwd.sendKeys('Collabnet1!')];
                case 22:
                    _a.sent();
                    //await browser.executeScript("arguments[0].setAttribute('value', 'Collabnet1!')", continuumUserPage.txtUserPwd.getWebElement());
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(continuumUserPage.txtUserPwdCnfm, { x: 0, y: 0 }).perform()];
                case 23:
                    //await browser.executeScript("arguments[0].setAttribute('value', 'Collabnet1!')", continuumUserPage.txtUserPwd.getWebElement());
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtUserPwdCnfm.sendKeys('Collabnet1!')];
                case 24:
                    _a.sent();
                    //await browser.executeScript("arguments[0].setAttribute('value', 'Collabnet1!')", continuumUserPage.txtUserPwdCnfm.getWebElement());
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(continuumUserPage.chkBoxForcePwdChg, { x: 0, y: 0 }).perform()];
                case 25:
                    //await browser.executeScript("arguments[0].setAttribute('value', 'Collabnet1!')", continuumUserPage.txtUserPwdCnfm.getWebElement());
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', continuumUserPage.chkBoxForcePwdChg.getWebElement())];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(continuumUserPage.dateExpiration, { x: 0, y: 0 }).perform()];
                case 27:
                    _a.sent();
                    //await browser.executeScript("arguments[0].setAttribute('value', '08/01/2019')", continuumUserPage.dateExpiration.getWebElement());
                    //await continuumUserPage.dateExpiration.sendKeys('09/01/2020');
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(continuumUserPage.btnSave, { x: 0, y: 0 }).perform()];
                case 28:
                    //await browser.executeScript("arguments[0].setAttribute('value', '08/01/2019')", continuumUserPage.dateExpiration.getWebElement());
                    //await continuumUserPage.dateExpiration.sendKeys('09/01/2020');
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', continuumUserPage.btnSave.getWebElement())];
                case 29:
                    _a.sent();
                    console.log("User ID = " + strUserID);
                    return [2 /*return*/];
            }
        });
    }); });
    it('9. Verify user details appears on user list page', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.navigate().refresh()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(continuumUserPage.txtFilterUser), 1000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtFilterUser.sendKeys(strUserID)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, continuumUserPage.txtFilterUser.sendKeys(protractor_1.protractor.Key.ENTER)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(continuumUserPage.tblUser.getText()).toContain(strUserID)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('10. Verify user is able to login the application', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumLoginModule.logout()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumLoginModule.login(strUserID, "Collabnet1!")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('11. create new project Manually with General type', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Projects')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, projectModule.createNewProject("Manually", projectNameManualGen, teamName1, "Manual")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, projectModule.setSourceTypetoNewProject(projectNameManualGen, projectTypeGen)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("12. Add new Progression", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Progressions')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, progressionModule.addProgression(continuumCommonPage.progName, continuumCommonPage.progDesc)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, progressionModule.addPhase(continuumCommonPage.phaseName1, continuumCommonPage.phaseDescr1)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, progressionModule.addPhase(continuumCommonPage.phaseName2, continuumCommonPage.phaseDescr2)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("13. Add new Packages", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Packages')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, packageModule.addPackage(teamName1, continuumCommonPage.pckgName, continuumCommonPage.pckgDesc)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, packageModule.selectPackage(continuumCommonPage.pckgName)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, packageModule.associateProgression(continuumCommonPage.progName)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("14. Adding the Source and Directives", function () { return __awaiter(_this, void 0, void 0, function () {
        var pipevar, pipevar, pipevar, pipevar, pipevar, pipevar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Projects')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, projectModule.selectProject(projectNameManualGen)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, ProjectPage.sourceTab.click()];
                case 6:
                    _a.sent();
                    ;
                    return [4 /*yield*/, continuumCommonModule.selectFromDropdown("select#source_type", "TeamForge Git Webhook")];
                case 7:
                    _a.sent();
                    //await ProjectPage.useGrpLookup.click();
                    return [4 /*yield*/, ProjectPage.useGrpBranch.click()];
                case 8:
                    //await ProjectPage.useGrpLookup.click();
                    _a.sent();
                    return [4 /*yield*/, ProjectPage.btnCreateDirective.click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.pageScrollDown(500, 800)];
                case 10:
                    _a.sent();
                    pipevar = protractor_1.element.all(protractor_1.by.css('.action-header')).get(0);
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(pipevar, { x: 0, y: 0 }).perform()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', pipevar.getWebElement())];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-4--value-item']")).click()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-4--option-4']")).click()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, ProjectPage.btnCreateDirective.click()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.pageScrollDown(500, 1600)];
                case 17:
                    _a.sent();
                    pipevar = protractor_1.element.all(protractor_1.by.css('.action-header')).get(1);
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(pipevar, { x: 0, y: 0 }).perform()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', pipevar.getWebElement())];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("#react-select-7--value-item")).click()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-7--option-7']")).click()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("[name='package_name']")).sendKeys(continuumCommonPage.pckgName)];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("[name='phase']")).sendKeys("Build")];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.pageScrollDown(50, 100)];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, ProjectPage.btnCreateDirective.click()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.pageScrollDown(500, 2400)];
                case 27:
                    _a.sent();
                    pipevar = protractor_1.element.all(protractor_1.by.css('.action-header')).get(2);
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(pipevar, { x: 0, y: 0 }).perform()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', pipevar.getWebElement())];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[name='definition']")).sendKeys("AutomationPipeline")];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[name='group']")).sendKeys("[$ branch $]")];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[name='project']")).sendKeys(projectNameManualGen)];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 33:
                    _a.sent();
                    pipevar = protractor_1.element.all(protractor_1.by.css('.action-header')).get(2);
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(pipevar, { x: 0, y: 0 }).perform()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', pipevar.getWebElement())];
                case 35:
                    _a.sent();
                    pipevar = protractor_1.element.all(protractor_1.by.css('.action-header')).get(1);
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(pipevar, { x: 0, y: 0 }).perform()];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', pipevar.getWebElement())];
                case 37:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.pageScrollDown(0, 500)];
                case 38:
                    _a.sent();
                    pipevar = protractor_1.element(protractor_1.by.css('button#save_btn'));
                    return [4 /*yield*/, protractor_1.browser.actions().mouseMove(pipevar, { x: 0, y: 0 }).perform()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript('arguments[0].click()', pipevar.getWebElement())];
                case 40:
                    _a.sent();
                    // await element(by.css('button#save_btn')).click();
                    return [4 /*yield*/, protractor_1.browser.sleep(10000)];
                case 41:
                    // await element(by.css('button#save_btn')).click();
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("15. Validate webhooks functionality", function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Projects')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css('#projects .Select input')).sendKeys(projectNameManualGen).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText("Source")).click()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css('select#source_type')).sendKeys("TeamForge Git Webhook")];
                case 8:
                    _a.sent();
                    url = conf_1.config.CTMHostUrl + 'api/submit_change?toproject=' + projectNameManualGen + '&token=' + '';
                    /*         await element(by.css('input#webhook_url')).getAttribute("innerText").then(function (content)
                        {
                            console.log("Content = " + content);
                            console.log("Url = " + url);
                            webhook=content;
                        }); */
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css('input#notify_unmanaged_addl')).click()];
                case 9:
                    /*         await element(by.css('input#webhook_url')).getAttribute("innerText").then(function (content)
                        {
                            console.log("Content = " + content);
                            console.log("Url = " + url);
                            webhook=content;
                        }); */
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css(".important-button")).click()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("li.button-menu span.icon-button span.svg-icon.icon-member.undefined")).click()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("li#myAccount")).click()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("div.holly-container span#copy_token")).click()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("div.holly-container span#api_token")).getText()];
                case 17:
                    webhook = _a.sent();
                    url = url + webhook;
                    console.log("Webhook URL = " + url);
                    return [4 /*yield*/, continuumLoginModule.logout()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("16. Login to Teamforge", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get("https://cu135.cloud.maa.collab.net/")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.linkText("Log In"))), 6000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input#username")).sendKeys("admin")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input#pwd")).sendKeys("admin")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText("Log In")).click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.linkText("ContinuumProject"))), 6000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText("continuum_automation")).click()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.linkText("SETTINGS"))), 6000)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText("SETTINGS")).click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText("Policies")).click()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input#newWebhookUrl[bundle='code']")).sendKeys(url)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("button[bundle='code']")).click()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.pageScrollDown(0, -1000)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("button[value='Save']")).click()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); });
});
