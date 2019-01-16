'use strict';
const { ProtractorBaseConf } = require('./protractorBase.conf');

const cucumberOpts = {
    require: [
        '../pages/support/env.js',
        '../pages/support/hooks.js',
        '../steps/**/*steps.js'
    ],
    tags: ['~@wip', '~@todo', '~@reporting'],
    profile: false,
    'no-source': true,
    format: 'json:./target/reports/cucumber-json/cucumber_report.json'
};

const params = {
    environment: 'test',
    baseUrl: 'http://the-internet.herokuapp.com'
};

exports.config = new ProtractorBaseConf(cucumberOpts, params, params.baseUrl);
console.log('==== I am in Test Environment ====');