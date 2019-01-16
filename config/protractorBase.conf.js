'use strict';
const protractor = require('protractor');
const report = require('../pages/support/report');

class ProtractorBaseConf {
    constructor(cucumberOpts, params) {
        this.cucumberOpts = cucumberOpts;
        this.params = params;
        this.framework = 'custom';
        this.frameworkPath = require.resolve('protractor-cucumber-framework');
        this.specs = ['../**/*.feature'];
        this.seleniumAddress = 'http://localhost:4444/wd/hub';
        this.capabilities = {
            browserName: 'chrome',
            idleTimeout: '3600',
            // shardTestFiles: true,
            maxInstances: 6,
            chromeOptions: {
                args: [
                    // '--lang=en', '--headless', '--disable-gpu',
                    // '--enable-precache', '--disable-infobars',
                    'window-size=1220,880',
                ],
            }
        };
        this.onPrepare = () => {
            report.createReportDirs();
            protractor.browser.ignoreSynchronization = true;
        };
        this.onComplete = () => {
            report.postResults();
        };
    }
}

exports.ProtractorBaseConf = ProtractorBaseConf;