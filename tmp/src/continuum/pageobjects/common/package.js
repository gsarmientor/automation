"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_module_po_1 = require("../../pageobjects/login/login_module.po");
var login_page_po_1 = require("../../pageobjects/login/login_page.po");
var common_module_po_1 = require("../../pageobjects/common/common_module.po");
var common_page_po_1 = require("../../pageobjects/common/common_page.po");
var package_page_po_1 = require("../../pageobjects/package/package_page.po");
var package_module_po_1 = require("../../pageobjects/package/package_module.po");
var pipeline_module_po_1 = require("../../pageobjects/pipeline/pipeline_module.po");
var pipeline_page_po_1 = require("../../pageobjects/pipeline/pipeline_page.po");
var progression_module_po_1 = require("../../pageobjects/progression/progression_module.po");
var progression_page_po_1 = require("../../pageobjects/progression/progression_page.po");
var project_module_po_1 = require("../../pageobjects/project/project_module.po");
var project_page_po_1 = require("../../pageobjects/project/project_page.po");
var task_module_po_1 = require("../../pageobjects/task/task_module.po");
var task_page_po_1 = require("../../pageobjects/task/task_page.po");
var team_module_po_1 = require("../../pageobjects/team/team_module.po");
var team_page_po_1 = require("../../pageobjects/team/team_page.po");
var objpackages = /** @class */ (function () {
    function objpackages() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumLoginModule = new login_module_po_1.LoginModule();
        this.continuumLoginPage = new login_page_po_1.LoginPage();
        this.cnCommonModule = new common_module_po_1.CommonModule();
        this.cnPackagePage = new package_page_po_1.PackagePage();
        this.cnPackageModule = new package_module_po_1.PackageModule();
        this.cnPipelinePage = new pipeline_page_po_1.PipelinePage();
        this.cnPipelineModule = new pipeline_module_po_1.PipelineModule();
        this.cnProgressionModule = new progression_module_po_1.ProgressionModule();
        this.cnProgressionPage = new progression_page_po_1.ProgressionPage();
        this.cnProjectModule = new project_module_po_1.ProjectModule();
        this.cnProjectPage = new project_page_po_1.ProjectPage();
        this.cnTaskModule = new task_module_po_1.TaskModule();
        this.cnTaskPage = new task_page_po_1.TaskPage();
        this.cnTeamPage = new team_page_po_1.TeamPage();
        this.cnTeamModule = new team_module_po_1.TeamModule();
    }
    return objpackages;
}());
exports.objpackages = objpackages;