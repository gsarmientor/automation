"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*====================================================================
 * No of Locators	: 33
 * Purpose			: Users Page Locators
 * Create_Date		: 06/08/2018
 * Last Modified	: 06/08/2018
 * Author			: Venkat Thandi Sivagangai
 * Developed By		: Venkat Thandi Sivagangai
 * Reviewed By		: Murali Yalamandala
 ======================================================================*/
var protractor_1 = require("protractor");
var UserPage = /** @class */ (function () {
    function UserPage() {
        this.btnAddUser = protractor_1.element(protractor_1.by.id("item_create_btn"));
        this.btnCopyUser = protractor_1.element(protractor_1.by.id("item_copy_btn"));
        this.btnDeleteUser = protractor_1.element(protractor_1.by.id("item_delete_btn"));
        this.txtSearchUser = protractor_1.element(protractor_1.by.id("txtSearch"));
        this.chkBoxAll = protractor_1.element(protractor_1.by.id("chkAll"));
        this.txtUserLoginId = protractor_1.element(protractor_1.by.id("txtUserLoginID"));
        this.txtUserFullName = protractor_1.element(protractor_1.by.id("txtUserFullName"));
        this.txtUserEmail = protractor_1.element(protractor_1.by.id("txtUserEmail"));
        this.lstUserStatus = protractor_1.element(protractor_1.by.id("ddlUserStatus"));
        this.lstUserRole = protractor_1.element(protractor_1.by.id("ddlUserRole"));
        this.chkBoxAdmin = protractor_1.element(protractor_1.by.id("cbIsSystemAdministrator"));
        this.lstTeam = protractor_1.element(protractor_1.by.css('.team-selector .Select-control')); // To be in common Module
        this.lstTeamsTeam = protractor_1.element(protractor_1.by.css('.team-select .Select-control'));
        //lstTeamsTeam = element(by.css('.team-select .Select-arrow-custom'));
        this.lstTeamRole = protractor_1.element(protractor_1.by.css('.role-select .Select-arrow-custom'));
        this.dropDownUserAuth = protractor_1.element(protractor_1.by.id("ddlUserAuthType"));
        this.chkBoxGenPwd = protractor_1.element(protractor_1.by.id("chkGeneratePW"));
        this.txtUserPwd = protractor_1.element(protractor_1.by.id("txtUserPassword"));
        this.txtUserPwdCnfm = protractor_1.element(protractor_1.by.id("txtUserPasswordConfirm"));
        this.chkBoxForcePwdChg = protractor_1.element(protractor_1.by.id("cbNewUserForcePasswordChange"));
        this.dateExpiration = protractor_1.element(protractor_1.by.id("txtExpirationDT"));
        this.btnSave = protractor_1.element(protractor_1.by.id("edit_dialog_save"));
        this.tabGeneral = protractor_1.element(protractor_1.by.css("a[href='#GeneralTab']"));
        this.tabGroups = protractor_1.element(protractor_1.by.css("a[href='#GroupsTab']"));
        this.tabToken = protractor_1.element(protractor_1.by.css("a[href='#TokenTab']"));
        this.tabContrib = protractor_1.element(protractor_1.by.css("a[href='#ContributorTab']"));
        this.allPickerApprover = protractor_1.element(protractor_1.by.id("tpt_Approvers"));
        this.allPickerTester = protractor_1.element(protractor_1.by.id("tpt_Testers"));
        this.allPickerPlayer = protractor_1.element(protractor_1.by.id("tpt_bingo-players"));
        this.assgndPickerApprover = protractor_1.element(protractor_1.by.id("ot_Approvers"));
        this.assgndPickerTester = protractor_1.element(protractor_1.by.id("ot_Testers"));
        this.assgndPickerPlayer = protractor_1.element(protractor_1.by.id("ot_bingo-players"));
        this.btnRevoke = protractor_1.element(protractor_1.by.id("token_revoke_btn"));
        this.txtContribUser = protractor_1.element(protractor_1.by.id("txtContributors"));
        //react newobjects
        this.ddTeamSelecter1 = protractor_1.element(protractor_1.by.css(".team-select #react-select-2--value input[aria-activedescendant='react-select-2--value']"));
        this.ddTeamSelecter2 = protractor_1.element(protractor_1.by.css(".team-select #react-select-4--value input[aria-activedescendant='react-select-4--value']"));
        this.ddUserRole1 = protractor_1.element(protractor_1.by.id("react-select-3--value-item"));
        this.ddUserRole2 = protractor_1.element(protractor_1.by.id("react-select-5--value-item"));
        this.ddTeamOption1 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-2--option-0']"));
        this.ddTeamOption2 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-4--option-0']"));
        this.ddUserRoleTeamAdministratorOption1 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-3--option-2']"));
        this.ddUserRoleDeveloperOption1 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-3--option-1']"));
        this.ddUserRoleUserOption1 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-3--option-0']"));
        this.ddUserRoleTeamAdministratorOption2 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-5--option-2']"));
        this.ddUserRoleDeveloperOption2 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-5--option-1']"));
        this.ddUserRoleUserOption2 = protractor_1.element(protractor_1.by.xpath(".//*[@id='react-select-5--option-0']"));
        this.linkAddTeam = protractor_1.element(protractor_1.by.css('#add_team a'));
        this.txtFilterUser = protractor_1.element(protractor_1.by.css('input#txtSearch'));
        this.tblUser = protractor_1.element(protractor_1.by.css('#users'));
    }
    return UserPage;
}());
exports.UserPage = UserPage;
;
