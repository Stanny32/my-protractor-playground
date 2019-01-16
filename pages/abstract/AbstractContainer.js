'use strict';

const ptor = require('protractor');
const until = ptor.ExpectedConditions;

module.exports = class AbstractContainer {

    async waitTillVisible($element, timeOut = 5000) {
        await ptor.browser.wait(until.visibilityOf($element), timeOut);
    }

    async waitForUrl($url, timeOut = 5000) {
        await ptor.browser.wait(until.urlContains($url), timeOut);
    }


};