'use strict';
const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const targetDirName = 'target';
const reportsDirName = 'reports';
const cucumberJsonReportDirName = 'cucumber-json';
const cucumberHtmlReportDirName = 'cucumber-html';

module.exports = {

    createReportDirs() {
        if (!fs.existsSync(targetDirName)) {
            fs.mkdirSync(targetDirName);
        }
        if (!fs.existsSync(`${targetDirName}/${reportsDirName}`)) {
            fs.mkdirSync(`${targetDirName}/${reportsDirName}`);
        }
        if (!fs.existsSync(`${targetDirName}/${reportsDirName}/${cucumberJsonReportDirName}`)) {
            fs.mkdirSync(`${targetDirName}/${reportsDirName}/${cucumberJsonReportDirName}`);
        }
        if (!fs.existsSync(`${targetDirName}/${reportsDirName}/${cucumberHtmlReportDirName}`)) {
            fs.mkdirSync(`${targetDirName}/${reportsDirName}/${cucumberHtmlReportDirName}`);
        }
    },

    postResults() {
        const options = {
            theme: 'bootstrap',
            jsonDir: `./${targetDirName}/${reportsDirName}/${cucumberJsonReportDirName}`,
            output: `./${targetDirName}/${reportsDirName}/${cucumberHtmlReportDirName}/cucumber_report.html`,
            reportSuiteAsScenarios: true,
            ignoreBadJsonFile: true
        };
        reporter.generate(options);
    }

};