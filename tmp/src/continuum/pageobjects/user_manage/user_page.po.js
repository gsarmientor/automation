"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 32
 * Purpose			: User Page Locators
 * Create_Date		: 07/13/2018
 * Last Modified	: 08/2/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var UserPage = /** @class */ (function () {
    function UserPage() {
        //Main user manage page elements
        this.addNewUserButton = protractor_1.element(protractor_1.by.id('item_create_btn'));
        this.copyUserButton = protractor_1.element(protractor_1.by.id('item_copy_btn'));
        this.deleteUserButton = protractor_1.element(protractor_1.by.id('item_delete_btn'));
        this.deleteUserConfirmButton = protractor_1.element(protractor_1.by.id('dialog_delete_button'));
        this.userFilterField = protractor_1.element(protractor_1.by.id('txtSearch'));
        this.usersTable = protractor_1.element(protractor_1.by.css('tbody>tr'));
        this.usersList = protractor_1.element.all(protractor_1.by.css('td[class="selectable"]'));
        this.userModifyTabs = "li[class*='divider tab-title']>a";
        this.xButton = protractor_1.element(protractor_1.by.css('a[class=["close-reveal-modal"]'));
        this.dialogTitle = protractor_1.element(protractor_1.by.className('edit_dialog_title'));
        //Modify User elements
        //General Tab
        this.loginIDfield = protractor_1.element(protractor_1.by.id('txtUserLoginID'));
        this.fullNamefield = protractor_1.element(protractor_1.by.id('txtUserFullName'));
        this.emailfield = protractor_1.element(protractor_1.by.id('txtUserEmail'));
        this.statusSelector = protractor_1.element(protractor_1.by.id('ddlUserStatus'));
        this.userRoleSelector = protractor_1.element(protractor_1.by.id('ddlUserRole'));
        this.authenticationSelector = protractor_1.element(protractor_1.by.id('ddlUserAuthType'));
        this.passwordField = protractor_1.element(protractor_1.by.id('txtUserPassword'));
        this.confirmPasswordField = protractor_1.element(protractor_1.by.id('txtUserPasswordConfirm'));
        this.forcePasswordChange = protractor_1.element(protractor_1.by.id('cbNewUserForcePasswordChange'));
        this.expireOnField = protractor_1.element(protractor_1.by.id('txtExpirationDT'));
        this.failedLoginAttempts = protractor_1.element(protractor_1.by.id('lblFailedLoginAttempts'));
        this.failedAttempsButton = protractor_1.element(protractor_1.by.id('clear_failed_btn'));
        this.passwordResetButton = protractor_1.element(protractor_1.by.id('pw_reset_btn'));
        this.changeLogButton = protractor_1.element(protractor_1.by.id('show_log_link'));
        this.passwordResetInfo = protractor_1.element(protractor_1.by.id('pw_reset_info'));
        this.saveButton = protractor_1.element(protractor_1.by.id('edit_dialog_save'));
        this.isSystemAdminChkBx = protractor_1.element(protractor_1.by.id('cbIsSystemAdministrator'));
        this.teamSelector = protractor_1.element(protractor_1.by.css('label[class="filter-label team-select"]>span>div>div>#react-select-2--value > div.Select-input > input'));
        this.teamRoleSelector = protractor_1.element(protractor_1.by.css('#react-select-3--value-item'));
        //Token tab elements
        this.token = protractor_1.element(protractor_1.by.id('TokenTab'));
        this.revokeTokenButton = protractor_1.element(protractor_1.by.id('token_revoke_btn'));
        //Contributor tab elements
        this.contributorField = protractor_1.element(protractor_1.by.id('txtContributors'));
    }
    return UserPage;
}());
exports.UserPage = UserPage;
