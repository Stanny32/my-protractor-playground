'use strict';
const Messages = require('./../../pages/common/Messages');
const genericMessage = new Messages();

this.World = require('./../../pages/support/world');

const { Given, When, Then, And } = require('cucumber');

Then('I see message {string}', async (message) => {
    await genericMessage.messageText().should.eventually.contain(message);

});