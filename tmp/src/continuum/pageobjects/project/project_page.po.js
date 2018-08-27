"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 73
 * Purpose			: Project Page Locators
 * Create_Date		: 01/31/2018
 * Last Modified	: 06/26/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var ProjectPage = /** @class */ (function () {
    function ProjectPage() {
        //Main project page elements
        this.projectDescriptionField = protractor_1.element(protractor_1.by.css('textarea[id="project_desc"]'));
        this.activeProject = protractor_1.element(protractor_1.by.css('li[class="panel pointer libitem active"]'));
        this.copyProjectBtn = protractor_1.element(protractor_1.by.css('button[class="standard-button"]'));
        this.newProjectButton = protractor_1.element(protractor_1.by.css('button[class="button tiny"]'));
        this.projectNameList = 'li[class="panel pointer libitem"]';
        this.projectType = 'select[id="project_type"]';
        this.projectTypeOption = 'option[value="';
        this.projectTabs = "li[class*='divider tab-title']>a";
        this.sourceType = "select#source_type";
        this.addNewArtifactButton = protractor_1.element(protractor_1.by.id("new_art"));
        this.copyProjectName = protractor_1.element(protractor_1.by.css('input[id="copy_proj_name"]'));
        this.copyProjectBtnatModal = protractor_1.element(protractor_1.by.css('div[id="copy_proj_btn"]'));
        this.closeRevealButton = protractor_1.element(protractor_1.by.css('a[class="close-reveal-modal"]')); //maybe better at common page?
        // New project modal elements
        this.createProjectwithWizzard = 'div[class="radio-selector-label"]';
        this.createProjectManually = 'div[class="radio-selector-label"]';
        // createProjectManually= element(by.css('div[class="radio-selector project-type-selector"]'));
        this.nextButton = protractor_1.element(protractor_1.by.css('button[class="wizard-next-button button tiny right"]'));
        this.previousButton = protractor_1.element(protractor_1.by.css('button[class="wizard-next-button button tiny left"]'));
        this.projectNameFieldatCreate = protractor_1.element(protractor_1.by.css('input[name="name"]'));
        this.projectDescriptionatCreate = protractor_1.element(protractor_1.by.css('textarea[name="description"]'));
        this.projectCreateSuccessMessage = protractor_1.element(protractor_1.by.css('div[class="complete-step isSuccessful"]'));
        this.closeModalButton = protractor_1.element(protractor_1.by.css('span[class="react-modal-close"]'));
        this.newProjectLink = protractor_1.element(protractor_1.by.css('span[class="project-name"]'));
        // New project wizzard elements
        this.vcsIconSelector = 'div[class="radio-selector-label"]';
        this.almOption = 'span[class="Select-value-label"]';
        this.skipLink = protractor_1.element(protractor_1.by.css('span[class="inline-link"]'));
        this.apiToken = protractor_1.element(protractor_1.by.css('input[name="token"]'));
        this.almDropDownMenu = protractor_1.element(protractor_1.by.css('span[class="Select-arrow"]'));
        this.almUrl = protractor_1.element(protractor_1.by.css('input[name="url"]'));
        this.jiraImproveIssueTypesField = protractor_1.element(protractor_1.by.css('input[name="improve_types"]'));
        this.repoListTitle = protractor_1.element(protractor_1.by.css('div>h6[class"vcsName"]'));
        this.repoListHeaders = protractor_1.element(protractor_1.by.css('div[class="name-container"]'));
        this.repoList = protractor_1.element(protractor_1.by.css('div[class="repo-list"]'));
        this.repoListRow = 'div[class="name-container"]';
        this.repoProjectName = protractor_1.element(protractor_1.by.css('input[value="continuumautotests"]'));
        this.repoSelector = protractor_1.element(protractor_1.by.css('span[class="Select-value-label"]'));
        // repoSelector= element(by.css('div[class="Select-control"]'));
        this.githubName = protractor_1.element(protractor_1.by.css('input[name="name"]'));
        this.githubOwner = protractor_1.element(protractor_1.by.css('input[name="owner"]'));
        this.githubToken = protractor_1.element(protractor_1.by.css('input[class="password-input"]'));
        this.congratMessage = protractor_1.element(protractor_1.by.css('p'));
        this.createdProjectLink = protractor_1.element(protractor_1.by.css('a[href*="/flow/project_manage?="]'));
        // Add Artifact elements
        this.newArtifactName = protractor_1.element(protractor_1.by.css("div[style*='display: block']>label>input#new_artifact_name"));
        this.addArtifactButton = protractor_1.element(protractor_1.by.css("div[style*='display: block']>div#new_artifact_btn"));
        //Details Tab Elements
        this.projectDetailsType = protractor_1.element(protractor_1.by.css('input[id="project_desc"]'));
        this.projectTypeSelector = protractor_1.element(protractor_1.by.css('select[id="project_type"]'));
        //Globals Tab Elements
        this.globalsSaveButton = protractor_1.element(protractor_1.by.css('a[id="globals_save_btn"]'));
        this.globalsJsonEditor = protractor_1.element(protractor_1.by.css('div[class="jsoneditor jsoneditor-mode-tree"]'));
        //Notifications Elements
        this.enableNotificationsCheckBox = protractor_1.element(protractor_1.by.css('input[id="notify_enable"]'));
        this.enableWaitMailCheckboxEmail = protractor_1.element(protractor_1.by.css('input[id="notify_wait_email"]'));
        this.enableStartCheckBoxEmail = protractor_1.element(protractor_1.by.css('input[id="notify_start_email"]'));
        this.enableSuccessCheckBoxEmail = protractor_1.element(protractor_1.by.css('input[id="notify_success_email"]'));
        this.enableFailureCheckBoxEmail = protractor_1.element(protractor_1.by.css('input[id="notify_failure_email"]'));
        this.enableFailureCheckBoxSlack = protractor_1.element(protractor_1.by.css('input[id="notify_failure_slack"]'));
        this.enableStartCheckBoxSlack = protractor_1.element(protractor_1.by.css('input[id="notify_start_slack"]'));
        this.enableSuccessCheckBoxSlack = protractor_1.element(protractor_1.by.css('input[id="notify_success_slack"]'));
        this.enableWaitMailCheckboxSlack = protractor_1.element(protractor_1.by.css('input[id="notify_wait_slack"]'));
        this.enableFailureCheckBoxHTTP = protractor_1.element(protractor_1.by.css('input[id="notify_failure_http"]'));
        this.enableStartCheckBoxHTTP = protractor_1.element(protractor_1.by.css('input[id="notify_start_http"]'));
        this.enableSuccessCheckBoxHTTP = protractor_1.element(protractor_1.by.css('input[id="notify_success_http"]'));
        this.enableWaitMailCheckboxHTTP = protractor_1.element(protractor_1.by.css('input[id="notify_wait_http"]'));
        this.enableFailureCheckBoxHchat = protractor_1.element(protractor_1.by.css('input[id="notify_failure_hip"]'));
        this.enableStartCheckBoxHchat = protractor_1.element(protractor_1.by.css('input[id="notify_start_hip"]'));
        this.enableSuccessCheckBoxHchat = protractor_1.element(protractor_1.by.css('input[id="notify_success_hip"]'));
        this.enableWaitMailCheckboxHchat = protractor_1.element(protractor_1.by.css('input[id="notify_wait_hip"]'));
        this.emailAddrsArea = protractor_1.element(protractor_1.by.css('textarea[id="notify_email_addresses"]'));
        this.hipChatRoomField = protractor_1.element(protractor_1.by.css('input[id="notify_hipchat_room"]'));
        this.slackChannelArea = protractor_1.element(protractor_1.by.css('input[id="notify_slack_channel"]'));
        this.urlArea = protractor_1.element(protractor_1.by.css('input[id="notify_http_url"]'));
        this.dataforUrlArea = protractor_1.element(protractor_1.by.css('textarea[id="notify_http_data"]'));
        //Versions Tab Elements
        this.currentVersionInputField = protractor_1.element(protractor_1.by.css('input[id="project_version"]'));
        this.updateVersionBtn = protractor_1.element(protractor_1.by.css('span[id="save_version_btn"]'));
        //Actions Tab Elements
        this.addActionBtn = protractor_1.element(protractor_1.by.css('button[class="create-button"]'));
        //Next element to be used when teams/roles features come in place, delete the previous one.
        // addActionBtn = element(by.css('button[class="create-button"]'));
        //Data Flow Tab Elements
        this.addNewDataFlowBtn = protractor_1.element(protractor_1.by.css('span[id="new_mapping_btn"]'));
        //Artifacts Tab Elements
        this.addNewArtifactBtn = protractor_1.element(protractor_1.by.css('id="new_mapping_btn"'));
        //Source Tab Elements
        this.sourceTypeSelect = protractor_1.element(protractor_1.by.css('select[id="source_type"]'));
        this.webhookEndPoint = protractor_1.element(protractor_1.by.css('input[id="webhook_url"]'));
        this.sourceBranchRadioBtn = protractor_1.element(protractor_1.by.css('input[id="grpbranch"]'));
        this.lookupRadioRadioBtn = protractor_1.element(protractor_1.by.css('input[id="grplookup"]'));
        this.notifyOnUnmanagedCheckBox = protractor_1.element(protractor_1.by.css('input[id="notify_unmanaged"]'));
        this.addtnlRecipientsField = protractor_1.element(protractor_1.by.css('input[id="notify_unmanaged_addl"]'));
        //Elements New Project page
        this.projectSelector = protractor_1.element(protractor_1.by.css("#projects #react-select-2--value .Select-input [aria-activedescendant='react-select-2--value']"));
        this.teamSelector = protractor_1.element(protractor_1.by.css(".create-single-project .Select-input input"));
        this.projectDisplayedAtSelector = protractor_1.element(protractor_1.by.css('div[class="page-header"]>span'));
        this.projectOptionFromMenu = 'div[class*="Select-option"]';
        this.projectSaveBtn = protractor_1.element(protractor_1.by.css('button[id="save_btn"]'));
        this.projectCopyBtn = protractor_1.element(protractor_1.by.css('button[class="standard-button"]'));
        this.sourceTab = protractor_1.element(protractor_1.by.linkText("Source"));
        this.useGrpBranch = protractor_1.element(protractor_1.by.id('grpbranch'));
        this.useGrpLookup = protractor_1.element(protractor_1.by.id('grplookup'));
        this.btnCreateDirective = protractor_1.element(protractor_1.by.css('.create-button'));
    }
    return ProjectPage;
}());
exports.ProjectPage = ProjectPage;
