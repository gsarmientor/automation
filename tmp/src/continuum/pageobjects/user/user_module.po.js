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
 * No of Functions	: 1
 * Purpose			: User functions
 * Create_Date		: 08/06/2018
 * Last Modified	: 08/06/2018
 * Author			: Venkat Thandi Sivagangai
 * Developed By		: Venkat Thandi Sivagangai
 * Reviewed By		: Murali Yalamandala
 ======================================================================*/
var protractor_1 = require("protractor");
var common_module_po_1 = require("../common/common_module.po");
var login_page_po_1 = require("../login/login_page.po");
var user_page_po_1 = require("../user/user_page.po");
var UserModule = /** @class */ (function () {
    function UserModule() {
        this.commonModule = new common_module_po_1.CommonModule();
        this.continuumLoginPage = new login_page_po_1.LoginPage();
        this.continuumUserPage = new user_page_po_1.UserPage();
    }
    //This function is used to create the User
    UserModule.prototype.validateUserEditPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.continuumUserPage.btnAddUser.isDisplayed()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.continuumUserPage.btnDeleteUser.isDisplayed()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.continuumUserPage.btnCopyUser.isDisplayed()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.continuumUserPage.txtSearchUser.isDisplayed()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect("Users").toContain("Users")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.CreateUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumUserPage.btnAddUser.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.sleep(10000);
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.continuumUserPage.txtUserLoginId), 2000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.txtUserLoginId.sendKeys("oneone")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.txtUserFullName.sendKeys("One One One")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.txtUserEmail.sendKeys("one@versionone.com")];
                    case 5:
                        _a.sent();
                        //await this.continuumUserPage.lstUserStatus();
                        //await this.continuumUserPage.lstUserRole();
                        return [4 /*yield*/, this.continuumUserPage.chkBoxAdmin.click()];
                    case 6:
                        //await this.continuumUserPage.lstUserStatus();
                        //await this.continuumUserPage.lstUserRole();
                        _a.sent();
                        //await this.continuumUserPage.lstTeamsTeam.click();
                        //await this.continuumUserPage.lstTeamRole.click();
                        return [4 /*yield*/, this.continuumUserPage.dropDownUserAuth.click()];
                    case 7:
                        //await this.continuumUserPage.lstTeamsTeam.click();
                        //await this.continuumUserPage.lstTeamRole.click();
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.chkBoxGenPwd.click()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.txtUserPwd.sendKeys("Collabnet1!")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.txtUserPwdCnfm.sendKeys("Collabnet1!")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.chkBoxForcePwdChg.click()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.continuumUserPage.dateExpiration.click()];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserModule;
}());
exports.UserModule = UserModule;
