"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 58
 * Purpose			: Project Page Locators
 * Create_Date		: 04/19/2018
 * Last Modified	: 07/10/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var TaskPage = /** @class */ (function () {
    function TaskPage() {
        //Main task page elements
        this.addNewTaskButton = protractor_1.element(protractor_1.by.css('button[id="item_create_btn"]'));
        this.copyTaskButton = protractor_1.element(protractor_1.by.css('button[id="item_copy_btn"]'));
        this.deleteTaskButton = protractor_1.element(protractor_1.by.css('button[id="item_delete_btn"]'));
        this.exportTaskButton = protractor_1.element(protractor_1.by.css('button[id="item_export_btn"]'));
        this.importTaskButton = protractor_1.element(protractor_1.by.css('button[id="import_item_btn"]'));
        this.filterTaskField = protractor_1.element(protractor_1.by.css('input[id="txtSearch"]'));
        this.checkAllTasksBox = protractor_1.element(protractor_1.by.css('input[class="chkbox"]'));
        this.taskList = protractor_1.element(protractor_1.by.css('tbody[id="tasks"]>tr'));
        this.taskCheckBox = protractor_1.element(protractor_1.by.css('td[class="chkboxcolumn"]>input[class="chkbox"]'));
        this.messageDialog = protractor_1.element(protractor_1.by.css('div[id="toasts-container"]'));
        this.successMessage = protractor_1.element(protractor_1.by.css('div[id="toasts-container"]>div[class="toast success"]>div[class="content"]>div[class="title"]'));
        //New task dialog elements
        this.taskCodeField = protractor_1.element(protractor_1.by.css('input[id="txtTaskCode"]'));
        this.taskNameField = protractor_1.element(protractor_1.by.css('input[id="txtTaskName"]'));
        this.taskDescriptionField = protractor_1.element(protractor_1.by.css('textarea[id="txtTaskDesc"]'));
        this.saveTaskButton = protractor_1.element(protractor_1.by.css('button[id="edit_dialog_save"]'));
        //Task editing page
        //details tab elements
        this.tabs = ["Details", "Commands", "Clipboard", "Vars"];
        this.taskTabs = "span[class*='divider tab-title']>a";
        this.debugStopButton = protractor_1.element(protractor_1.by.css('button[id="debug_stop_btn"]'));
        this.debugRunTaskButton = protractor_1.element(protractor_1.by.css('button[id="debug_run_btn"]'));
        this.changeLogButton = protractor_1.element(protractor_1.by.css('button[id="show_log_link"]'));
        this.lastRunLogButton = protractor_1.element(protractor_1.by.css('button[id="show_runlog_link"]'));
        //Commands tab elements
        this.functionButton = 'span[class="glyphicon glyphicon-option-vertical forceinline"]>span';
        this.newConnectionButton = protractor_1.element(protractor_1.by.css('div[id="fn_new_connection"]'));
        this.setVariableButton = protractor_1.element(protractor_1.by.css('div[id="fn_set_variable"]'));
        this.stepsSection = protractor_1.element(protractor_1.by.css('div[id="task_steps"]'));
        this.httpCommand = protractor_1.element(protractor_1.by.id('fn_http'));
        //New connection elements
        this.connSelector = protractor_1.element(protractor_1.by.css('select[xpath="conn_type"]'));
        this.connNameField = protractor_1.element(protractor_1.by.css('input[xpath="conn_name"]'));
        this.toAssetField = protractor_1.element(protractor_1.by.css('textarea[class="code is_required"]'));
        //HTTP command elements
        this.requestHttpType = protractor_1.element(protractor_1.by.css('select[function="http"]'));
        this.urlHttpField = protractor_1.element(protractor_1.by.css('textarea[function="http"]'));
        //Set variables elements
        this.addVariableButton = protractor_1.element(protractor_1.by.css('span[title="Add another."]'));
        this.variableField1 = protractor_1.element(protractor_1.by.css('input[xpath="variables/variable[1]/name"]'));
        this.variableField2 = protractor_1.element(protractor_1.by.css('input[xpath="variables/variable[2]/name"]'));
        this.variableField3 = protractor_1.element(protractor_1.by.css('input[xpath="variables/variable[3]/name"]'));
        this.variableValue1 = protractor_1.element(protractor_1.by.css('textarea[xpath="variables/variable[1]/value"]'));
        this.variableValue2 = protractor_1.element(protractor_1.by.css('textarea[xpath="variables/variable[2]/value"]'));
        this.variableValue3 = protractor_1.element(protractor_1.by.css('textarea[xpath="variables/variable[3]/value"]'));
        //Run task dialog elements
        this.runNowButton = protractor_1.element(protractor_1.by.css('span[id="run_now_btn"]'));
        this.statusField = protractor_1.element(protractor_1.by.css('span[id="debug_status"]'));
        //Copy task dialog
        this.newTaskCode = protractor_1.element(protractor_1.by.css('input[id="txtCopyTaskCode"]'));
        this.newTaskName = protractor_1.element(protractor_1.by.css('input[id="txtCopyTaskName"]'));
        this.copyTaskSaveButton = protractor_1.element(protractor_1.by.css('button[id="edit_dialog_copy"]'));
        //Delete task dialog
        this.deleteTaskwithHistoryBox = protractor_1.element(protractor_1.by.css('input[id="delete_dialog_force"]'));
        this.dialogTaskDeleteButton = protractor_1.element(protractor_1.by.css('button[id="dialog_delete_button"]'));
        this.closeBtnDeleteTaskDialog = protractor_1.element(protractor_1.by.css('div[id="delete_dialog"]>a[class="close-reveal-modal"]'));
        //Export task dialog
        this.includeAllCheckBox = protractor_1.element(protractor_1.by.css('input[id="export_dialog_include_refs"]'));
        this.exportTaskDialogBtn = protractor_1.element(protractor_1.by.css('button[id="edit_dialog_export"]'));
        this.closeBtnExportTaskDialog = protractor_1.element(protractor_1.by.css('div[id="export_dialog"]>a[class="close-reveal-modal"]'));
        this.linkToExportedTask = protractor_1.element(protractor_1.by.css('div[class="info"]>a[target="_blank"]'));
        this.closeExportLinkDialog = protractor_1.element(protractor_1.by.css('div[class="close-toast"]'));
        //Import task dialog
        this.uploadButton = protractor_1.element(protractor_1.by.css('button[class="tiny button"]'));
        this.importTextArea = protractor_1.element(protractor_1.by.css('textarea[class="action-input"]'));
        this.conflicrResolutionOptions = protractor_1.element(protractor_1.by.css('div[class="Select-value"]'));
        this.listOfConflictResolOptions = protractor_1.element(protractor_1.by.css('div[class="Select-menu-outer"]'));
        this.importButton = protractor_1.element(protractor_1.by.css('button[class="tiny button right import-button"]'));
        //Updload from url dialog
        this.chooseFileButton = protractor_1.element(protractor_1.by.css('button[class=["tiny button file-chooser"]'));
        this.fileNameInputField = protractor_1.element(protractor_1.by.css('input[id="importFileNameInput"]'));
        this.fromURLField = protractor_1.element(protractor_1.by.css('input[class="choose-url"]'));
        this.continueButton = protractor_1.element(protractor_1.by.css('div[class="load-data"]>div[class="load-button-wrapper"]>button[class="tiny button"]'));
    }
    return TaskPage;
}());
exports.TaskPage = TaskPage;
