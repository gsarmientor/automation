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
 * Purpose			: End-to-End Test Case
 * Create_Date		: 02/18/2018
 * Last Modified	: 07/06/2018
 * Author			: Rino van Dam
 * Developed By		: Rino van Dam, Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var path = require('path');
var login_module_po_1 = require("../../pageobjects/login/login_module.po");
var common_module_po_1 = require("../../pageobjects/common/common_module.po");
var common_page_po_1 = require("../../pageobjects/common/common_page.po");
var project_module_po_1 = require("../../pageobjects/project/project_module.po");
var package_module_po_1 = require("../../pageobjects/package/package_module.po");
var progression_module_po_1 = require("../../pageobjects/progression/progression_module.po");
var progression_page_po_1 = require("../../pageobjects/progression/progression_page.po");
var project_page_po_1 = require("../../pageobjects/project/project_page.po");
describe('Continuum End-to-End: Set up Configuration \n', function () {
    var _this = this;
    var continuumCommonModule;
    var continuumLoginModule;
    var projectModule;
    var progressionModule;
    var progressionPage;
    var packageModule;
    var continuumCommonPage;
    var projectPage;
    protractor_1.browser.manage().window().maximize();
    protractor_1.browser.waitForAngularEnabled(false);
    continuumCommonModule = new common_module_po_1.CommonModule();
    continuumCommonPage = new common_page_po_1.CommonPage();
    continuumLoginModule = new login_module_po_1.LoginModule();
    projectModule = new project_module_po_1.ProjectModule();
    progressionModule = new progression_module_po_1.ProgressionModule();
    progressionPage = new progression_page_po_1.ProgressionPage();
    packageModule = new package_module_po_1.PackageModule();
    projectPage = new project_page_po_1.ProjectPage();
    var testCounter = Math.floor(1 + Math.random() * 1000);
    // Log in
    it("E2E: 1. Log in to the application", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumLoginModule.get()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumLoginModule.login(continuumCommonPage.testUser, continuumCommonPage.testPwd)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Create a Progression
    it("E2E: 2. Add new Progression", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Progressions')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, console.log("Progression Name: " + continuumCommonPage.progName)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, progressionModule.addProgression(continuumCommonPage.progName, continuumCommonPage.progDesc)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(progressionPage.progressionName, continuumCommonPage.progName), 3000)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(progressionPage.progressionName.getText()).toContain(continuumCommonPage.progName)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //  Add Phases
    it("E2E: 3. Add Phases to Progression", function () { return __awaiter(_this, void 0, void 0, function () {
        var addedPhases;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, progressionModule.selectProgression(continuumCommonPage.progName)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, progressionModule.addPhase(continuumCommonPage.phaseName1, continuumCommonPage.phaseDescr1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, progressionModule.addPhase(continuumCommonPage.phaseName2, continuumCommonPage.phaseDescr2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css('tr>td[class="nowrap"]')).getText()];
                case 4:
                    addedPhases = _a.sent();
                    return [4 /*yield*/, expect(addedPhases).toContain(continuumCommonPage.phaseName2)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Create Project (manually)
    it('E2E: 4. Create New project with Source type', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, console.log("Project Name: " + continuumCommonPage.projectNameManual)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Projects')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, projectModule.createNewProject("Manually", continuumCommonPage.projectNameManual, "DEFAULT", "Manual")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, projectModule.setSourceTypetoNewProject(continuumCommonPage.projectNameManual, continuumCommonPage.projectType)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, projectModule.setSourceType(continuumCommonPage.projectSource)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Create Artifact on Project
    it('E2E: 5. Create Artifact on Project', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, console.log("Artifact Name: " + continuumCommonPage.projectArtifact)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, projectModule.addArtifact(continuumCommonPage.projectArtifact)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Create a Package
    it("E2E: 6. Create Package", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, continuumCommonModule.clickAdminButton()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, continuumCommonModule.selectItemfromAdminMenu('Packages')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, console.log("Package Name: " + continuumCommonPage.pckgName)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, packageModule.addPackage("DEFAULT", continuumCommonPage.pckgName, continuumCommonPage.pckgDesc)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Associate an Artifact with the Package
    it("E2E: 7. Associate the Artifact with the Package", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, packageModule.associateArtifact(continuumCommonPage.projectNameManual, continuumCommonPage.projectArtifact)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Associate a Progression with the Package
    it("E2E: 8. Associate the Progression with the Package", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, packageModule.associateProgression(continuumCommonPage.progName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
