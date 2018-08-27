/*====================================================================
 * No of Locators	: 32
 * Purpose			: User Page Locators
 * Create_Date		: 07/13/2018
 * Last Modified	: 08/2/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: 
 ======================================================================*/
 import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

 export class UserPage {
    //Main user manage page elements
    addNewUserButton = element(by.id('item_create_btn'));
    copyUserButton = element(by.id('item_copy_btn'));
    deleteUserButton = element(by.id('item_delete_btn'));
    deleteUserConfirmButton = element(by.id('dialog_delete_button'));
    userFilterField = element(by.id('txtSearch'));
    usersTable = element(by.css('tbody>tr'));
    usersList = element.all(by.css('td[class="selectable"]'));
    userModifyTabs = "li[class*='divider tab-title']>a";
    xButton = element(by.css('a[class=["close-reveal-modal"]'));
    dialogTitle = element(by.className('edit_dialog_title'));

    //Modify User elements
    //General Tab
    loginIDfield = element(by.id('txtUserLoginID'));
    fullNamefield = element(by.id('txtUserFullName'));
    emailfield = element(by.id('txtUserEmail'));
    statusSelector = element(by.id('ddlUserStatus'));
    userRoleSelector = element(by.id('ddlUserRole'));
    authenticationSelector = element(by.id('ddlUserAuthType'));
    passwordField = element(by.id('txtUserPassword'));
    confirmPasswordField = element(by.id('txtUserPasswordConfirm'));
    forcePasswordChange = element(by.id('cbNewUserForcePasswordChange'));
    expireOnField = element(by.id('txtExpirationDT'));
    failedLoginAttempts = element(by.id('lblFailedLoginAttempts'));
    failedAttempsButton = element(by.id('clear_failed_btn'));
    passwordResetButton = element(by.id('pw_reset_btn'));
    changeLogButton = element(by.id('show_log_link'));
    passwordResetInfo = element(by.id('pw_reset_info'));
    saveButton = element(by.id('edit_dialog_save'));
    isSystemAdminChkBx = element(by.id('cbIsSystemAdministrator'));
    teamSelector = element(by.css('label[class="filter-label team-select"]>span>div>div>#react-select-2--value > div.Select-input > input'));
    teamRoleSelector = element(by.css('#react-select-3--value-item'));

    //Token tab elements
    token = element(by.id('TokenTab'));
    revokeTokenButton = element(by.id('token_revoke_btn'));

    //Contributor tab elements
    contributorField = element(by.id('txtContributors'));

 }