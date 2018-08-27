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
 * Purpose			: Login functions
 * Create_Date		: 01/21/2018
 * Last Modified	: 06/26/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		: Rino van Dam
 ======================================================================*/
var protractor_1 = require("protractor");
var common_module_po_1 = require("../common/common_module.po");
var login_page_po_1 = require("../login/login_page.po");
var conf_1 = require("../../../../conf");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
        this.commonModule = new common_module_po_1.CommonModule();
        this.continuumLoginPage = new login_page_po_1.LoginPage();
    }
    //This function is used to validate the loginButton
    LoginModule.prototype.validateLoginButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.continuumLoginPage.btnLogin), 2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.continuumLoginPage.btnLogin.isEnabled()).toBe(false, 'Oops, login button seems to be enabled.')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to validate wrong username and password fields
    LoginModule.prototype.validateWrongUsernameandPasswordFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.continuumLoginPage.boxLoginAlert;
                        return [4 /*yield*/, this.commonModule.waitForElementToBePresent(alert)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(alert.getText()).toContain("Invalid Username or Password")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to navigate to project pages without logging in
    LoginModule.prototype.tryNavigatingToOtherPages = function (pageNames, loginurl) {
        if (pageNames === void 0) { pageNames = Array; }
        if (loginurl === void 0) { loginurl = String; }
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < pageNames.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, protractor_1.browser.get(pageNames[i])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (url) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(url).toEqual(loginurl, 'Oops... was able to navigate to "' + pageNames[i] + '" page before logging in.')];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        ++i;
                        return [3 /*break*/, 1];
                    case 5:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to navigate to project pages after logging in
    LoginModule.prototype.navigateToOtherPagesafterLoggingIn = function (pageNames) {
        if (pageNames === void 0) { pageNames = Array; }
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function () {
                            var targetURL;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        targetURL = pageNames[i];
                                        return [4 /*yield*/, protractor_1.browser.get(pageNames[i]).then(function (url1) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (url) {
                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                        return __generator(this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0: return [4 /*yield*/, expect(url).toEqual(targetURL, 'Oops... was not able to navigate to "' + targetURL + '" page after logging in.')];
                                                                                case 1:
                                                                                    _a.sent();
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    });
                                                                })];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < pageNames.length - 1)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        ++i;
                        return [3 /*break*/, 1];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to get the DLM Host URL
    LoginModule.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get("" + conf_1.config.CTMHostUrl)];
                    case 1:
                        _a.sent();
                        protractor_1.browser.ignoreSynchronization = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to set the user name
    LoginModule.prototype.setUsername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumLoginPage.btnUsername.sendKeys(username)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to set the password
    LoginModule.prototype.setPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumLoginPage.btnPassword.sendKeys(password)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginModule.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.setUsername(username)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setPassword(password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.continuumLoginPage.btnLogin.click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to logout from the application
    LoginModule.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.continuumLoginPage.btnAccount), 5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumLoginPage.btnAccount.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.continuumLoginPage.btnLogout).toBeTruthy('Oops... Logout button not present.')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.continuumLoginPage.btnLogout.click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //This function is used to go to user preferences page
    LoginModule.prototype.navigateToUserPrefernces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumLoginPage.btnPreferences.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginModule;
}());
exports.LoginModule = LoginModule;
