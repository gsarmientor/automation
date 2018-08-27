/*====================================================================
 * No of Locators	: 73
 * Purpose			: Project Page Locators
 * Create_Date		: 01/31/2018
 * Last Modified	: 06/26/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class ProjectPage {
    //Main project page elements
    projectDescriptionField= element(by.css('textarea[id="project_desc"]'));
    activeProject= element(by.css('li[class="panel pointer libitem active"]'));
    copyProjectBtn= element(by.css('button[class="standard-button"]'));
    newProjectButton= element(by.css('button[class="button tiny"]'));
    projectNameList= 'li[class="panel pointer libitem"]';
    projectType= 'select[id="project_type"]';
    projectTypeOption= 'option[value="';
    projectTabs = "li[class*='divider tab-title']>a";
    sourceType = "select#source_type";
    addNewArtifactButton = element(by.id("new_art"));
    copyProjectName = element(by.css('input[id="copy_proj_name"]'));
    copyProjectBtnatModal = element(by.css('div[id="copy_proj_btn"]'));
    closeRevealButton = element(by.css('a[class="close-reveal-modal"]')); //maybe better at common page?

    // New project modal elements
    createProjectwithWizzard= 'div[class="radio-selector-label"]';
    createProjectManually= 'div[class="radio-selector-label"]';
    // createProjectManually= element(by.css('div[class="radio-selector project-type-selector"]'));
    nextButton= element(by.css('button[class="wizard-next-button button tiny right"]'));
    previousButton= element(by.css('button[class="wizard-next-button button tiny left"]'));
    projectNameFieldatCreate= element(by.css('input[name="name"]'));
    projectDescriptionatCreate= element(by.css('textarea[name="description"]'));
    projectCreateSuccessMessage= element(by.css('div[class="complete-step isSuccessful"]'));
    closeModalButton= element(by.css('span[class="react-modal-close"]'));
    newProjectLink= element(by.css('span[class="project-name"]'));

    // New project wizzard elements
    vcsIconSelector= 'div[class="radio-selector-label"]';
    almOption= 'span[class="Select-value-label"]';
    skipLink= element(by.css('span[class="inline-link"]'));
    apiToken= element(by.css('input[name="token"]'));
    almDropDownMenu= element(by.css('span[class="Select-arrow"]'));
    almUrl= element(by.css('input[name="url"]'));
    jiraImproveIssueTypesField = element(by.css('input[name="improve_types"]'));
    repoListTitle= element(by.css('div>h6[class"vcsName"]'));
    repoListHeaders= element(by.css('div[class="name-container"]'));
    repoList= element(by.css('div[class="repo-list"]'));
    repoListRow= 'div[class="name-container"]';
    repoProjectName= element(by.css('input[value="continuumautotests"]'));
    repoSelector= element(by.css('span[class="Select-value-label"]'));
    // repoSelector= element(by.css('div[class="Select-control"]'));
    githubName= element(by.css('input[name="name"]'));
    githubOwner= element(by.css('input[name="owner"]'));
    githubToken= element(by.css('input[class="password-input"]'));
    congratMessage = element(by.css('p'));
    createdProjectLink = element(by.css('a[href*="/flow/project_manage?="]'));

    // Add Artifact elements
    newArtifactName = element(by.css("div[style*='display: block']>label>input#new_artifact_name"));
    addArtifactButton = element(by.css("div[style*='display: block']>div#new_artifact_btn"));

    //Details Tab Elements
    projectDetailsType = element(by.css('input[id="project_desc"]'));
    projectTypeSelector = element(by.css('select[id="project_type"]'));


    //Globals Tab Elements
    globalsSaveButton = element(by.css('a[id="globals_save_btn"]'));
    globalsJsonEditor = element(by.css('div[class="jsoneditor jsoneditor-mode-tree"]'));

    //Notifications Elements
    enableNotificationsCheckBox = element(by.css('input[id="notify_enable"]'));
    enableWaitMailCheckboxEmail = element(by.css('input[id="notify_wait_email"]'));
    enableStartCheckBoxEmail = element(by.css('input[id="notify_start_email"]'));
    enableSuccessCheckBoxEmail = element(by.css('input[id="notify_success_email"]'));
    enableFailureCheckBoxEmail = element(by.css('input[id="notify_failure_email"]'));
    enableFailureCheckBoxSlack = element(by.css('input[id="notify_failure_slack"]'));
    enableStartCheckBoxSlack = element(by.css('input[id="notify_start_slack"]'));
    enableSuccessCheckBoxSlack = element(by.css('input[id="notify_success_slack"]'));
    enableWaitMailCheckboxSlack = element(by.css('input[id="notify_wait_slack"]'));
    enableFailureCheckBoxHTTP = element(by.css('input[id="notify_failure_http"]'));
    enableStartCheckBoxHTTP = element(by.css('input[id="notify_start_http"]'));
    enableSuccessCheckBoxHTTP = element(by.css('input[id="notify_success_http"]'));
    enableWaitMailCheckboxHTTP = element(by.css('input[id="notify_wait_http"]'));
    enableFailureCheckBoxHchat = element(by.css('input[id="notify_failure_hip"]'));
    enableStartCheckBoxHchat = element(by.css('input[id="notify_start_hip"]'));
    enableSuccessCheckBoxHchat = element(by.css('input[id="notify_success_hip"]'));
    enableWaitMailCheckboxHchat = element(by.css('input[id="notify_wait_hip"]'));
    emailAddrsArea = element(by.css('textarea[id="notify_email_addresses"]'));
    hipChatRoomField = element(by.css('input[id="notify_hipchat_room"]'));
    slackChannelArea = element(by.css('input[id="notify_slack_channel"]'));
    urlArea = element(by.css('input[id="notify_http_url"]'));
    dataforUrlArea = element(by.css('textarea[id="notify_http_data"]'));

    //Versions Tab Elements
    currentVersionInputField = element(by.css('input[id="project_version"]'));
    updateVersionBtn = element(by.css('span[id="save_version_btn"]'));

    //Actions Tab Elements
    addActionBtn = element(by.css('button[class="create-button"]'));
    //Next element to be used when teams/roles features come in place, delete the previous one.
    // addActionBtn = element(by.css('button[class="create-button"]'));

    //Data Flow Tab Elements
    addNewDataFlowBtn = element(by.css('span[id="new_mapping_btn"]'));

    //Artifacts Tab Elements
    addNewArtifactBtn = element(by.css('id="new_mapping_btn"'))

    //Source Tab Elements
    sourceTypeSelect = element(by.css('select[id="source_type"]'));
    webhookEndPoint = element(by.css('input[id="webhook_url"]'));
    sourceBranchRadioBtn = element(by.css('input[id="grpbranch"]'));
    lookupRadioRadioBtn = element(by.css('input[id="grplookup"]'));
    notifyOnUnmanagedCheckBox = element(by.css('input[id="notify_unmanaged"]'));
    addtnlRecipientsField = element(by.css('input[id="notify_unmanaged_addl"]'));

    //Elements New Project page
    projectSelector = element(by.css("#projects #react-select-2--value .Select-input [aria-activedescendant='react-select-2--value']"));
    teamSelector = element(by.css(".create-single-project .Select-input input"));
    projectDisplayedAtSelector = element(by.css('div[class="page-header"]>span'));
    projectOptionFromMenu = 'div[class*="Select-option"]';
    projectSaveBtn = element(by.css('button[id="save_btn"]'));
    projectCopyBtn = element(by.css('button[class="standard-button"]'));

    sourceTab = element(by.linkText("Source"));
    useGrpBranch = element(by.id('grpbranch'));
    useGrpLookup = element(by.id('grplookup'));
    btnCreateDirective = element(by.css('.create-button'));
 }