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
 * No of Functions	: 10
 * Purpose			: User Manage Page functions
 * Create_Date		: 07/13/2018
 * Last Modified	: 08/2/2018
 * Author			: Gustavo Sarmiento
 * Developed By		: Gustavo Sarmiento
 * Reviewed By		:
 ======================================================================*/
var protractor_1 = require("protractor");
var common_page_po_1 = require("../common/common_page.po");
var common_module_po_1 = require("../common/common_module.po");
var user_page_po_1 = require("../user_manage/user_page.po");
var UserModule = /** @class */ (function () {
    function UserModule() {
        this.continuumCommonPage = new common_page_po_1.CommonPage();
        this.continuumCommonModule = new common_module_po_1.CommonModule();
        this.userPage = new user_page_po_1.UserPage();
    }
    //Validate elements at admin user page
    UserModule.prototype.validateAdminUserPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.userPage.addNewUserButton.isDisplayed()).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.userPage.copyUserButton.isDisplayed()).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(this.userPage.deleteUserButton.isDisplayed()).toBeTruthy()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.userPage.userFilterField.isDisplayed()).toBeTruthy()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Selects a user from the list at User Manage.
    UserModule.prototype.selectUserfromList = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.driver.findElement(protractor_1.by.id('users')).then(function (table) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, table.findElements(protractor_1.by.tagName('tr')).then(function (rows) { return __awaiter(_this, void 0, void 0, function () {
                                                var i;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            i = 0;
                                                            i = 0;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(i < rows.length)) return [3 /*break*/, 4];
                                                            return [4 /*yield*/, rows[i].findElements(protractor_1.by.tagName('td')).then(function (cols) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var _this = this;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, cols[2].getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                                                                                    return __generator(this, function (_a) {
                                                                                        switch (_a.label) {
                                                                                            case 0:
                                                                                                if (!(text == userName)) return [3 /*break*/, 2];
                                                                                                return [4 /*yield*/, cols[2].click()];
                                                                                            case 1:
                                                                                                _a.sent();
                                                                                                _a.label = 2;
                                                                                            case 2:
                                                                                                ;
                                                                                                return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                }); })];
                                                                            case 1:
                                                                                _a.sent();
                                                                                return [2 /*return*/];
                                                                        }
                                                                    });
                                                                }); })];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            i++;
                                                            return [3 /*break*/, 1];
                                                        case 4:
                                                            ;
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Selects a user from the list at User Manage.
    UserModule.prototype.markUserfromList = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.driver.findElement(protractor_1.by.id('users')).then(function (table) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, table.findElements(protractor_1.by.tagName('tr')).then(function (rows) { return __awaiter(_this, void 0, void 0, function () {
                                                var i;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            i = 0;
                                                            i = 0;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(i < rows.length)) return [3 /*break*/, 4];
                                                            return [4 /*yield*/, rows[i].findElements(protractor_1.by.tagName('td')).then(function (cols) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var _this = this;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, cols[2].getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                                                                                    return __generator(this, function (_a) {
                                                                                        switch (_a.label) {
                                                                                            case 0:
                                                                                                if (!(text == userName)) return [3 /*break*/, 2];
                                                                                                return [4 /*yield*/, cols[0].click()];
                                                                                            case 1:
                                                                                                _a.sent();
                                                                                                _a.label = 2;
                                                                                            case 2:
                                                                                                ;
                                                                                                return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                }); })];
                                                                            case 1:
                                                                                _a.sent();
                                                                                return [2 /*return*/];
                                                                        }
                                                                    });
                                                                }); })];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            i++;
                                                            return [3 /*break*/, 1];
                                                        case 4:
                                                            ;
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //find user in list
    UserModule.prototype.findUserfromList = function (userName, present) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.driver.findElement(protractor_1.by.id('users')).then(function (table) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, table.findElements(protractor_1.by.tagName('tr')).then(function (rows) { return __awaiter(_this, void 0, void 0, function () {
                                                var i, foundUser;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            i = 0;
                                                            foundUser = 'Not listed';
                                                            i = 0;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(i < rows.length)) return [3 /*break*/, 4];
                                                            return [4 /*yield*/, rows[i].findElements(protractor_1.by.tagName('td')).then(function (cols) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var _this = this;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, cols[2].getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                                                                                    return __generator(this, function (_a) {
                                                                                        if (text == userName) {
                                                                                            foundUser = 'Listed';
                                                                                        }
                                                                                        ;
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                }); })];
                                                                            case 1:
                                                                                _a.sent();
                                                                                return [2 /*return*/];
                                                                        }
                                                                    });
                                                                }); })];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            i++;
                                                            return [3 /*break*/, 1];
                                                        case 4:
                                                            ;
                                                            expect(foundUser).toEqual(present);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // validates tabs presence and their elements in Modify user dialog
    UserModule.prototype.validateTabsModifyUser = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var modifyUserTabs, _a, _b, _i, tabIndex, tab;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        modifyUserTabs = ['General', 'Groups (Tags)', 'Token', 'Contributor'];
                        return [4 /*yield*/, this.selectUserfromList(userName)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 2:
                        _c.sent();
                        _a = [];
                        for (_b in modifyUserTabs)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        tabIndex = _a[_i];
                        tab = protractor_1.browser.element(protractor_1.by.cssContainingText(this.userPage.userModifyTabs, modifyUserTabs[tabIndex]));
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(tab), 2000)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, expect(tab.isDisplayed()).toBeTruthy()];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, tab.click()];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, this.validateElementinTab(modifyUserTabs[tabIndex])];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 3];
                    case 10:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    //This validates elements in a Modify User tab
    UserModule.prototype.validateElementinTab = function (tabName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = tabName;
                        switch (_a) {
                            case 'General': return [3 /*break*/, 1];
                            case 'Group (Tags)': return [3 /*break*/, 18];
                            case 'Token': return [3 /*break*/, 20];
                            case 'Contributor': return [3 /*break*/, 24];
                        }
                        return [3 /*break*/, 27];
                    case 1: return [4 /*yield*/, expect(this.userPage.loginIDfield.isDisplayed()).toBeTruthy()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.fullNamefield.isDisplayed()).toBeTruthy()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.emailfield.isDisplayed()).toBeTruthy()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.statusSelector.isDisplayed()).toBeTruthy()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.userRoleSelector.isDisplayed()).toBeTruthy()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.authenticationSelector.isDisplayed()).toBeTruthy()];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.passwordField.isDisplayed()).toBeTruthy()];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.confirmPasswordField.isDisplayed()).toBeTruthy()];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.forcePasswordChange.isDisplayed()).toBeTruthy()];
                    case 10:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.expireOnField.isDisplayed()).toBeTruthy()];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.failedLoginAttempts.isDisplayed()).toBeTruthy()];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.failedAttempsButton.isDisplayed()).toBeTruthy()];
                    case 13:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.passwordResetButton.isDisplayed()).toBeTruthy()];
                    case 14:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.passwordResetInfo.isDisplayed()).toBeTruthy()];
                    case 15:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.changeLogButton.isDisplayed()).toBeTruthy()];
                    case 16:
                        _b.sent();
                        // await expect(this.userPage.xButton.isDisplayed()).toBeTruthy();
                        return [4 /*yield*/, expect(this.userPage.saveButton.isDisplayed()).toBeTruthy()];
                    case 17:
                        // await expect(this.userPage.xButton.isDisplayed()).toBeTruthy();
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 18: return [4 /*yield*/, expect(this.userPage.saveButton.isDisplayed()).toBeTruthy()];
                    case 19:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 20: return [4 /*yield*/, expect(this.userPage.saveButton.isDisplayed()).toBeTruthy()];
                    case 21:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.token.isDisplayed()).toBeTruthy()];
                    case 22:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.revokeTokenButton.isDisplayed()).toBeTruthy()];
                    case 23:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 24: return [4 /*yield*/, expect(this.userPage.saveButton.isDisplayed()).toBeTruthy()];
                    case 25:
                        _b.sent();
                        return [4 /*yield*/, expect(this.userPage.contributorField.isDisplayed()).toBeTruthy()];
                    case 26:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 27: return [3 /*break*/, 28];
                    case 28: return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.createNewUser = function (userName, email, status, userGlobalRole, team, teamRole) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Users')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.addNewUserButton.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.userPage.userModifyTabs, 'General')).click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.loginIDfield.sendKeys(userName)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.fullNamefield.sendKeys(userName)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.emailfield.sendKeys(email)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.setUserStatus(status)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.setUserGlobalRole(userGlobalRole)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.isSystemAdminChkBx.click()];
                    case 11:
                        _a.sent();
                        // await this.setUserTeam(team);
                        return [4 /*yield*/, this.userPage.teamSelector.sendKeys(team + '\n')];
                    case 12:
                        // await this.setUserTeam(team);
                        _a.sent();
                        return [4 /*yield*/, this.userPage.teamRoleSelector.click().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.selectUserTeamRole(teamRole)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.passwordField.sendKeys(userName)];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.confirmPasswordField.sendKeys(userName)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.forcePasswordChange.click()];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.saveButton.click()];
                    case 17:
                        _a.sent();
                        // expect(this.continuumCommonPage.messageDialog.isPresent()).toBeFalsy();
                        return [4 /*yield*/, this.findUserfromList(userName, 'Listed')];
                    case 18:
                        // expect(this.continuumCommonPage.messageDialog.isPresent()).toBeFalsy();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.setUserStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = status;
                        switch (_a) {
                            case 'Enabled': return [3 /*break*/, 1];
                            case 'Locked': return [3 /*break*/, 3];
                            case 'Disabled': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.userPage.statusSelector.sendKeys('e')];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.userPage.statusSelector.sendKeys('l')];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.userPage.statusSelector.sendKeys('d')];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7: return [3 /*break*/, 8];
                    case 8:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.setUserGlobalRole = function (userGlobalRole) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = userGlobalRole;
                        switch (_a) {
                            case 'User': return [3 /*break*/, 1];
                            case 'Developer': return [3 /*break*/, 3];
                            case 'Administrator': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.userPage.userRoleSelector.sendKeys('u')];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.userPage.userRoleSelector.sendKeys('d')];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.userPage.userRoleSelector.sendKeys('a')];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7: return [3 /*break*/, 8];
                    case 8:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    // async setUserTeam(team) {
    //     switch (team) {
    //         case 'Default':
    //             await this.userPage.teamSelector.sendKeys('def\n');
    //             break;
    //         case 'QATeam':
    //             await this.userPage.teamSelector.sendKeys('QAT\n');
    //             break;
    //         case 'DevTeam':
    //             await this.userPage.teamSelector.sendKeys('DevT\n');
    //             break;
    //     }
    // }
    UserModule.prototype.selectUserTeamRole = function (teamRole) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = teamRole;
                        switch (_a) {
                            case 'User': return [3 /*break*/, 1];
                            case 'Developer': return [3 /*break*/, 3];
                            case 'Team Administrator': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.Key.ENTER).perform()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 3: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.Key.ARROW_DOWN, protractor_1.Key.ENTER).perform()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.Key.ARROW_DOWN, protractor_1.Key.ARROW_DOWN, protractor_1.Key.ENTER).perform()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.deleteUser = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Users')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.markUserfromList(userName)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.deleteUserButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.userPage.deleteUserConfirmButton), 3000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.deleteUserConfirmButton.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.findUserfromList(userName, 'Not listed')];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.copyUser = function (userNameFrom, newUserName, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Users')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.markUserfromList(userNameFrom)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.copyUserButton.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.element(protractor_1.by.cssContainingText(this.userPage.userModifyTabs, 'General')).click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.userPage.loginIDfield), 3000)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, expect(this.userPage.dialogTitle.getText()).toContain('Create New User like')];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.loginIDfield.sendKeys(newUserName)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.fullNamefield.sendKeys(newUserName)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.emailfield.sendKeys(email)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.passwordField.sendKeys(newUserName)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.confirmPasswordField.sendKeys(newUserName)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.saveButton.click()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.findUserfromList(newUserName, 'Listed')];
                    case 15:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserModule.prototype.filterByUser = function (filterBy) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.continuumCommonModule.clickAdminButton()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.continuumCommonModule.selectItemfromAdminMenu('Users')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.userPage.userFilterField), 3000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userPage.userFilterField.sendKeys(filterBy + '\n')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.driver.findElement(protractor_1.by.id('users')).then(function (table) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, table.findElements(protractor_1.by.tagName('tr')).then(function (rows) { return __awaiter(_this, void 0, void 0, function () {
                                                var i, timesFoundUser;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            i = 0;
                                                            timesFoundUser = 0;
                                                            i = 0;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(i < rows.length)) return [3 /*break*/, 4];
                                                            return [4 /*yield*/, rows[i].findElements(protractor_1.by.tagName('td')).then(function (cols) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var _this = this;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, cols[2].getText().then(function (text) { return __awaiter(_this, void 0, void 0, function () {
                                                                                    return __generator(this, function (_a) {
                                                                                        if (text == filterBy) {
                                                                                            timesFoundUser++;
                                                                                        }
                                                                                        ;
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                }); })];
                                                                            case 1:
                                                                                _a.sent();
                                                                                return [2 /*return*/];
                                                                        }
                                                                    });
                                                                }); })];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            i++;
                                                            return [3 /*break*/, 1];
                                                        case 4:
                                                            ;
                                                            expect(timesFoundUser).toEqual(1);
                                                            expect(rows.length).toEqual(1);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.deleteUser(filterBy)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserModule;
}());
exports.UserModule = UserModule;
