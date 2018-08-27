var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "1. should validate elements at Login Page|Continuum Regression - 1. Login Test suite",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056883358,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056887818,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056888146,
                "type": ""
            }
        ],
        "timestamp": 1535056887479,
        "duration": 883
    },
    {
        "description": "2. should validate user can access with correct credentials|Continuum Regression - 1. Login Test suite",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056888817,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056889013,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056889679,
                "type": ""
            }
        ],
        "timestamp": 1535056888382,
        "duration": 2178
    },
    {
        "description": "1. should validate pages in Admin menu|Continuum Regression - 2. Admin pages \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056890944,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056891362,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056892044,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056892215,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056893064,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056894089,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056896217,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056897637,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056899238,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056900533,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056902710,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056904247,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056909333,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056909979,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056910440,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056913304,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056917193,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056920131,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 469 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056922217,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056923048,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 5561 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056923894,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056924678,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056926065,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056927491,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056929648,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056931024,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 383 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056933700,
                "type": ""
            }
        ],
        "timestamp": 1535056893437,
        "duration": 40169
    },
    {
        "description": "4.1 validate elements at task admin page|Continuum Regression - 4. Task page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056934035,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056934428,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535056934934,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056935136,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056935771,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056936930,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 5561 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056937274,
                "type": ""
            }
        ],
        "timestamp": 1535056937394,
        "duration": 198
    },
    {
        "description": "4.2 validate a task can make a winrm connection|Continuum Regression - 4. Task page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056939574,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056939886,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535056999536,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 5561 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535056999927,
                "type": ""
            }
        ],
        "timestamp": 1535056937596,
        "duration": 62443
    },
    {
        "description": "4.3 validate copy task|Continuum Regression - 4. Task page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1535057000050,
        "duration": 6024
    },
    {
        "description": "4.4 export and import a task|Continuum Regression - 4. Task page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://10.200.73.238:8080/automate/temp/TaskCop_Administrator_1535056891.xml - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1535057008606,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057011185,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057018399,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 5561 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057018776,
                "type": ""
            }
        ],
        "timestamp": 1535057006077,
        "duration": 12808
    },
    {
        "description": "4.5 delete a task|Continuum Regression - 4. Task page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057019521,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 5561 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057019852,
                "type": ""
            }
        ],
        "timestamp": 1535057018895,
        "duration": 2957
    },
    {
        "description": "4.6 make an SSH connection|Continuum Regression - 4. Task page \n",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "Screenshot/00470068-00b3-0045-0062-008400b800ea.png",
        "timestamp": 1535057021856,
        "duration": 0
    },
    {
        "description": "4.7 make an HTTP request|Continuum Regression - 4. Task page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057023947,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057024146,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057070572,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 5561 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057071027,
                "type": ""
            }
        ],
        "timestamp": 1535057021860,
        "duration": 49282
    },
    {
        "description": "5.1 validate items on the 'Add New' dialog|Continuum Regression - 5. Progression page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057074627,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057075006,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057075440,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057075701,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057076342,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057077256,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057077881,
                "type": ""
            }
        ],
        "timestamp": 1535057077601,
        "duration": 594
    },
    {
        "description": "5.2 Add new Progression|Continuum Regression - 5. Progression page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057078590,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057079135,
                "type": ""
            }
        ],
        "timestamp": 1535057078201,
        "duration": 2024
    },
    {
        "description": "5.3 open and validate items on the Progression Details tab|Continuum Regression - 5. Progression page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1535057080229,
        "duration": 83
    },
    {
        "description": "5.4 add Phases to Progression|Continuum Regression - 5. Progression page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057082393,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057082920,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057083190,
                "type": ""
            }
        ],
        "timestamp": 1535057080317,
        "duration": 2440
    },
    {
        "description": "4.1 validate items on the 'Add New' dialog|Continuum Regression - 4. Package page \n",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, input[id=\"username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, input[id=\"username\"])\n    at elementArrayFinder.getWebElements.then (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:814:27)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:831:22)\n    at LoginModule.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:212:86)\n    at step (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:32:23)\n    at Object.next (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:13:53)\n    at /Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:3:12)\n    at LoginModule.setUsername (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:209:16)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:63:5)\n    at addSpecsToSuite (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:53:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057083946,
                "type": ""
            }
        ],
        "screenShotFile": "Screenshot/00220078-00b8-0049-00f7-0050000e008e.png",
        "timestamp": 1535057084290,
        "duration": 5004
    },
    {
        "description": "4.2 add new Package|Continuum Regression - 4. Package page \n",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, input[id=\"username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, input[id=\"username\"])\n    at elementArrayFinder.getWebElements.then (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:814:27)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:831:22)\n    at LoginModule.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:212:86)\n    at step (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:32:23)\n    at Object.next (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:13:53)\n    at /Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:3:12)\n    at LoginModule.setUsername (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:209:16)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:63:5)\n    at addSpecsToSuite (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:53:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [],
        "screenShotFile": "Screenshot/00bd0047-0079-006e-0014-00eb000700bf.png",
        "timestamp": 1535057089649,
        "duration": 5003
    },
    {
        "description": "4.3 validate Package Details|Continuum Regression - 4. Package page \n",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, input[id=\"username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, input[id=\"username\"])\n    at elementArrayFinder.getWebElements.then (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:814:27)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:831:22)\n    at LoginModule.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:212:86)\n    at step (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:32:23)\n    at Object.next (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:13:53)\n    at /Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:3:12)\n    at LoginModule.setUsername (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:209:16)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:63:5)\n    at addSpecsToSuite (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:53:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [],
        "screenShotFile": "Screenshot/000c00d6-0032-0021-009a-0070005b003f.png",
        "timestamp": 1535057094991,
        "duration": 2003
    },
    {
        "description": "4.4 select a Package|Continuum Regression - 4. Package page \n",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, input[id=\"username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, input[id=\"username\"])\n    at elementArrayFinder.getWebElements.then (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:814:27)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:831:22)\n    at LoginModule.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:212:86)\n    at step (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:32:23)\n    at Object.next (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:13:53)\n    at /Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:3:12)\n    at LoginModule.setUsername (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:209:16)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:63:5)\n    at addSpecsToSuite (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:53:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [],
        "screenShotFile": "Screenshot/001100f5-007e-00be-0060-00ab008e00a5.png",
        "timestamp": 1535057097344,
        "duration": 2004
    },
    {
        "description": "4.5 associate a Progression|Continuum Regression - 4. Package page \n",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, input[id=\"username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, input[id=\"username\"])\n    at elementArrayFinder.getWebElements.then (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:814:27)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:831:22)\n    at LoginModule.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:212:86)\n    at step (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:32:23)\n    at Object.next (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:13:53)\n    at /Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:3:12)\n    at LoginModule.setUsername (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:209:16)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:63:5)\n    at addSpecsToSuite (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:53:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [],
        "screenShotFile": "Screenshot/00ca00bb-00f6-0055-0037-00d0004f00de.png",
        "timestamp": 1535057099687,
        "duration": 8007
    },
    {
        "description": "4.6 associate an Artifact|Continuum Regression - 4. Package page \n",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, input[id=\"username\"])",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, input[id=\"username\"])\n    at elementArrayFinder.getWebElements.then (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:814:27)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as sendKeys] (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/built/element.js:831:22)\n    at LoginModule.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:212:86)\n    at step (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:32:23)\n    at Object.next (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:13:53)\n    at /Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:3:12)\n    at LoginModule.setUsername (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/pageobjects/login/login_module.po.js:209:16)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:63:5)\n    at addSpecsToSuite (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/gustavosarmiento/qa/ctm-protractor/continuumautotests/tmp/src/continuum/testcases/package/package_regression.spec.js:53:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [],
        "screenShotFile": "Screenshot/000200e4-0024-009e-0019-009600c600a3.png",
        "timestamp": 1535057108033,
        "duration": 5002
    },
    {
        "description": "6.1 validate elements at admin user page|Continuum Regression - 6. User Manage page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057113852,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057114357,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057114803,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057115084,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057115785,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057116882,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention 461 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057117420,
                "type": ""
            }
        ],
        "timestamp": 1535057117327,
        "duration": 145
    },
    {
        "description": "6.2 validate elements at modify user page|Continuum Regression - 6. User Manage page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/userEdit - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057121661,
                "type": ""
            }
        ],
        "timestamp": 1535057117476,
        "duration": 16933
    },
    {
        "description": "6.3 create new administrator user|Continuum Regression - 6. User Manage page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057135080,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057135655,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/userEdit - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057137849,
                "type": ""
            }
        ],
        "timestamp": 1535057134415,
        "duration": 6567
    },
    {
        "description": "6.4 delete new administrator user|Continuum Regression - 6. User Manage page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057141609,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057143953,
                "type": ""
            }
        ],
        "timestamp": 1535057140989,
        "duration": 5530
    },
    {
        "description": "6.5 copy Administrator user|Continuum Regression - 6. User Manage page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057147062,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057149418,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/userEdit - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057151637,
                "type": ""
            }
        ],
        "timestamp": 1535057146525,
        "duration": 7975
    },
    {
        "description": "6.6 filter by username|Continuum Regression - 6. User Manage page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057155131,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057155617,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057158353,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "intervention - Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057160765,
                "type": ""
            }
        ],
        "timestamp": 1535057154506,
        "duration": 8859
    },
    {
        "description": "1. Validate elements at Team admin page Create Team|Continuum Regression - 4. Team page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057166819,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057167134,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057167543,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057167860,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057168638,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057169713,
                "type": ""
            }
        ],
        "timestamp": 1535057171741,
        "duration": 140
    },
    {
        "description": "2. Create Team|Continuum Regression - 4. Team page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1535057171887,
        "duration": 5356
    },
    {
        "description": "3. Validate tabs after Team is created|Continuum Regression - 4. Team page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1535057177249,
        "duration": 463
    },
    {
        "description": "4. Edit & Update Team1 Data|Continuum Regression - 4. Team page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1535057177720,
        "duration": 2310
    },
    {
        "description": "5. Create Team2|Continuum Regression - 4. Team page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057180610,
                "type": ""
            }
        ],
        "timestamp": 1535057180037,
        "duration": 6675
    },
    {
        "description": "6. Edit & Update Team2 Data|Continuum Regression - 4. Team page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1535057186720,
        "duration": 2304
    },
    {
        "description": "3.1 validate items at Project Page|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057189509,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057189859,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://10.200.73.238:8080/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1535057190249,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057190531,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057191213,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057192193,
                "type": ""
            }
        ],
        "timestamp": 1535057192757,
        "duration": 36
    },
    {
        "description": "3.2 create new project Manually with Source type|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057193163,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057205939,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://10.200.73.238:8080/dist/scripts/project_manage.js 62 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057206585,
                "type": ""
            }
        ],
        "timestamp": 1535057192815,
        "duration": 15248
    },
    {
        "description": "3.2.1 tabs are present for new project Source type|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1535057208071,
        "duration": 1294
    },
    {
        "description": "3.3 create new project Manually with Integration type|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057209723,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057222587,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://10.200.73.238:8080/dist/scripts/project_manage.js 62 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057223240,
                "type": ""
            }
        ],
        "timestamp": 1535057209374,
        "duration": 15368
    },
    {
        "description": "3.3.1 tabs are present for new Integration project type|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1535057224750,
        "duration": 1067
    },
    {
        "description": "3.4 create new project Manually with General type|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057226119,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057239047,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://10.200.73.238:8080/dist/scripts/project_manage.js 62 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057239780,
                "type": ""
            }
        ],
        "timestamp": 1535057225825,
        "duration": 15432
    },
    {
        "description": "3.4.1 tabs are present for new Integration project type|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1535057241268,
        "duration": 1166
    },
    {
        "description": "3.5 create a new project using the wizzard|Continuum Regression - 3. Project page \n",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "Screenshot/0069005b-00c8-0088-00f5-00af002500b4.png",
        "timestamp": 1535057242442,
        "duration": 1
    },
    {
        "description": "3.6 Copy project to a new one|Continuum Regression - 3. Project page \n",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 46951,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057242844,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://10.200.73.238:8080/dist/scripts/project_manage.js 62 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057243497,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "deprecation 8560 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1535057244464,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://10.200.73.238:8080/dist/scripts/project_manage.js 62 Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: http://10.200.73.238:8080/dist/fonts/glyphicons-halflings-regular.woff2",
                "timestamp": 1535057245464,
                "type": ""
            }
        ],
        "timestamp": 1535057242449,
        "duration": 3172
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};