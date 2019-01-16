'use strict';
const { Then } = require('cucumber');

this.World = require('./../../pages/support/world');

Then('Wait {int}', async (int) => {
    await browser.sleep(`${int}000`);

});

