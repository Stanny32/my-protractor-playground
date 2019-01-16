'use strict';
const AbstractPage = require('./../abstract/AbstractPage');
const ptor = require('protractor');

module.exports = class ErrorMessages extends AbstractPage {

    get $flashMessage() { return ptor.$('#flash-messages'); }

    async messageText() {
        await this.waitTillVisible(this.$flashMessage);
        return this.$flashMessage.getText();
    }

};
