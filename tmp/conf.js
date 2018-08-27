"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//Report in HTML format
var HtmlReporter = require('protractor-beautiful-reporter');
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');
exports.config = {
    framework: 'jasmine2', chromeOnly: true, directConnect: true,
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            // disable "chrome is being controlled by automated software"
            'args': ['disable-infobars=true'],
            // disable Password manager popup
            'prefs': {
                'credentials_enable_service': false
            }
        },
    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 90000 //Increase the default jasmine time
        //interval.
    },
    specs: [
        'src/continuum/testcases/login/login_e2e.spec.js',
        'src/continuum/testcases/admin/admin_regression.spec.js',
        'src/continuum/testcases/tasks/tasks_regression.spec.js',
        'src/continuum/testcases/progression/progression_regression.spec.js',
        'src/continuum/testcases/package/package_regression.spec.js',
        // 'src/continuum/testcases/pipeline/pipeline_regression.spec.js',
        'src/continuum/testcases/user_manage/user_manage_regression.spec.js',
        'src/continuum/testcases/team/team_regression.spec.js',
        'src/continuum/testcases/project/project_page_regression.spec.js',
    ],
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: false,
    // Continuum configuration
    CTMHostUrl: 'http://10.200.73.238:8080',
    SELENIUM_PROMISE_MANAGER: false,
    // Assign the test reporter to each running instance
    onPrepare: function () {
        //Code to generate HTML Test report
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            baseDirectory: 'HTMLReport/',
            screenshotsSubfolder: 'Screenshot',
            jsonsSubfolder: 'jsons',
            //excludeSkippedSpecs: true,
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'Regression Tests Continuum - Development Branch',
            docName: 'TestReport.html',
        }).getJasmine2Reporter());
        //Code to generate Spec report in console
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true
        }));
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'reports/',
            filePrefix: 'xmloutput'
        }));
    },
    onComplete: function () {
        var path = require("path");
        var browserName, browserVersion;
        var reportPath = path.join('./reports/');
        var testConfig = {
            reportTitle: '<h2 style=\"margin:auto; text-indent:25px;\">CTM E2E Automation Report.</h2>',
            outputPath: reportPath,
            screenshotPath: 'reports/screenshots/',
            applicationUrl: protractor_1.browser.baseUrl,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testBrowser: 'Chrome',
            browserVersion: " Version 68.0.3440.84 (Official Build) (64-bit)",
        };
        new HTMLReport().from(reportPath + 'xmloutput.xml', testConfig);
    }
};
