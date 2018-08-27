import {Config, browser, Ptor} from 'protractor';


//Report in HTML format
var HtmlReporter = require('protractor-beautiful-reporter');
interface CTMConfig extends Config {
    CTMHostUrl: string;
}

var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');

export const config: CTMConfig = {
    framework: 'jasmine2',chromeOnly:true ,directConnect: true,
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
        defaultTimeoutInterval: 90000//Increase the default jasmine time
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
            'src/continuum/testcases/project/project_page_regression.spec.js',
     ],
     

    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: false,

    // Continuum configuration
    CTMHostUrl: 'http://vctm:8080',

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
                applicationUrl: browser.baseUrl,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testBrowser: 'Chrome',
                browserVersion: " Version 68.0.3440.84 (Official Build) (64-bit)",
            };
            new HTMLReport().from(reportPath + 'xmloutput.xml', testConfig);
        }
}