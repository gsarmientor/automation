/*====================================================================
 * No of Locators	: 58
 * Purpose			: Project Page Locators
 * Create_Date		: 04/19/2018
 * Last Modified	: 07/10/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino Van Dam
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class TaskPage {
    //Main task page elements
    addNewTaskButton = element(by.css('button[id="item_create_btn"]'));
    copyTaskButton = element(by.css('button[id="item_copy_btn"]'));
    deleteTaskButton = element(by.css('button[id="item_delete_btn"]'));
    exportTaskButton = element(by.css('button[id="item_export_btn"]'));
    importTaskButton = element(by.css('button[id="import_item_btn"]'));
    filterTaskField = element(by.css('input[id="txtSearch"]'));
    checkAllTasksBox = element(by.css('input[class="chkbox"]'));
    taskList = element(by.css('tbody[id="tasks"]>tr'));
    taskCheckBox = element(by.css('td[class="chkboxcolumn"]>input[class="chkbox"]'));
    messageDialog = element(by.css('div[id="toasts-container"]'));
    successMessage = element(by.css('div[id="toasts-container"]>div[class="toast success"]>div[class="content"]>div[class="title"]'));

    //New task dialog elements
    taskCodeField = element(by.css('input[id="txtTaskCode"]'));
    taskNameField = element(by.css('input[id="txtTaskName"]'));
    taskDescriptionField = element(by.css('textarea[id="txtTaskDesc"]'));
    saveTaskButton = element(by.css('button[id="edit_dialog_save"]'));

    //Task editing page
      //details tab elements
    tabs = ["Details", "Commands", "Clipboard", "Vars"];
    taskTabs = "span[class*='divider tab-title']>a";
    debugStopButton = element(by.css('button[id="debug_stop_btn"]'));
    debugRunTaskButton = element(by.css('button[id="debug_run_btn"]'));
    changeLogButton = element(by.css('button[id="show_log_link"]'));
    lastRunLogButton = element(by.css('button[id="show_runlog_link"]'));

      //Commands tab elements
    functionButton = 'span[class="glyphicon glyphicon-option-vertical forceinline"]>span';
    newConnectionButton = element(by.css('div[id="fn_new_connection"]'));
    setVariableButton = element(by.css('div[id="fn_set_variable"]'));
    stepsSection = element(by.css('div[id="task_steps"]'));
    httpCommand = element(by.id('fn_http'));

      //New connection elements
    connSelector = element(by.css('select[xpath="conn_type"]'));
    connNameField = element(by.css('input[xpath="conn_name"]'));
    toAssetField = element(by.css('textarea[class="code is_required"]'));

      //HTTP command elements
    requestHttpType = element(by.css('select[function="http"]'));
    urlHttpField = element(by.css('textarea[function="http"]'));

      //Set variables elements
    addVariableButton = element(by.css('span[title="Add another."]')); 
    variableField1 = element(by.css('input[xpath="variables/variable[1]/name"]'));
    variableField2 = element(by.css('input[xpath="variables/variable[2]/name"]'));
    variableField3 = element(by.css('input[xpath="variables/variable[3]/name"]'));
    variableValue1 = element(by.css('textarea[xpath="variables/variable[1]/value"]'));
    variableValue2 = element(by.css('textarea[xpath="variables/variable[2]/value"]'));
    variableValue3 = element(by.css('textarea[xpath="variables/variable[3]/value"]')); 
    
      //Run task dialog elements
    runNowButton = element(by.css('span[id="run_now_btn"]'));
    statusField = element(by.css('span[id="debug_status"]'));

      //Copy task dialog
    newTaskCode = element(by.css('input[id="txtCopyTaskCode"]'));
    newTaskName = element(by.css('input[id="txtCopyTaskName"]'));
    copyTaskSaveButton = element(by.css('button[id="edit_dialog_copy"]'));

      //Delete task dialog
    deleteTaskwithHistoryBox = element(by.css('input[id="delete_dialog_force"]'));
    dialogTaskDeleteButton = element(by.css('button[id="dialog_delete_button"]'));
    closeBtnDeleteTaskDialog = element(by.css('div[id="delete_dialog"]>a[class="close-reveal-modal"]'));

      //Export task dialog
    includeAllCheckBox = element(by.css('input[id="export_dialog_include_refs"]'));
    exportTaskDialogBtn = element(by.css('button[id="edit_dialog_export"]'));
    closeBtnExportTaskDialog = element(by.css('div[id="export_dialog"]>a[class="close-reveal-modal"]'));
    linkToExportedTask = element(by.css('div[class="info"]>a[target="_blank"]'));
    closeExportLinkDialog = element(by.css('div[class="close-toast"]'));

      //Import task dialog
    uploadButton = element(by.css('button[class="tiny button"]'));
    importTextArea = element(by.css('textarea[class="action-input"]'));
    conflicrResolutionOptions = element(by.css('div[class="Select-value"]'));
    listOfConflictResolOptions = element(by.css('div[class="Select-menu-outer"]'));
    importButton = element(by.css('button[class="tiny button right import-button"]'));

      //Updload from url dialog
    chooseFileButton = element(by.css('button[class=["tiny button file-chooser"]'));
    fileNameInputField = element(by.css('input[id="importFileNameInput"]'));
    fromURLField = element(by.css('input[class="choose-url"]'));
    continueButton = element(by.css('div[class="load-data"]>div[class="load-button-wrapper"]>button[class="tiny button"]')); 
 }