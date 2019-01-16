'use strict';
const AbstractPage = require('./../abstract/AbstractPage');
const ptor = require('protractor');
const testUsers = require('./../../test-data/testUsers');

module.exports = class LoginPage extends AbstractPage {
    constructor() { super('login'); }

    get $usernameField() { return ptor.$('#username'); }
    get $passwordField() { return ptor.$('#password'); }
    get $loginButton() { return ptor.$('.radius'); }

    enterUsername(username) { return this.$usernameField.sendKeys(username); }
    enterPassword(password) { return this.$passwordField.sendKeys(password); }
    clickLoginButton() { return this.$loginButton.click(); }

    async login({ userId, password }) {
        await this.waitTillVisible(this.$usernameField);
        await this.enterUsername(userId);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async waitForLoginWidget() { await this.waitTillVisible(this.$usernameField); }



};
