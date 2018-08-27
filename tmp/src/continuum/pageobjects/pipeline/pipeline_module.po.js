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
 * No of Functions	: 2
 * Purpose			: Pipeline Page functions
 * Create_Date		: 12/04/2018
 * Last Modified	: 05/07/2018
 * Author			: Nithya Pattabiraman
 * Developed By		: Nithya Pattabiraman, Gustavo Sarmiento
 * Reviewed By		: Gustavo Sarmiento
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var pipeline_page_po_1 = require("../pipeline/pipeline_page.po");
var until = protractor_1.protractor.ExpectedConditions;
var PipelineModule = /** @class */ (function () {
    function PipelineModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.continuumPipelinePage = new pipeline_page_po_1.PipelinePage();
    }
    // This method enables creation of a new Package
    PipelineModule.prototype.addPipeline = function (pipelineNewName, pipelineNewDescription) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.continuumPipelinePage.btAddPipeline), 15000, "Add pipeline is not loaded")];
                    case 1:
                        _a.sent();
                        // Wait for, then click on the 'Add New' button
                        return [4 /*yield*/, this.continuumPipelinePage.btAddPipeline.click()];
                    case 2:
                        // Wait for, then click on the 'Add New' button
                        _a.sent();
                        // Wait for the dialog, then...
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        // Wait for the dialog, then...
                        _a.sent();
                        // ..enter Name and Description
                        return [4 /*yield*/, this.continuumPipelinePage.sPipelineName.sendKeys(pipelineNewName)];
                    case 4:
                        // ..enter Name and Description
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.continuumPipelinePage.sPipelineDesc.sendKeys(pipelineNewDescription)];
                    case 6:
                        _a.sent();
                        // ..click the 'Create' button
                        return [4 /*yield*/, this.continuumPipelinePage.btCreatePipeline.click()];
                    case 7:
                        // ..click the 'Create' button
                        _a.sent();
                        //Wait for the page to load
                        return [4 /*yield*/, protractor_1.browser.sleep(10000)];
                    case 8:
                        //Wait for the page to load
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PipelineModule.prototype.linkProject = function (projectName) {
        return __awaiter(this, void 0, void 0, function () {
            var value1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumPipelinePage.tabDebug.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.continuumPipelinePage.sProject), 5000, "sProject is not loaded")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.continuumPipelinePage.sProject.sendKeys(projectName)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.continuumPipelinePage.autoddSelection), 5000, "autodd is not loaded")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.continuumPipelinePage.autoddSelection.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(protractor_1.element(protractor_1.by.id("save_btn"))), 5000, "save is not loaded")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.id("save_btn")).click()];
                    case 7:
                        _a.sent();
                        value1 = this.continuumPipelinePage.sProject.getAttribute("value");
                        return [4 /*yield*/, value1.then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, console.log("Need to validate as  = ", value)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, expect(value).toContain(projectName)];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PipelineModule;
}());
exports.PipelineModule = PipelineModule;
