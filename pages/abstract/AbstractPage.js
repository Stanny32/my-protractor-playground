'use strict';
const AbstractContainer = require('./AbstractContainer');

module.exports = class AbstractPage extends AbstractContainer {
    constructor(relativeUrl) {
        super();
        this.relativeUrl = relativeUrl;
    }

    async openByUrl() {
        await browser.driver.get(`${browser.params.baseUrl}/${this.relativeUrl}`);
    }

};